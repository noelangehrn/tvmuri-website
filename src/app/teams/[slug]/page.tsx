import { notFound } from "next/navigation";
import Link from "next/link";
import { ExternalLink, MapPin, Clock } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import teams from "@/data/teams.json";
import news from "@/data/news.json";

export default async function TeamPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const team = teams.find((t) => t.slug === slug);
  if (!team) notFound();

  const teamNews = news.filter((n) => n.team === team.id);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <Link href="/teams" className="text-sm text-gray-500 hover:text-primary">&larr; Zurück zu allen Teams</Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-2">{team.name}</h1>
        <p className="text-lg text-gray-600">{team.liga} | Saison {team.saison}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          {teamNews.length > 0 && (
            <Card className="p-6">
              <h2 className="text-xl font-bold text-secondary mb-4">Spielberichte</h2>
              <ul className="space-y-3">
                {teamNews.map((article) => (
                  <li key={article.id}>
                    <Link href={`/news/${article.slug}`} className="text-primary hover:underline">
                      {article.titel}
                    </Link>
                    <span className="text-sm text-gray-500 ml-2">{article.datum}</span>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          {team.matchcenter_url && (
            <Card className="p-5">
              <h3 className="font-semibold text-secondary mb-3">Matchcenter</h3>
              <a href={team.matchcenter_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline text-sm">
                <ExternalLink className="w-4 h-4" />
                Spielplan & Resultate
              </a>
            </Card>
          )}

          {team.training && team.training.length > 0 && (
            <Card className="p-5">
              <h3 className="font-semibold text-secondary mb-3">Training</h3>
              <ul className="space-y-3">
                {team.training.map((t, i) => (
                  <li key={i} className="text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{t.tag}, {t.zeit}</span>
                    </div>
                    <div className="flex items-start gap-2 mt-1 ml-6">
                      <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{t.halle}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
