import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Brain,
  ClipboardList,
  Code2,
  ExternalLink,
  FileSearch,
  GraduationCap,
  Network,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    value: "2",
    label: "Course Levels",
    sub: "Standard Level & Higher Level",
    icon: GraduationCap,
  },
  {
    value: "2",
    label: "Core Themes",
    sub: "Theme A + Theme B",
    icon: BookOpen,
  },
  {
    value: "P1 & P2",
    label: "External Assessments",
    sub: "Papers 1 and 2",
    icon: FileSearch,
  },
];

const themes = [
  {
    id: "a",
    badge: "Theme A",
    badgeClass: "badge-hl",
    title: "Concepts of Computer Science",
    description:
      "Explore the foundational ideas that underpin all of computer science — from how computers process information to how networks and databases power the modern world.",
    topics: [
      { icon: Network, label: "Computer Fundamentals" },
      { icon: Network, label: "Networks" },
      { icon: BookOpen, label: "Databases" },
      { icon: Brain, label: "Machine Learning" },
    ],
    href: "/syllabus",
    accent: "border-primary/40 bg-primary/5",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    id: "b",
    badge: "Theme B",
    badgeClass: "badge-sl",
    title: "Computational Thinking & Problem-Solving",
    description:
      "Develop the systematic thinking skills that let you design, build, and analyse solutions — including programming, object-oriented design, and (for HL) abstract data types.",
    topics: [
      { icon: Brain, label: "Computational Thinking" },
      { icon: Code2, label: "Programming" },
      { icon: TrendingUp, label: "Object-Oriented Programming" },
      { icon: Network, label: "Abstract Data Types (HL)" },
    ],
    href: "/syllabus",
    accent: "border-accent/40 bg-accent/5",
    iconBg: "bg-accent/10 text-accent-foreground",
  },
];

const courseHighlights = [
  {
    icon: ClipboardList,
    title: "Internal Assessment",
    description:
      "Design and develop your own computational solution. The IA is 30% of your final grade and showcases your practical programming skills.",
    tag: "30% of grade",
    href: "/assessment",
  },
  {
    icon: FileSearch,
    title: "Case Study (HL)",
    description:
      "HL students study an annual IB-released case study in depth. Expect Paper 1 Section B to test your knowledge directly.",
    tag: "HL only",
    href: "/assessment",
  },
  {
    icon: Code2,
    title: "Programming",
    description:
      "Code in Python or Java. The exam uses pseudocode, but you develop real programs for your IA and deepen your understanding through practice.",
    tag: "Python / Java",
    href: "/resources",
  },
  {
    icon: GraduationCap,
    title: "IB Examinations",
    description:
      "Sit exams in May or November. Papers are externally marked by IB examiners. Grades 1–7 with grade boundaries published each session.",
    tag: "May / November",
    href: "/assessment",
  },
];

const bottomLinks = [
  {
    href: "/syllabus",
    label: "View Full Syllabus",
    description: "Complete topic-by-topic breakdown for SL and HL",
    icon: BookOpen,
    ocid: "home.bottom_syllabus_link",
  },
  {
    href: "/assessment",
    label: "Assessment Guides",
    description: "Papers, IA guidance, grade boundaries",
    icon: ClipboardList,
    ocid: "home.bottom_assessment_link",
  },
  {
    href: "/resources",
    label: "Study Resources",
    description: "Curated textbooks, tools, and past papers",
    icon: ExternalLink,
    ocid: "home.bottom_resources_link",
  },
];

export function HomePage() {
  return (
    <Layout>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url(/assets/generated/hero-ib-cs.dim_1200x400.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-ocid="home.hero_section"
      >
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl animate-fade-in-up">
            <div className="flex items-center gap-2 mb-5">
              <Badge className="badge-hl">2023 Syllabus</Badge>
              <Badge className="badge-sl">SL &amp; HL</Badge>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
              IB Diploma Programme
              <span className="block text-primary-foreground/80">
                Computer Science
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl">
              Your complete study companion for IB&nbsp;DP&nbsp;CS — covering
              the full syllabus for Standard Level and Higher Level.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                variant="secondary"
                data-ocid="home.cta_syllabus_button"
              >
                <Link to="/syllabus">
                  Explore the Syllabus{" "}
                  <ArrowRight size={16} className="ml-1.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                data-ocid="home.cta_assessment_button"
              >
                <Link to="/assessment">Assessment Guides</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Stats Bar ──────────────────────────────── */}
      <section
        className="bg-card border-b border-border py-8"
        data-ocid="home.stats_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border"
                data-ocid={`home.stat_card.${i + 1}`}
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary shrink-0">
                  <stat.icon size={22} />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-foreground leading-none mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What You'll Study ────────────────────────────── */}
      <section className="py-16 bg-background" data-ocid="home.themes_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              What You'll Study
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The IB CS course is structured around two core themes, each
              building towards deep technical and conceptual understanding.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {themes.map((theme) => (
              <Card
                key={theme.id}
                className={`border-2 ${theme.accent} transition-smooth hover:shadow-md`}
                data-ocid={`home.theme_card.${theme.id}`}
              >
                <CardHeader className="pb-3">
                  <div className="mb-3">
                    <span className={theme.badgeClass}>{theme.badge}</span>
                  </div>
                  <CardTitle className="font-display text-xl text-foreground">
                    {theme.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {theme.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-2 mb-5">
                    {theme.topics.map((t) => (
                      <li
                        key={t.label}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <div
                          className={`flex items-center justify-center w-7 h-7 rounded-md ${theme.iconBg} shrink-0`}
                        >
                          <t.icon size={14} />
                        </div>
                        <span>{t.label}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    data-ocid={`home.theme_cta.${theme.id}`}
                  >
                    <Link to={theme.href as "/syllabus"}>
                      Explore topics <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Course Highlights ────────────────────────────── */}
      <section
        className="section-alt py-16"
        data-ocid="home.highlights_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Course Highlights
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Key components of the IB DP CS course you need to know before you
              begin.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {courseHighlights.map((item, i) => (
              <Link
                key={item.title}
                to={item.href as "/assessment" | "/resources"}
                data-ocid={`home.highlight_card.${i + 1}`}
              >
                <Card className="h-full hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-pointer group">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200 shrink-0">
                        <item.icon size={20} />
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground bg-muted rounded-full px-2.5 py-1 shrink-0">
                        {item.tag}
                      </span>
                    </div>
                    <CardTitle className="text-base font-semibold text-foreground">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────── */}
      <section className="py-16 bg-primary" data-ocid="home.cta_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Ready to Start Studying?
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto">
              Dive into the full syllabus, understand your assessments, or
              explore curated study resources — all in one place.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {bottomLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href as "/syllabus" | "/assessment" | "/resources"}
                data-ocid={link.ocid}
              >
                <div className="flex flex-col items-center text-center p-5 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-200 h-full">
                  <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary-foreground/15 text-primary-foreground mb-3">
                    <link.icon size={22} />
                  </div>
                  <div className="font-display font-semibold text-primary-foreground mb-1">
                    {link.label}
                  </div>
                  <p className="text-xs text-primary-foreground/70">
                    {link.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
