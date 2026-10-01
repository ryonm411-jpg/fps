import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ExternalLink } from "lucide-react";

export default function NewsPage() {
  const articles = [
    {
      id: "1",
      title: "Haaland bags hat-trick as Manchester City dominate Champions League fixture",
      summary: "Erling Haaland scored three clinical goals inside 45 minutes, driving heavy market demand and bid volume across trading desks.",
      source: "Football Market Wire",
      time: "2 hours ago",
      tag: "PERFORMANCE IMPACT",
    },
    {
      id: "2",
      title: "Lamine Yamal contract renewal talks progress smoothly with Barcelona",
      summary: "Young winger expected to sign long-term contract extension, bolstering sentiment and holding stability.",
      source: "Transfer Desk",
      time: "5 hours ago",
      tag: "CLUB CONTEXT",
    },
    {
      id: "3",
      title: "Real Madrid midfield tactical rotation ahead of El Clásico",
      summary: "Jude Bellingham set to start in advanced attacking role with key implications on projected match ratings.",
      source: "Scout Analytics",
      time: "8 hours ago",
      tag: "TACTICAL BRIEF",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-text-primary">
          Football Market News & Fundamentals
        </h1>
        <p className="text-sm text-text-secondary">
          Live match analysis, injury updates, and transfer developments
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {articles.map((article) => (
          <Card key={article.id} className="border-border bg-surface hover:border-primary/40 transition-colors">
            <CardHeader className="p-5 pb-2">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <Badge variant="secondary" className="text-[10px] font-mono">
                  {article.tag}
                </Badge>
                <div className="flex items-center gap-1 text-[11px] font-mono text-text-muted">
                  <Clock className="h-3 w-3" />
                  <span>{article.time}</span>
                </div>
              </div>
              <CardTitle className="text-base font-semibold leading-snug hover:text-primary transition-colors cursor-pointer">
                {article.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-0">
              <p className="text-xs text-text-secondary leading-relaxed">
                {article.summary}
              </p>
              <div className="flex items-center justify-between mt-3 text-[11px] font-mono text-text-muted">
                <span>SOURCE: {article.source}</span>
                <span className="flex items-center gap-1 text-primary cursor-pointer hover:underline">
                  Read Analysis <ExternalLink className="h-3 w-3" />
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
