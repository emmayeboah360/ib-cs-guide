import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  BookText,
  Code2,
  ExternalLink,
  GraduationCap,
  Info,
  Lightbulb,
  Monitor,
  Wrench,
} from "lucide-react";
import { useState } from "react";

type Category =
  | "All"
  | "Official IB"
  | "Textbooks"
  | "Online Learning"
  | "Programming Practice"
  | "Tools";

interface Resource {
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  url: string;
}

const resources: Resource[] = [
  // Official IB
  {
    title: "IB CS Subject Guide (2027 Syllabus)",
    description:
      "Official IB CS syllabus document — the primary source of truth for all examinable content, assessment criteria, and command terms.",
    category: "Official IB",
    url: "https://ibo.org",
  },
  {
    title: "IB Programme Resource Centre",
    description:
      "Official IB teaching and learning resources, including past papers, teacher support materials, and curriculum updates.",
    category: "Official IB",
    url: "https://resources.ibo.org",
  },
  {
    title: "MyIB Student Portal",
    description:
      "Access your IB assessments, exam materials, and personal academic record through the official student portal.",
    category: "Official IB",
    url: "https://my.ib.org",
  },
  // Textbooks
  {
    title: "Computer Science for the IB Diploma (Baumgarten)",
    description:
      "Comprehensive textbook covering the 2025 syllabus by Paul Baumgarten et al. Thorough topic coverage with worked examples.",
    category: "Textbooks",
    url: "https://www.hoddereducation.com",
  },
  {
    title: "Oxford IB Diploma: Computer Science",
    description:
      "Widely-used textbook for IB CS courses, published by Oxford University Press with clear explanations and practice questions.",
    category: "Textbooks",
    url: "https://www.oup.com",
  },
  // Online Learning
  {
    title: "Paul Baumgarten's IB CS Page",
    description:
      "Extensive notes, exercises, and explanations for nearly all IB CS topics, maintained by an experienced IB CS teacher.",
    category: "Online Learning",
    url: "https://pbaumgarten.com",
  },
  {
    title: "CompSciHub",
    description:
      "Notes and structured information compiled by IB CS teachers and students, covering all major topics and themes.",
    category: "Online Learning",
    url: "https://compsci.ca",
  },
  {
    title: "CS Awesome (Java)",
    description:
      "Primary platform for learning Java programming with an IB focus — interactive exercises, lesson plans, and assessments.",
    category: "Online Learning",
    url: "https://csawesome.runestone.academy",
  },
  {
    title: "Khan Academy CS",
    description:
      "Free courses on algorithms, HTML/CSS, and foundational computer science concepts suitable for SL and HL preparation.",
    category: "Online Learning",
    url: "https://khanacademy.org/computing",
  },
  // Programming Practice
  {
    title: "LeetCode",
    description:
      "Algorithm and data structure practice problems ranging from easy to expert. Excellent for HL option preparation.",
    category: "Programming Practice",
    url: "https://leetcode.com",
  },
  {
    title: "HackerRank",
    description:
      "Programming challenges aligned with CS fundamentals — arrays, sorting, recursion, and more with structured skill tracks.",
    category: "Programming Practice",
    url: "https://hackerrank.com",
  },
  {
    title: "CodingBat (Java/Python)",
    description:
      "Simple, focused coding practice in Java or Python. Ideal for building problem-solving fluency quickly.",
    category: "Programming Practice",
    url: "https://codingbat.com",
  },
  {
    title: "Replit",
    description:
      "Browser-based coding environment for Python, Java, and more. No installation needed — great for IA prototyping.",
    category: "Programming Practice",
    url: "https://replit.com",
  },
  {
    title: "Python.org Docs",
    description:
      "Official Python documentation and tutorials. The authoritative reference for Python syntax, libraries, and best practices.",
    category: "Programming Practice",
    url: "https://docs.python.org",
  },
  // Tools
  {
    title: "VisuAlgo",
    description:
      "Visualizations for sorting, searching, and data structure algorithms. Understand complex algorithms before memorizing them.",
    category: "Tools",
    url: "https://visualgo.net",
  },
  {
    title: "Packet Tracer",
    description:
      "Cisco network simulation tool available free for students via Cisco NetAcad. Essential for networking and protocol study.",
    category: "Tools",
    url: "https://netacad.com",
  },
  {
    title: "DB Fiddle",
    description:
      "Online SQL database sandbox for practicing queries without setup. Supports MySQL, PostgreSQL, and SQLite.",
    category: "Tools",
    url: "https://dbfiddle.uk",
  },
  {
    title: "Draw.io",
    description:
      "Free diagramming tool for UML, flowcharts, network diagrams, and ER diagrams — perfect for IA documentation.",
    category: "Tools",
    url: "https://app.diagrams.net",
  },
];

const categoryConfig: Record<
  Exclude<Category, "All">,
  { icon: React.ElementType; badgeClass: string; label: string }
> = {
  "Official IB": {
    icon: GraduationCap,
    badgeClass: "bg-primary text-primary-foreground",
    label: "Official IB",
  },
  Textbooks: {
    icon: BookText,
    badgeClass: "bg-accent text-accent-foreground",
    label: "Textbook",
  },
  "Online Learning": {
    icon: Monitor,
    badgeClass: "bg-secondary text-secondary-foreground border border-border",
    label: "Online",
  },
  "Programming Practice": {
    icon: Code2,
    badgeClass: "bg-chart-1/15 text-chart-1 border border-chart-1/30",
    label: "Practice",
  },
  Tools: {
    icon: Wrench,
    badgeClass: "bg-muted text-muted-foreground border border-border",
    label: "Tool",
  },
};

const filterCategories: Category[] = [
  "All",
  "Official IB",
  "Textbooks",
  "Online Learning",
  "Programming Practice",
  "Tools",
];

const tips = [
  {
    icon: BookOpen,
    heading: "Start with the syllabus",
    body: "Read the official IB CS Subject Guide first to know exactly what is examinable at SL and HL.",
  },
  {
    icon: BookText,
    heading: "Use textbooks for structure",
    body: "Textbooks provide systematic topic coverage — ideal for building foundational understanding before practising.",
  },
  {
    icon: Code2,
    heading: "Code every day",
    body: "Daily practice with CodingBat or LeetCode builds muscle memory for Paper 2 programming questions.",
  },
  {
    icon: Monitor,
    heading: "Visualise before memorising",
    body: "Use VisuAlgo to see algorithms in motion. Understanding behaviour makes pseudocode far easier to write.",
  },
];

import type React from "react";

export function ResourcesPage() {
  const [filter, setFilter] = useState<Category>("All");

  const filtered =
    filter === "All"
      ? resources
      : resources.filter((r) => r.category === filter);

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header py-10" data-ocid="resources.page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <Badge className="badge-sl mt-1">Resources</Badge>
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground">
                Study Resources
              </h1>
              <p className="text-muted-foreground mt-1 max-w-2xl">
                Curated textbooks, official IB materials, online courses, and
                developer tools to support your IB DP Computer Science journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section
        className="py-10 bg-background"
        data-ocid="resources.content_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div
            className="flex flex-wrap gap-2 mb-8"
            data-ocid="resources.filter_tabs"
          >
            {filterCategories.map((cat) => (
              <Button
                key={cat}
                type="button"
                variant={filter === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(cat)}
                data-ocid={`resources.filter.${cat.toLowerCase().replace(/\s+/g, "_")}_tab`}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Count */}
          <p className="text-sm text-muted-foreground mb-5">
            Showing{" "}
            <span className="font-semibold text-foreground">
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "resource" : "resources"}
            {filter !== "All" && (
              <span>
                {" "}
                in <span className="font-medium text-foreground">{filter}</span>
              </span>
            )}
          </p>

          {/* Resource Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((res, i) => {
              const config = categoryConfig[res.category];
              const Icon = config.icon;
              return (
                <a
                  key={res.title}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
                  data-ocid={`resources.resource_card.${i + 1}`}
                >
                  <Card className="h-full border-border hover:border-primary/50 hover:shadow-md transition-all duration-200 group-focus-visible:border-primary/50">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div
                            className={`flex items-center justify-center w-8 h-8 rounded-md shrink-0 ${config.badgeClass}`}
                          >
                            <Icon size={15} />
                          </div>
                          <CardTitle className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                            {res.title}
                          </CardTitle>
                        </div>
                        <ExternalLink
                          size={14}
                          className="shrink-0 text-muted-foreground group-hover:text-primary transition-colors mt-0.5"
                          aria-hidden="true"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {res.description}
                      </p>
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${config.badgeClass}`}
                      >
                        {config.label}
                      </span>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>

          {/* Disclaimer */}
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground mt-8 pt-6 border-t border-border">
            <Info size={13} className="shrink-0" />
            External links open in a new tab. These resources are not affiliated
            with or endorsed by the International Baccalaureate Organization
            (IBO).
          </p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="section-alt py-10" data-ocid="resources.tips_section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2.5 mb-7">
            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary">
              <Lightbulb size={16} />
            </div>
            <h2 className="font-display text-xl font-bold text-foreground">
              How to Use These Resources
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tips.map((tip, i) => {
              const TipIcon = tip.icon;
              return (
                <div
                  key={tip.heading}
                  className="bg-card rounded-lg border border-border p-5"
                  data-ocid={`resources.tip.${i + 1}`}
                >
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="flex items-center justify-center w-7 h-7 rounded-md bg-primary/10 text-primary shrink-0">
                      <TipIcon size={14} />
                    </div>
                    <h3 className="font-display text-sm font-semibold text-foreground">
                      {tip.heading}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tip.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
