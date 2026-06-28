import Link from "next/link";
import Card from "@/components/ui/Card";
import { Users, Building2, History, Calendar, Shield, UserPlus, Download } from "lucide-react";

const sections = [
  { href: "/verein/vorstand", label: "Vorstand", icon: Users, desc: "Das Präsidium und die Ressortverantwortlichen" },
  { href: "/verein/organisation", label: "Organisation", icon: Building2, desc: "Strukturen und Organisation des Vereins" },
  { href: "/verein/geschichte", label: "Geschichte", icon: History, desc: "Die Geschichte von Handball TV Muri seit 1996" },
  { href: "/verein/kalender", label: "Vereinskalender", icon: Calendar, desc: "Wichtige Termine im Vereinsjahr" },
  { href: "/verein/schiedsrichter", label: "Schiedsrichter", icon: Shield, desc: "Infos rund ums Schiedsrichterwesen" },
  { href: "/verein/schnuppertraining", label: "Schnuppertraining", icon: UserPlus, desc: "Einfach vorbeikommen und mitmachen" },
  { href: "/verein/downloads", label: "Downloads", icon: Download, desc: "Formulare, Dokumente und Merkblätter" },
];

export default function VereinPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Verein</h1>
      <p className="text-gray-600 max-w-2xl mb-10">
        Der Handball TV Muri wurde 1996 gegründet und zählt heute rund 400 Mitglieder in über 25 Teams.
        Wir sind ein familiener Verein, der die Freude am Handball in den Mittelpunkt stellt.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((s) => (
          <Link key={s.href} href={s.href}>
            <Card className="p-6 h-full hover:shadow-md transition-shadow group">
              <s.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-bold text-secondary group-hover:text-primary transition-colors mb-2">{s.label}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
