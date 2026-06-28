import Button from "@/components/ui/Button";

export default function KalenderPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-8">Vereinskalender</h1>
      <p className="text-gray-600 mb-6">Die wichtigsten Termine im Vereinsjahr. Weitere Details findest du im offiziellen Vereinskalender.</p>
      <div className="space-y-4 mb-8">
        {[
          { date: "August 2026", event: "Saisonstart 2026/27" },
          { date: "September 2026", event: "Hauptversammlung" },
          { date: "Dezember 2026", event: "Weihnachtsfeier" },
          { date: "März 2027", event: "Polyturnier" },
          { date: "Juni 2027", event: "Saisonabschluss" },
        ].map((item) => (
          <div key={item.event} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100">
            <div className="w-24 shrink-0 text-sm font-semibold text-primary">{item.date}</div>
            <div className="text-gray-700">{item.event}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
