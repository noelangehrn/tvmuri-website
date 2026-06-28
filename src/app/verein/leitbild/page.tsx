import Card from "@/components/ui/Card";
import { Heart, Users, Target, Trophy, Handshake, Sparkles } from "lucide-react";

const sections = [
  {
    icon: Sparkles,
    title: "Das isch de Handball TV Muri. Das send mer.",
    content: "Zusammen stark. Wir sind ein Handballverein mit Herz. Zusammenhalt und Familiarität zeichnen uns aus. Wertschätzung und Respekt werden in der Bachmattenhalle gelebt. Wir wissen, dass wir nur gemeinsam stark sind. Wir fördern den Handballsport mit Leidenschaft und Verstand. Für Muri und die Region. Wir sind offen für alle, die sich sportlich, ehrenamtlich und menschlich engagieren wollen – unabhängig von Alter, Können oder Ambition.",
  },
  {
    icon: Heart,
    title: "Zusammen stark",
    content: "Zusammenhalt und Familiarität zeichnen uns aus. Wertschätzung und Respekt werden in der Bachmattenhalle gelebt. Wir wissen, dass wir nur gemeinsam stark sind. Wir fördern den Handballsport mit Leidenschaft und Verstand. Für Muri und die Region. Wir sind offen für alle, die sich sportlich, ehrenamtlich und menschlich engagieren wollen – unabhängig von Alter, Können oder Ambition.",
  },
  {
    icon: Users,
    title: "Zusammen für die Zukunft",
    content: "Wir verstehen uns als Ausbildungsverein und bieten dafür ein Umfeld mit Teams auf allen Stufen. Gezielte Kooperationen mit Partnervereinen erweitern die Möglichkeiten für optimale und individuelle Ausbildungswege. Eine nachhaltige und langfristige Förderung steht bei uns stets im Mittelpunkt. Der Handball TV Muri ist dabei mehr als ein Sportverein. Mit dem sozialen Netzwerk und Handball als Lebensschule leisten wir gerade in der Jugendarbeit einen wichtigen Beitrag.",
  },
  {
    icon: Trophy,
    title: "Zusammen erfolgreich",
    content: "Die sportlich erfolgreichen Fanionteams sind unser Aushängeschild. Wir sind stolz darauf, dass die Kader primär aus unserem eigenen Nachwuchs stammen. So können wir die Identifikation im Dorf und innerhalb unseres Vereins hochhalten. Mit mehreren Aktivteams auf verschiedenen Stufen bieten wir unseren jungen Spielerinnen und Spielern Perspektiven im eigenen Verein. Die Heranführung und Integration in den Aktivbereich werden somit sinnvoll gestaltet. Gleichzeitig sind wir stolz, wenn unsere Top-Talente in die höchsten Ligen weiterziehen.",
  },
  {
    icon: Handshake,
    title: "Zusammen für unseren Verein",
    content: "Wir schätzen und pflegen unsere Partnerschaften. Wir sind dankbar für die Unterstützung durch unsere Sponsoren, Gönner und den Förderverein Pro Handball 96. Zusammenarbeit ist uns wichtig – mit Partnervereinen, dem Verband, Behörden und allen weiteren. Wir engagieren uns in der IG Sportvereine Muri und leisten unseren aktiven Beitrag an die gegenseitige Unterstützung im Dorf. Gesunde Finanzen sind Basis für unsere Vereinsentwicklung. Eigenständigkeit und Handlungsfreiheit sind hierfür essenziell. In der Vereinsführung arbeiten wir als Team konstruktiv, umsichtig und motiviert für die Zukunft des Handball TV Muri.",
  },
];

export default function LeitbildPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <span className="inline-block text-4xl sm:text-5xl font-black text-primary mb-4">#zämestark</span>
        <h1 className="text-3xl sm:text-4xl font-bold text-secondary">Unser Leitbild</h1>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {sections.map((s) => {
          const Icon = s.icon;
          return (
            <Card key={s.title} className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-secondary mb-3">{s.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{s.content}</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
