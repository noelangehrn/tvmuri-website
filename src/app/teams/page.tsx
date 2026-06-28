import TeamCard from "@/components/sections/TeamCard";
import teams from "@/data/teams.json";

const sections = [
  { id: "maenner", label: "Aktivteams Männer" },
  { id: "frauen", label: "Aktivteams Frauen" },
  { id: "nachwuchs", label: "Nachwuchs" },
  { id: "freizeit", label: "Freizeitgruppen" },
];

export default function TeamsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-8">Unsere Teams</h1>
      {sections.map((section) => {
        const sectionTeams = teams.filter((t) => t.kategorie === section.id);
        if (sectionTeams.length === 0) return null;
        return (
          <section key={section.id} id={section.id} className="mb-12">
            <h2 className="text-2xl font-bold text-secondary mb-6">{section.label}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sectionTeams.map((team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
