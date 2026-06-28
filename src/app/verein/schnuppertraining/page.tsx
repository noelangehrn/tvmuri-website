import Button from "@/components/ui/Button";

export default function SchnuppertrainingPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-8">Schnuppertraining</h1>
      <div className="prose prose-gray max-w-none space-y-4 mb-8">
        <p>
          Du möchtest Handball ausprobieren? Kein Problem! Bei uns kannst du jederzeit in ein 
          Schnuppertraining kommen. Einfach vorbeischauen und mitmachen.
        </p>
        <p>
          Wir haben Teams für alle Altersstufen – von der U7 (Kindergarten) bis zu den 
          Freizeitgruppen für Erwachsene.
        </p>
        <h2>Trainingszeiten</h2>
        <ul>
          <li><strong>U7</strong> (Kindergarten): Mi 15:30–16:30</li>
          <li><strong>U9</strong> (1.–2. Klasse): Mi 16:00–17:00, Sa 09:00–10:30</li>
          <li><strong>U11</strong> (3.–4. Klasse): Mi 17:00–18:30, Fr 17:00–18:30</li>
          <li><strong>Ältere und Erwachsene:</strong> gemäss Trainingszeiten der Teams</li>
        </ul>
        <p>
          Mitzubringen sind: Hallenturnschuhe, Sportkleidung, Trinkflasche. 
          Leihhandbälle sind vorhanden.
        </p>
        <p>Wir freuen uns auf dich!</p>
      </div>
      <Button href="mailto:geschaeftsstelle@tvmuri.ch" variant="primary">E-Mail an die Geschäftsstelle</Button>
    </div>
  );
}
