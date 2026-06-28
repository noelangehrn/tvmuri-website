import Card from "@/components/ui/Card";
import vorstand from "@/data/vorstand.json";

export default function VorstandPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-8">Vorstand</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vorstand.map((person) => (
          <Card key={person.name} className="p-6 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary">{person.name.charAt(0)}</span>
            </div>
            <h3 className="font-bold text-secondary">{person.name}</h3>
            <p className="text-sm text-primary font-medium">{person.funktion}</p>
            <a href={`mailto:${person.email}`} className="text-sm text-gray-500 hover:text-primary mt-2 inline-block">{person.email}</a>
          </Card>
        ))}
      </div>
    </div>
  );
}
