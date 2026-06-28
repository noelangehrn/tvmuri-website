import Link from "next/link";
import HeroSection from "@/components/sections/HeroSection";
import NewsCard from "@/components/sections/NewsCard";
import SponsorGrid from "@/components/sections/SponsorGrid";
import Button from "@/components/ui/Button";
import news from "@/data/news.json";
import teams from "@/data/teams.json";

export default function HomePage() {
  const latestNews = news.slice(0, 3);

  return (
    <>
      <HeroSection />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary">Aktuelle News</h2>
            <Button href="/news" variant="outline">Alle News</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">Nächste Spiele</h2>
          <p className="text-gray-600 mb-6">Spielpläne und Resultate findest du im Matchcenter des SHV.</p>
          <div className="bg-gray-50 rounded-xl p-6 text-center">
            <p className="text-gray-500 mb-4">Aktuelle Spielpläne aller Teams</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="https://www.handball.ch/de/matchcenter/vereine/140340" variant="primary">Zum Matchcenter</Button>
              <Button href="https://www.handball.ch/de/matchcenter/hallen/140982#/schedule" variant="outline">Hallenspielplan</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary">Unsere Teams</h2>
            <Button href="/teams" variant="outline">Alle Teams</Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {teams.filter(t => ["maenner1liga", "sgfrauen2ligas1", "u11", "donnstigsrondi"].includes(t.id)).map((team) => (
              <Link key={team.id} href={`/teams/${team.slug}`} className="group">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 text-center hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-secondary group-hover:text-primary transition-colors">{team.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{team.liga}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-4">Über den Verein</h2>
            <p className="text-gray-600 mb-6">
              Der Handball TV Muri wurde 1996 gegründet und ist heute mit über 25 Teams einer der grössten Handballvereine der Region.
              Unser Ziel ist es, die Freude am Handball weiterzugeben – vom Breitensport bis zur 1. Liga.
            </p>
            <Button href="/verein" variant="primary">Mehr erfahren</Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-8">Unsere Sponsoren</h2>
          <SponsorGrid />
        </div>
      </section>
    </>
  );
}
