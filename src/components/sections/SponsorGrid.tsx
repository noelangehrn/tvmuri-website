import Image from "next/image";
import sponsors from "@/data/sponsoren.json";

const categoryLabels: Record<string, string> = {
  hauptsponsor: "Hauptsponsor & Ausrüster",
  "co-sponsor": "Co-Sponsoren",
  "top-sponsor": "Top-Sponsoren",
  "marketing-partner": "Marketing-Partner",
  anspielkreis: "Anspielkreis",
  "business-kids": "Business for Kids",
  foerderverein: "Förderverein",
};

export default function SponsorGrid() {
  const grouped = sponsors.reduce((acc, s) => {
    if (!acc[s.kategorie]) acc[s.kategorie] = [];
    acc[s.kategorie].push(s);
    return acc;
  }, {} as Record<string, typeof sponsors>);

  return (
    <div className="space-y-8">
      {Object.entries(grouped).map(([kategorie, items]) => (
        <div key={kategorie}>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">{categoryLabels[kategorie] || kategorie}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {items.map((sponsor) => (
              <a key={sponsor.name} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow h-24">
                <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center text-xs text-gray-400 font-medium">
                  {sponsor.name}
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
