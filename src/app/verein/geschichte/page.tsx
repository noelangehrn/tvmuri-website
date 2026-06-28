export default function GeschichtePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-8">Geschichte</h1>
      <div className="space-y-8">
        {[
          { year: "1996", text: "Gründung des Handball TV Muri. Erste Mannschaft startet in der 3. Liga." },
          { year: "2000", text: "Aufstieg der 1. Mannschaft in die 2. Liga. Gründung der Nachwuchsabteilung." },
          { year: "2005", text: "Erster grosser Mitgliederschub. Der Verein zählt über 200 Mitglieder." },
          { year: "2010", text: "Einführung des Breitensport-Angebots mit Frauerondi und Donnstigsrondi." },
          { year: "2015", text: "Aufstieg der 1. Mannschaft in die 1. Liga. Meilenstein der Vereinsgeschichte." },
          { year: "2020", text: "Der Verein wächst auf über 25 Teams und 400 Mitglieder an." },
          { year: "2025", text: "Einführung der neuen Vereinswebseite. Modernisierung der Vereinskommunikation." },
        ].map((item) => (
          <div key={item.year} className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-primary mt-1.5" />
              <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
            </div>
            <div className="pb-8">
              <span className="text-sm font-bold text-primary">{item.year}</span>
              <p className="text-gray-700 mt-1">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
