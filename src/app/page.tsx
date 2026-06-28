import Link from "next/link";
import { Newspaper, Users, Calendar, Mail, ExternalLink, UserPlus } from "lucide-react";
import HeroSection from "@/components/sections/HeroSection";
import NewsCard from "@/components/sections/NewsCard";
import SponsorGrid from "@/components/sections/SponsorGrid";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import news from "@/data/news.json";
import teams from "@/data/teams.json";

const quicklinks = [
  { href: "/news", label: "News", icon: Newspaper, desc: "Aktuelle Berichte" },
  { href: "/teams", label: "Teams", icon: Users, desc: "Alle Mannschaften" },
  { href: "https://www.handball.ch/de/matchcenter/vereine/140340", label: "Matchcenter", icon: ExternalLink, desc: "Spielplan & Resultate", external: true },
  { href: "/verein/schnuppertraining", label: "Schnuppern", icon: UserPlus, desc: "Einfach mitmachen" },
  { href: "/verein/kalender", label: "Kalender", icon: Calendar, desc: "Vereinstermine" },
  { href: "/kontakt", label: "Kontakt", icon: Mail, desc: "Schreib uns" },
];

export default function HomePage() {
  const latestNews = news.slice(0, 3);

  return (
    <>
      <HeroSection />

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {quicklinks.map((link) => {
              const Icon = link.icon;
              const content = (
                <Card className="p-4 sm:p-5 h-full hover:shadow-md hover:border-primary/20 transition-all group cursor-pointer text-center">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-sm sm:text-base text-secondary group-hover:text-primary transition-colors">{link.label}</h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-0.5">{link.desc}</p>
                </Card>
              );
              if (link.external) {
                return <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{content}</a>;
              }
              return <Link key={link.href} href={link.href}>{content}</Link>;
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
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

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-8">Unsere Teams</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {teams.filter(t => ["maenner1liga", "sgfrauen2ligas1", "sgmu17inter", "u11", "donnstigsrondi", "sgfreiamttogether"].includes(t.id)).map((team) => (
              <Link key={team.id} href={`/teams/${team.slug}`} className="group">
                <Card className="p-4 text-center hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-sm text-secondary group-hover:text-primary transition-colors">{team.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{team.liga}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white">
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

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-secondary mb-8">Unsere Sponsoren</h2>
          <SponsorGrid />
        </div>
      </section>
    </>
  );
}
