import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const storedState = request.cookies.get("gh_oauth_state")?.value;

  if (!code) {
    return new NextResponse("Missing code", { status: 400 });
  }

  if (state && storedState && state !== storedState) {
    return new NextResponse("State mismatch", { status: 400 });
  }

  const clientId = process.env.GITHUB_CLIENT_ID!;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET!;

  try {
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    const data = await tokenResponse.json();
    const accessToken = data.access_token;

    if (!accessToken) {
      return new NextResponse("Failed to get access token", { status: 400 });
    }

    const html = `<!DOCTYPE html><html><body><script>
      (function() {
        function receiveMessage(e) {
          if (e.data === "authing") {
            window.removeEventListener("message", receiveMessage);
            e.source.postMessage("token:${accessToken}", e.origin);
          }
        }
        window.addEventListener("message", receiveMessage);
        if (window.opener) {
          window.opener.postMessage("authorizing:${accessToken}", "*");
        }
      })();
    </script></body></html>`;

    return new NextResponse(html, {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  } catch {
    return new NextResponse("OAuth error", { status: 500 });
  }
}
