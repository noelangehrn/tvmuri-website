import { notFound } from "next/navigation";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { formatDate } from "@/lib/utils";
import news from "@/data/news.json";

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = news.find((a) => a.slug === slug);

  if (!article) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-6">
        <Link href="/news" className="text-sm text-gray-500 hover:text-primary">&larr; Zurück zur Übersicht</Link>
      </div>
      <div className="flex items-center gap-3 mb-4">
        <Badge variant={article.kategorie as any}>{article.kategorie}</Badge>
        <span className="text-sm text-gray-500">{formatDate(article.datum)}</span>
        <span className="text-sm text-gray-500">| {article.autor}</span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-8">{article.titel}</h1>
      <div className="prose prose-gray max-w-none">
        {article.inhalt.split("\n\n").map((paragraph, i) => (
          <p key={i} className="mb-4 text-gray-700 leading-relaxed">{paragraph}</p>
        ))}
      </div>
      <div className="mt-8 pt-8 border-t border-gray-200">
        <Button href="/news" variant="outline">Alle News</Button>
      </div>
    </div>
  );
}
