import { NextRequest, NextResponse } from "next/server";

function generateState(length = 32) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_CLIENT_ID!;
  const siteUrl = process.env.SITE_URL || `https://${request.headers.get("host")}`;
  const state = generateState();

  const redirectUri = `${siteUrl}/api/auth/callback`;
  const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo+user&state=${state}`;

  const response = NextResponse.redirect(githubUrl);
  response.cookies.set("gh_oauth_state", state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 10,
  });

  return response;
}
