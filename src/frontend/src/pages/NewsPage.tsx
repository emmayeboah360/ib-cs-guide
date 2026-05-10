import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { NewsItem } from "@/types";
import { BookOpen, Calendar, ExternalLink, Newspaper, Tag } from "lucide-react";

// ── Timeline ──────────────────────────────────────────────────────────────────

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  variant: "primary" | "accent" | "muted";
}

const timelineEvents: TimelineEvent[] = [
  {
    date: "2025",
    title: "New IB CS Syllabus Published",
    description: "New syllabus released for first assessment in May 2027.",
    variant: "primary",
  },
  {
    date: "Feb 2025",
    title: "New Subject Guide Available",
    description:
      "Updated guide with Theme A/B structure now available via the IB Programme Resource Centre.",
    variant: "primary",
  },
  {
    date: "May 2026",
    title: "Last Exams (Old Syllabus)",
    description:
      "Final examination session under the previous IB CS curriculum.",
    variant: "accent",
  },
  {
    date: "May 2027",
    title: "First Exams (New Syllabus)",
    description:
      "First examination under the new 2027 curriculum (Theme A & Theme B).",
    variant: "primary",
  },
  {
    date: "Annual",
    title: "Case Study Release",
    description:
      "HL case study typically released by the IB in September or October each year.",
    variant: "muted",
  },
];

// ── News Articles ─────────────────────────────────────────────────────────────

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "New IB CS Syllabus: What Students Need to Know",
    date: "February 2025",
    summary:
      "The IB has published a new Computer Science syllabus for first assessment in May 2027. The new curriculum restructures content into Theme A (Concepts of Computer Science) — covering Computer Fundamentals, Networks, Databases, and Machine Learning — and Theme B (Computational Thinking & Problem-Solving) covering algorithms and programming. Key change: Databases and Machine Learning are now core topics for all students.",
    tag: "Curriculum",
  },
  {
    id: "2",
    title: "Understanding the New Assessment Structure",
    date: "March 2025",
    summary:
      "The new syllabus introduces updated assessment components. Paper 1 focuses on Theme A conceptual knowledge, Paper 2 tests computational thinking and programming skills. The Internal Assessment remains a computational solution project but with updated guidance on documentation and client involvement.",
    tag: "Assessment",
  },
  {
    id: "3",
    title: "Programming Languages for IB CS 2027",
    date: "April 2025",
    summary:
      "Students taking the new IB CS syllabus (first exams 2027) may use Python or Java for their coursework and Internal Assessment. The IB pseudocode used in Paper 2 remains language-agnostic. Schools can choose their primary teaching language, though Python is increasingly popular due to its relevance to Machine Learning.",
    tag: "Programming",
  },
  {
    id: "4",
    title: "HL Case Study Tips and Resources",
    date: "May 2025",
    summary:
      "Higher Level students must prepare for the annual case study, released by the IB typically in September or October each year. Effective preparation involves reading the case study thoroughly, identifying technical concepts mentioned, researching related technologies, and practising scenario-based questions. Past case studies provide excellent practice material.",
    tag: "HL",
  },
];

// ── Official Links ────────────────────────────────────────────────────────────

interface OfficialLink {
  label: string;
  description: string;
  url: string;
}

const officialLinks: OfficialLink[] = [
  {
    label: "IBO Official Website",
    description: "Main hub for all IB programme information and announcements.",
    url: "https://www.ibo.org",
  },
  {
    label: "IB Computer Science Subject Page",
    description:
      "Official subject page with syllabuses, specimen papers, and news.",
    url: "https://www.ibo.org/programmes/diploma-programme/curriculum/sciences/computer-science/",
  },
  {
    label: "IB Programme Resource Centre",
    description:
      "Secure portal for teachers and students with subject guides and past papers.",
    url: "https://resources.ibo.org",
  },
];

// ── Tag colours ───────────────────────────────────────────────────────────────

const tagColors: Record<string, string> = {
  Curriculum: "bg-primary/10 text-primary border border-primary/20",
  Assessment: "bg-destructive/10 text-destructive border border-destructive/20",
  Programming: "bg-accent/20 text-accent-foreground border border-accent/30",
  HL: "bg-primary/15 text-primary border border-primary/25",
};

const dotVariantClass: Record<TimelineEvent["variant"], string> = {
  primary: "bg-primary ring-primary/20",
  accent: "bg-accent ring-accent/20",
  muted: "bg-muted-foreground/60 ring-muted-foreground/10",
};

// ── Component ─────────────────────────────────────────────────────────────────

export function NewsPage() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header py-12" data-ocid="news.page_header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <Newspaper className="shrink-0 mt-1 text-primary" size={28} />
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground">
                News &amp; Updates
              </h1>
              <p className="text-muted-foreground mt-1.5 max-w-2xl text-sm leading-relaxed">
                Stay informed about IB Computer Science curriculum updates,
                examination changes, and key dates. Always verify with the
                official IBO website and your school coordinator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates / Timeline */}
      <section className="section-alt py-12" data-ocid="news.timeline_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <Calendar size={20} className="text-primary" />
            <h2 className="font-display text-xl font-bold text-foreground">
              Important Dates
            </h2>
          </div>

          <div className="relative pl-6 border-l-2 border-border space-y-0">
            {timelineEvents.map((event, i) => (
              <div
                key={event.title}
                className="relative pb-8 last:pb-0"
                data-ocid={`news.timeline.item.${i + 1}`}
              >
                {/* Dot */}
                <span
                  className={`absolute -left-[calc(0.5rem+1px)] top-0.5 w-4 h-4 rounded-full ring-4 ${dotVariantClass[event.variant]}`}
                />
                <div className="ml-4">
                  <span className="inline-block text-xs font-mono font-semibold text-muted-foreground mb-0.5">
                    {event.date}
                  </span>
                  <h3 className="font-display text-sm font-semibold text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed max-w-xl">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section
        className="bg-background py-12"
        data-ocid="news.articles_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-8">
            <BookOpen size={20} className="text-primary" />
            <h2 className="font-display text-xl font-bold text-foreground">
              Latest Articles
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {newsItems.map((item, i) => (
              <Card
                key={item.id}
                className="border-border hover:shadow-subtle transition-smooth"
                data-ocid={`news.item.${i + 1}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-base font-semibold text-foreground leading-snug flex-1 min-w-0">
                      {item.title}
                    </CardTitle>
                    <span
                      className={`shrink-0 inline-flex items-center gap-1 text-xs font-semibold rounded-full px-2.5 py-0.5 ${
                        tagColors[item.tag] ??
                        "bg-muted text-muted-foreground border border-border"
                      }`}
                    >
                      <Tag size={10} />
                      {item.tag}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
                    <Calendar size={12} />
                    {item.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.summary}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stay Updated / Subscribe */}
      <section className="section-alt py-12" data-ocid="news.subscribe_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Badge className="badge-sl mb-4">Stay Updated</Badge>
            <h2 className="font-display text-2xl font-bold text-foreground">
              Never Miss an Update
            </h2>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Bookmark this page and check back regularly for the latest IB CS
              news. For official announcements, examination session information,
              and subject guide updates, always refer directly to the{" "}
              <a
                href="https://www.ibo.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                official IBO website (ibo.org)
              </a>
              .
            </p>
            <p className="text-xs text-muted-foreground mt-4 bg-muted/60 rounded-lg px-4 py-3 border border-border">
              <strong>Disclaimer:</strong> This is an unofficial student
              resource. Content is provided for educational guidance only.
              Always verify curriculum changes and examination dates with your
              school's IB coordinator and the official IBO website.
            </p>
          </div>
        </div>
      </section>

      {/* Official Links */}
      <section
        className="bg-background py-12"
        data-ocid="news.official_links_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <ExternalLink size={18} className="text-primary" />
            <h2 className="font-display text-xl font-bold text-foreground">
              Official IB Resources
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {officialLinks.map((link, i) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={`news.official_link.${i + 1}`}
                className="group block p-4 rounded-lg border border-border bg-card hover:border-primary/40 hover:shadow-subtle transition-smooth"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200 leading-snug">
                    {link.label}
                  </span>
                  <ExternalLink
                    size={14}
                    className="shrink-0 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors duration-200"
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                  {link.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
