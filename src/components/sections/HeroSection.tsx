import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-secondary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60 z-10" />
      <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Die Freude am Handball <span className="text-primary">weitergeben</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Handball TV Muri – über 25 Teams, eine Leidenschaft. Seit 1996 zuhause in der Halle Bachmatten.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/news" variant="primary">Aktuelle News</Button>
            <Button href="/verein/schnuppertraining" variant="outline">Schnuppertraining</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
