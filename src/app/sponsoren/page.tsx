import SponsorGrid from "@/components/sections/SponsorGrid";

export default function SponsorenPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Unsere Sponsoren</h1>
      <p className="text-gray-600 max-w-2xl mb-10">
        Wir bedanken uns herzlich bei allen Sponsoren, die den Handball TV Muri unterstützen. 
        Ohne diese Unterstützung wäre der Vereinsbetrieb nicht möglich.
      </p>
      <SponsorGrid />
    </div>
  );
}
