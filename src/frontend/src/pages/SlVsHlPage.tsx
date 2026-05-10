import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  FileText,
  FlaskConical,
  GraduationCap,
  Layers,
  XCircle,
} from "lucide-react";

const tableRows = [
  {
    feature: "Teaching Hours",
    sl: "150 hours",
    hl: "240 hours",
    slOk: true,
    hlOk: true,
  },
  {
    feature: "Theme A Content",
    sl: "Core topics",
    hl: "Core + extended",
    slOk: true,
    hlOk: true,
  },
  {
    feature: "Theme B Content",
    sl: "B.1, B.2, B.3",
    hl: "B.1, B.2, B.3 + B.4",
    slOk: true,
    hlOk: true,
  },
  {
    feature: "Abstract Data Types",
    sl: "Not included",
    hl: "B.4 (30 hours)",
    slOk: false,
    hlOk: true,
  },
  {
    feature: "Case Study",
    sl: "Not required",
    hl: "Annual case study",
    slOk: false,
    hlOk: true,
  },
  {
    feature: "Paper 1 Duration",
    sl: "1.5 hours",
    hl: "2.25 hours",
    slOk: true,
    hlOk: true,
  },
  {
    feature: "Paper 2 Duration",
    sl: "1.75 hours",
    hl: "2.25 hours",
    slOk: true,
    hlOk: true,
  },
  {
    feature: "IA Project",
    sl: "Same requirements",
    hl: "Same requirements",
    slOk: true,
    hlOk: true,
  },
];

const keyDifferences = [
  {
    icon: FileText,
    title: "Case Study",
    description:
      "HL students receive an annual case study and must prepare for scenario-based questions that test deeper analysis and application of computer science concepts.",
  },
  {
    icon: Layers,
    title: "Abstract Data Types",
    description:
      "HL covers B.4 in full detail, including stacks, queues, linked lists, binary trees, and recursion \u2014 topics central to advanced algorithm design.",
  },
  {
    icon: BookOpen,
    title: "Extended Content",
    description:
      "HL provides additional depth across all Theme A topics, ensuring greater theoretical rigour and a stronger foundation for university-level computer science.",
  },
];

const choiceFactors = [
  {
    signal: "Choose HL if",
    items: [
      {
        icon: FlaskConical,
        text: "You have a strong passion for programming and problem-solving",
      },
      {
        icon: GraduationCap,
        text: "You plan to study Computer Science at university",
      },
      {
        icon: Layers,
        text: "You enjoy abstract thinking and theoretical CS concepts",
      },
    ],
  },
  {
    signal: "Consider SL if",
    items: [
      {
        icon: BookOpen,
        text: "CS is one of many sciences you're taking at HL",
      },
      {
        icon: Clock,
        text: "You have significant time constraints from other HL subjects",
      },
      {
        icon: CheckCircle2,
        text: "You want a solid CS foundation without the extra breadth",
      },
    ],
  },
];

function Check() {
  return (
    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
  );
}

function Cross() {
  return (
    <XCircle
      className="h-5 w-5 text-muted-foreground shrink-0"
      aria-hidden="true"
    />
  );
}

export function SlVsHlPage() {
  return (
    <Layout>
      {/* Page Header */}
      <div className="page-header" data-ocid="slvshl.page">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <div className="flex items-center gap-2 mb-3">
            <Badge className="badge-sl">SL</Badge>
            <span className="text-muted-foreground text-sm font-medium">
              vs
            </span>
            <Badge className="badge-hl">HL</Badge>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight">
            SL vs HL: Which Course is Right for You?
          </h1>
          <p className="mt-3 text-muted-foreground text-base sm:text-lg max-w-2xl">
            Understand the key distinctions between Standard Level and Higher
            Level IB DP Computer Science to make an informed decision.
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <section
        className="bg-background py-12"
        data-ocid="slvshl.summary_section"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-foreground mb-6">
            At a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SL Card */}
            <Card
              className="border-2 border-accent/40 bg-accent/5"
              data-ocid="slvshl.sl_card"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-display text-lg font-semibold text-foreground">
                    Standard Level
                  </CardTitle>
                  <Badge className="badge-sl">SL</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  150 teaching hours
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  {
                    label: "Paper 1",
                    detail: "1.5 hours (30%) \u2014 Theme A concepts",
                  },
                  {
                    label: "Paper 2",
                    detail: "1.75 hours (45%) \u2014 Theme B programming",
                  },
                  { label: "Internal Assessment", detail: "30 hours (25%)" },
                  { label: "Content", detail: "All Theme A and B core topics" },
                ].map(({ label, detail }) => (
                  <div key={label} className="flex items-start gap-2">
                    <Check />
                    <div>
                      <span className="text-sm font-semibold text-foreground">
                        {label}:{" "}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {detail}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* HL Card */}
            <Card
              className="border-2 border-primary/50 bg-primary/5"
              data-ocid="slvshl.hl_card"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-display text-lg font-semibold text-foreground">
                    Higher Level
                  </CardTitle>
                  <Badge className="badge-hl">HL</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  240 teaching hours
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  {
                    label: "Paper 1",
                    detail: "2.25 hours (30%) \u2014 Theme A + Case Study",
                  },
                  {
                    label: "Paper 2",
                    detail: "2.25 hours (45%) \u2014 Theme B + B.4 ADTs",
                  },
                  { label: "Internal Assessment", detail: "30 hours (25%)" },
                  {
                    label: "Content",
                    detail: "All SL content + B.4 ADTs and annual case study",
                  },
                ].map(({ label, detail }) => (
                  <div key={label} className="flex items-start gap-2">
                    <Check />
                    <div>
                      <span className="text-sm font-semibold text-foreground">
                        {label}:{" "}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {detail}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="section-alt py-12" data-ocid="slvshl.table_section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-foreground mb-6">
            Detailed Comparison
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-subtle">
            <table
              className="w-full text-sm"
              data-ocid="slvshl.comparison_table"
            >
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="text-left px-5 py-3 font-display font-semibold text-foreground">
                    Feature
                  </th>
                  <th className="text-center px-5 py-3 font-display font-semibold">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="badge-sl">SL</span>
                      <span className="text-foreground">Standard Level</span>
                    </span>
                  </th>
                  <th className="text-center px-5 py-3 font-display font-semibold">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="badge-hl">HL</span>
                      <span className="text-foreground">Higher Level</span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`border-b border-border last:border-0 transition-colors duration-150 hover:bg-muted/20 ${
                      i % 2 === 0 ? "bg-card" : "bg-muted/10"
                    }`}
                    data-ocid={`slvshl.table_row.${i + 1}`}
                  >
                    <td className="px-5 py-3.5 font-medium text-foreground">
                      {row.feature}
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <span className="inline-flex items-center justify-center gap-1.5">
                        {row.slOk ? <Check /> : <Cross />}
                        <span
                          className={
                            row.slOk
                              ? "text-foreground"
                              : "text-muted-foreground"
                          }
                        >
                          {row.sl}
                        </span>
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      <span className="inline-flex items-center justify-center gap-1.5">
                        {row.hlOk ? <Check /> : <Cross />}
                        <span
                          className={
                            row.hlOk
                              ? "text-foreground font-medium"
                              : "text-muted-foreground"
                          }
                        >
                          {row.hl}
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Differences */}
      <section
        className="bg-background py-12"
        data-ocid="slvshl.differences_section"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-foreground mb-6">
            Key Differences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {keyDifferences.map(({ icon: Icon, title, description }, i) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-5 shadow-subtle flex flex-col gap-3 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
                data-ocid={`slvshl.difference_card.${i + 1}`}
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Which should I choose? */}
      <section
        className="section-alt py-12"
        data-ocid="slvshl.guidance_section"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-xl font-semibold text-foreground mb-2">
            Which Should I Choose?
          </h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-2xl">
            Consider these factors when making your decision. There is no
            universally right answer \u2014 it depends on your interests and
            study load.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {choiceFactors.map(({ signal, items }) => {
              const isHl = signal.includes("HL");
              return (
                <div
                  key={signal}
                  className={`rounded-xl border-2 p-6 ${
                    isHl
                      ? "border-primary/40 bg-primary/5"
                      : "border-accent/40 bg-accent/5"
                  }`}
                  data-ocid={`slvshl.choice_${isHl ? "hl" : "sl"}_card`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className={isHl ? "badge-hl" : "badge-sl"}>
                      {isHl ? "HL" : "SL"}
                    </Badge>
                    <h3 className="font-display font-semibold text-foreground">
                      {signal}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {items.map(({ icon: Icon, text }) => (
                      <li key={text} className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 inline-flex items-center justify-center w-7 h-7 rounded-md shrink-0 ${
                            isHl ? "bg-primary/10" : "bg-accent/10"
                          }`}
                        >
                          <Icon
                            className={`h-4 w-4 ${isHl ? "text-primary" : "text-accent"}`}
                          />
                        </div>
                        <span className="text-sm text-foreground leading-snug">
                          {text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
