import Link from "next/link";
import { Users } from "lucide-react";

interface Team {
  id: string;
  slug: string;
  name: string;
  kategorie: string;
  liga: string;
}

export default function TeamCard({ team }: { team: Team }) {
  const categoryColors: Record<string, string> = {
    maenner: "from-blue-600 to-blue-800",
    frauen: "from-rose-500 to-rose-700",
    nachwuchs: "from-emerald-500 to-emerald-700",
    freizeit: "from-amber-500 to-amber-700",
  };

  return (
    <Link href={`/teams/${team.slug}`} className="group">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <div className={`h-24 bg-gradient-to-br ${categoryColors[team.kategorie] || "from-gray-600 to-gray-800"} flex items-center justify-center`}>
          <Users className="w-8 h-8 text-white/50" />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-secondary group-hover:text-primary transition-colors">{team.name}</h3>
          <p className="text-sm text-gray-500">{team.liga}</p>
        </div>
      </div>
    </Link>
  );
}
