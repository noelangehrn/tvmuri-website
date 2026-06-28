import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { formatDate } from "@/lib/utils";

interface NewsItem {
  id: string;
  slug: string;
  titel: string;
  datum: string;
  autor: string;
  kategorie: string;
  teaser: string;
}

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Link href={`/news/${item.slug}`} className="group">
      <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <span className="text-4xl opacity-30">🏐</span>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant={item.kategorie as any}>{item.kategorie}</Badge>
            <span className="text-xs text-gray-500">{formatDate(item.datum)}</span>
          </div>
          <h3 className="font-bold text-secondary group-hover:text-primary transition-colors mb-2">{item.titel}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{item.teaser}</p>
        </div>
      </article>
    </Link>
  );
}
