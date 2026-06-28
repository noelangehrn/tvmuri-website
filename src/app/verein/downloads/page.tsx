import { FileText } from "lucide-react";
import Card from "@/components/ui/Card";

const downloads = [
  { name: "Beitrittserklärung", file: "/downloads/beitrittserklaerung.pdf" },
  { name: "Reglement Nachwuchs", file: "/downloads/reglement-nachwuchs.pdf" },
  { name: "Helfereinsätze Vorrunde 25/26", file: "/downloads/helfereinsaetze.pdf" },
];

export default function DownloadsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-8">Downloads</h1>
      <div className="space-y-4">
        {downloads.map((item) => (
          <Card key={item.name} className="p-4">
            <a href={item.file} download className="flex items-center gap-4 group">
              <FileText className="w-8 h-8 text-primary shrink-0" />
              <div>
                <span className="font-medium text-secondary group-hover:text-primary transition-colors">{item.name}</span>
                <p className="text-sm text-gray-500">PDF-Dokument</p>
              </div>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}
