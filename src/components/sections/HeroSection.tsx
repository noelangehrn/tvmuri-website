import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative bg-secondary overflow-hidden min-h-[70vh] sm:min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/60 z-10" />
      <div className="absolute inset-0">
        <img src="/images/hero-action-1.jpg" alt="Handball TV Muri" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40 w-full">
        <div className="max-w-2xl">
          <span className="inline-block text-5xl sm:text-7xl lg:text-9xl font-black text-primary/20 leading-none mb-2 select-none">#zämestark</span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Handball TV Muri
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 max-w-xl">
            Handball TV Muri – über 25 Teams, eine Leidenschaft. Seit 1996 zuhause in der Halle Bachmatten.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/news" variant="primary" className="text-base px-8 py-4">Aktuelle News</Button>
            <Button href="/verein/schnuppertraining" variant="outline" className="text-base px-8 py-4 text-white border-white hover:bg-white hover:text-secondary">Schnuppertraining</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
