import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  ClipboardList,
  Clock,
  Code2,
  FileText,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";

// ── Overview cards ─────────────────────────────────────────────────────────────
const overviewCards = [
  {
    code: "P1",
    title: "Paper 1",
    subtitle: "External",
    icon: BookOpen,
    color: "text-primary",
    bg: "bg-primary/8",
    border: "border-primary/20",
    description:
      "Theme A concepts — fundamentals, networks, databases, and machine learning. Written exam with short-answer and extended response.",
    slInfo: "1.5 hrs · 30%",
    hlInfo: "2.25 hrs · 30% + Case Study",
  },
  {
    code: "P2",
    title: "Paper 2",
    subtitle: "External",
    icon: Code2,
    color: "text-accent",
    bg: "bg-accent/8",
    border: "border-accent/20",
    description:
      "Theme B computational thinking and problem-solving — algorithm design, pseudocode, trace tables, and OOP.",
    slInfo: "1.75 hrs · 45%",
    hlInfo: "2.25 hrs · 45%",
  },
  {
    code: "IA",
    title: "Internal Assessment",
    subtitle: "Internal",
    icon: ClipboardList,
    color: "text-chart-3",
    bg: "bg-chart-3/8",
    border: "border-chart-3/20",
    description:
      "A programming project solving a real-world problem for a real client, developed over ~30 hours.",
    slInfo: "25% of final grade",
    hlInfo: "25% of final grade",
  },
];

// ── Paper 1 topics ──────────────────────────────────────────────────────────────
const paper1Topics = [
  {
    code: "A.1",
    name: "Computer Fundamentals",
    detail: "Hardware, software, binary, boolean logic, system reliability",
  },
  {
    code: "A.2",
    name: "Networks",
    detail: "Protocols, topologies, internet architecture, network security",
  },
  {
    code: "A.3",
    name: "Databases",
    detail: "Relational models, SQL, ER diagrams, normalisation",
  },
  {
    code: "A.4",
    name: "Machine Learning",
    detail:
      "Supervised/unsupervised learning, neural networks, ethical implications",
  },
];

const paper1Tips = [
  {
    text: "Focus on command terms",
    detail:
      "Each question uses a precise IB command term — 'describe' (4–6 marks), 'explain' (causal link required), 'evaluate' (balanced judgement). Match your answer structure to the term.",
  },
  {
    text: "Practice time management",
    detail:
      "Allocate 1 minute per mark. In a 1.5-hour SL paper (~60 marks total), you cannot afford to overwrite on any single question.",
  },
  {
    text: "HL Case Study preparation",
    detail:
      "Read the pre-released case study material at least 3 times. Annotate it. Expect questions worth 10–20 marks based on its context.",
  },
];

// ── Paper 2 topics ──────────────────────────────────────────────────────────────
const paper2Topics = [
  {
    code: "B.1",
    name: "Thinking Abstractly",
    detail: "Abstraction, decomposition, thinking ahead, thinking concurrently",
    level: "SL/HL",
  },
  {
    code: "B.2",
    name: "Thinking Ahead",
    detail: "Pre-conditions, caching, prefetching, libraries, APIs",
    level: "SL/HL",
  },
  {
    code: "B.3",
    name: "Thinking Procedurally",
    detail: "Pseudocode, algorithms, recursion, sorting and searching",
    level: "SL/HL",
  },
  {
    code: "B.4",
    name: "OOP Extensions",
    detail:
      "Classes, inheritance, polymorphism, encapsulation, design patterns",
    level: "HL only",
  },
];

const paper2Tips = [
  {
    text: "Master IB pseudocode syntax",
    detail:
      "IB has its own pseudocode notation. Practice converting Python/Java logic into IB format — examiners mark strictly against the published notation guide.",
  },
  {
    text: "Draw trace tables methodically",
    detail:
      "Work column by column, updating variables after each line. Never skip rows — partial credit depends on intermediate state values.",
  },
  {
    text: "Show all working",
    detail:
      "In algorithm design questions, even an incorrect final answer can earn significant method marks. Write out every step of your reasoning.",
  },
  {
    text: "Practice OOP design (HL)",
    detail:
      "Be able to write class definitions, constructors, and inheritance chains quickly. Draw UML diagrams as a planning step before writing code.",
  },
];

// ── IA process steps ────────────────────────────────────────────────────────────
const iaSteps = [
  {
    number: 1,
    phase: "Planning",
    icon: Users,
    description:
      "Identify your client and their genuine problem. Conduct client interviews and document current limitations. Define measurable success criteria that can be objectively tested.",
    tip: "Success criteria must be specific and testable — 'the system shall sort records in under 2 seconds' not 'the system shall be fast'.",
  },
  {
    number: 2,
    phase: "Solution Overview",
    icon: FileText,
    description:
      "Design the full architecture before coding. Produce data structure diagrams, flow charts, UI wireframes, and justify your chosen technology stack.",
    tip: "Examiners expect evidence of design thinking here — not just a description of what you built after the fact.",
  },
  {
    number: 3,
    phase: "Development",
    icon: Code2,
    description:
      "Implement your solution with documented techniques. Explain non-trivial algorithms and design decisions. Reference specific code sections in your writeup.",
    tip: "Choose 3–5 complex techniques to highlight in depth rather than describing every line of code.",
  },
  {
    number: 4,
    phase: "Functionality Testing",
    icon: ClipboardList,
    description:
      "Systematically test against each success criterion using normal, extreme, and erroneous data. Include screenshots or video evidence of your product in operation.",
    tip: "A testing table with expected vs. actual outcomes and pass/fail status is the expected format.",
  },
  {
    number: 5,
    phase: "Evaluation",
    icon: Target,
    description:
      "Reflect critically on whether each success criterion was met. Discuss genuine limitations and propose realistic extensions. Obtain written client feedback.",
    tip: "Avoid generic praise. Specific, honest self-critique scores far higher than vague positive reflection.",
  },
];

// ── Command terms ───────────────────────────────────────────────────────────────
const commandTerms = [
  {
    level: "Recall",
    levelBg: "bg-chart-4/10 text-chart-4",
    terms: [
      {
        term: "State",
        meaning:
          "Give a specific fact, name, or value — no explanation required",
      },
      {
        term: "Identify",
        meaning: "Name a specific element from a given context",
      },
      {
        term: "List",
        meaning: "Provide a series of answers in bullet or numbered form",
      },
      {
        term: "Outline",
        meaning: "Give a brief account without detailed explanation",
      },
    ],
  },
  {
    level: "Understand",
    levelBg: "bg-accent/10 text-accent",
    terms: [
      {
        term: "Describe",
        meaning: "Give a detailed account of characteristics or features",
      },
      {
        term: "Explain",
        meaning: "Give a clear account showing why or how, with causal links",
      },
      {
        term: "Distinguish",
        meaning: "Make clear the differences between two or more concepts",
      },
    ],
  },
  {
    level: "Apply",
    levelBg: "bg-primary/10 text-primary",
    terms: [
      {
        term: "Calculate",
        meaning: "Obtain a numerical answer showing relevant working",
      },
      {
        term: "Construct",
        meaning: "Display information in a diagrammatic or logical form",
      },
      {
        term: "Estimate",
        meaning: "Obtain an approximate value with reasoning",
      },
      {
        term: "Show",
        meaning: "Give the steps in a calculation or derivation",
      },
    ],
  },
  {
    level: "Analyze / Evaluate",
    levelBg: "bg-chart-3/10 text-chart-3",
    terms: [
      {
        term: "Analyze",
        meaning: "Break down to bring out essential elements or structure",
      },
      {
        term: "Compare",
        meaning: "Give an account of similarities and differences",
      },
      {
        term: "Discuss",
        meaning:
          "Offer a considered and balanced review with arguments for and against",
      },
      {
        term: "Evaluate",
        meaning: "Make an appraisal by weighing up strengths and limitations",
      },
      {
        term: "Suggest",
        meaning: "Propose a solution, hypothesis or other possible answer",
      },
      {
        term: "Justify",
        meaning: "Give valid reasons or evidence to support an answer",
      },
    ],
  },
];

// ── Timeline milestones ──────────────────────────────────────────────────────────
const timelineMilestones = [
  {
    period: "Year 1 · Sep–Nov",
    event: "Topic exploration & IA brainstorming",
    type: "prep",
    detail:
      "Survey possible IA topics and potential clients. Begin building foundational skills in Theme A and B.",
  },
  {
    period: "Year 1 · Dec–Feb",
    event: "IA topic confirmed & client secured",
    type: "ia",
    detail:
      "Submit IA proposal to your teacher. Conduct initial client interview and draft your planning document.",
  },
  {
    period: "Year 1 · Mar–Jun",
    event: "IA development phase begins",
    type: "ia",
    detail:
      "Design phase complete. Begin coding with regular client check-ins. Maintain a development log.",
  },
  {
    period: "Year 2 · Sep–Nov",
    event: "IA first draft submitted",
    type: "ia",
    detail:
      "Submit full IA draft for teacher feedback. Address all criterion-level comments before finalising.",
  },
  {
    period: "Year 2 · Dec–Feb",
    event: "IA final submission & exam revision",
    type: "exam",
    detail:
      "Submit your final IA. Begin structured revision using past papers under timed conditions.",
  },
  {
    period: "Year 2 · Mar–Apr",
    event: "Mock exams & case study release",
    type: "exam",
    detail:
      "HL case study material released. Complete full mock exams. Focus on weak topic areas.",
  },
  {
    period: "Year 2 · May",
    event: "Final Examinations — P1 & P2",
    type: "final",
    detail:
      "IB examination session. Paper 1 and Paper 2 sit within a 2-week window globally.",
  },
];

const typeColors: Record<string, string> = {
  prep: "bg-muted text-muted-foreground border-border",
  ia: "bg-accent/10 text-accent border-accent/30",
  exam: "bg-primary/10 text-primary border-primary/30",
  final: "bg-chart-3/10 text-chart-3 border-chart-3/30",
};

const typeLabels: Record<string, string> = {
  prep: "Preparation",
  ia: "IA",
  exam: "Exams",
  final: "Final Exams",
};

export function AssessmentPage() {
  return (
    <Layout>
      {/* ── Page Header ───────────────────────────────────────────────────── */}
      <section className="page-header py-10" data-ocid="assessment.page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <Badge className="badge-sl mt-1">Assessment</Badge>
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground">
                Assessment Overview
              </h1>
              <p className="text-muted-foreground mt-1.5 max-w-2xl">
                A comprehensive guide to all IB DP Computer Science assessment
                components — Paper 1, Paper 2, and the Internal Assessment —
                including weightings, question types, command terms, and
                year-by-year milestones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overview Cards ────────────────────────────────────────────────── */}
      <section
        className="py-10 bg-background"
        data-ocid="assessment.overview_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {overviewCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <Card
                  key={card.code}
                  className={`border ${card.border} transition-smooth hover:shadow-subtle`}
                  data-ocid={`assessment.overview_card.${i + 1}`}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-10 h-10 rounded-lg ${card.bg} flex items-center justify-center`}
                      >
                        <Icon className={`w-5 h-5 ${card.color}`} />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {card.subtitle}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-display mt-3">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {card.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      <div className="rounded-md bg-secondary px-3 py-2">
                        <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-0.5">
                          SL
                        </div>
                        <div className="text-sm font-semibold text-foreground">
                          {card.slInfo}
                        </div>
                      </div>
                      <div className="rounded-md bg-secondary px-3 py-2">
                        <div className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-0.5">
                          HL
                        </div>
                        <div className="text-sm font-semibold text-foreground">
                          {card.hlInfo}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tabbed Detail Sections ────────────────────────────────────────── */}
      <section
        className="py-10 section-alt"
        data-ocid="assessment.details_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="paper1" data-ocid="assessment.main_tabs">
            <TabsList className="mb-8 h-auto flex-wrap gap-1">
              <TabsTrigger value="paper1" data-ocid="assessment.tab.paper1">
                Paper 1
              </TabsTrigger>
              <TabsTrigger value="paper2" data-ocid="assessment.tab.paper2">
                Paper 2
              </TabsTrigger>
              <TabsTrigger value="ia" data-ocid="assessment.tab.ia">
                Internal Assessment
              </TabsTrigger>
            </TabsList>

            {/* ── Paper 1 ──────────────────────────────────────────────── */}
            <TabsContent value="paper1" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* At-a-glance */}
                <Card className="border-border lg:col-span-1">
                  <CardHeader>
                    <CardTitle className="text-base font-display">
                      At a Glance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">
                          SL Duration
                        </span>
                        <span className="font-semibold">1.5 hours</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">
                          HL Duration
                        </span>
                        <span className="font-semibold">2.25 hours</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">
                          Weight (SL &amp; HL)
                        </span>
                        <span className="font-semibold">30%</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Format</span>
                        <span className="font-semibold">Written exam</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-muted-foreground">
                          HL Addition
                        </span>
                        <Badge className="badge-hl text-xs">Case Study</Badge>
                      </div>
                    </div>
                    <div className="rounded-md bg-primary/8 border border-primary/20 p-3">
                      <p className="text-xs text-primary font-medium">
                        HL Case Study
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        30–40 minute questions based on annually-issued
                        pre-release material. Study it thoroughly before the
                        exam.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Topics & Question Types */}
                <div className="lg:col-span-2 space-y-6">
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-base font-display">
                        Topics Covered — Theme A
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {paper1Topics.map((topic) => (
                          <div
                            key={topic.code}
                            className="flex items-start gap-3 py-2 border-b border-border last:border-0"
                          >
                            <Badge className="badge-sl shrink-0 mt-0.5">
                              {topic.code}
                            </Badge>
                            <div className="min-w-0">
                              <div className="font-semibold text-sm text-foreground">
                                {topic.name}
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5">
                                {topic.detail}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-base font-display">
                        Question Types
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Short-answer (2–4 marks)",
                          "Structured (6–8 marks)",
                          "Extended response (10–12 marks)",
                          "HL: Case study analysis",
                        ].map((q) => (
                          <Badge
                            key={q}
                            variant="secondary"
                            className="text-xs font-normal py-1"
                          >
                            {q}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Tips */}
              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-primary" />
                  Exam Strategies
                </h3>
                <div className="space-y-3">
                  {paper1Tips.map((tip, i) => (
                    <Card
                      key={tip.text}
                      className="border-border"
                      data-ocid={`assessment.p1_tip.${i + 1}`}
                    >
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-start gap-3">
                          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">
                            {i + 1}
                          </div>
                          <div className="min-w-0">
                            <div className="font-semibold text-sm text-foreground mb-1">
                              {tip.text}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {tip.detail}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* ── Paper 2 ──────────────────────────────────────────────── */}
            <TabsContent value="paper2" className="space-y-8 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="border-border lg:col-span-1">
                  <CardHeader>
                    <CardTitle className="text-base font-display">
                      At a Glance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">
                          SL Duration
                        </span>
                        <span className="font-semibold">1.75 hours</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">
                          HL Duration
                        </span>
                        <span className="font-semibold">2.25 hours</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">
                          Weight (SL &amp; HL)
                        </span>
                        <span className="font-semibold">45%</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-muted-foreground">Focus</span>
                        <span className="font-semibold">Practical skills</span>
                      </div>
                    </div>
                    <div className="rounded-md bg-accent/8 border border-accent/20 p-3">
                      <p className="text-xs text-accent font-medium">
                        Highest-weighted paper
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        At 45% of your grade, Paper 2 has the greatest
                        individual impact. Prioritise pseudocode and algorithm
                        fluency.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <div className="lg:col-span-2 space-y-6">
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-base font-display">
                        Topics Covered — Theme B
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {paper2Topics.map((topic) => (
                          <div
                            key={topic.code}
                            className="flex items-start gap-3 py-2 border-b border-border last:border-0"
                          >
                            <Badge
                              className={
                                topic.level === "HL only"
                                  ? "badge-hl shrink-0 mt-0.5"
                                  : "badge-sl shrink-0 mt-0.5"
                              }
                            >
                              {topic.code}
                            </Badge>
                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2">
                                <div className="font-semibold text-sm text-foreground">
                                  {topic.name}
                                </div>
                                {topic.level === "HL only" && (
                                  <Badge className="badge-hl text-[10px] py-0">
                                    HL only
                                  </Badge>
                                )}
                              </div>
                              <div className="text-xs text-muted-foreground mt-0.5">
                                {topic.detail}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-base font-display">
                        Question Types
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Algorithm design",
                          "Pseudocode writing",
                          "Trace tables",
                          "OOP class design (HL)",
                          "Data structure diagrams",
                        ].map((q) => (
                          <Badge
                            key={q}
                            variant="secondary"
                            className="text-xs font-normal py-1"
                          >
                            {q}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-accent" />
                  Exam Strategies
                </h3>
                <div className="space-y-3">
                  {paper2Tips.map((tip, i) => (
                    <Card
                      key={tip.text}
                      className="border-border"
                      data-ocid={`assessment.p2_tip.${i + 1}`}
                    >
                      <CardContent className="pt-4 pb-4">
                        <div className="flex items-start gap-3">
                          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-accent text-accent-foreground text-xs font-bold shrink-0">
                            {i + 1}
                          </div>
                          <div className="min-w-0">
                            <div className="font-semibold text-sm text-foreground mb-1">
                              {tip.text}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {tip.detail}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* ── Internal Assessment ───────────────────────────────────── */}
            <TabsContent value="ia" className="space-y-8 animate-fade-in">
              {/* IA intro */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="border-border lg:col-span-1">
                  <CardHeader>
                    <CardTitle className="text-base font-display">
                      At a Glance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Weight</span>
                        <span className="font-semibold">25%</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">Time</span>
                        <span className="font-semibold">~30 hours</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-b border-border">
                        <span className="text-muted-foreground">
                          Assessed by
                        </span>
                        <span className="font-semibold">Teacher + IBO</span>
                      </div>
                      <div className="flex items-center justify-between py-2">
                        <span className="text-muted-foreground">Focus</span>
                        <span className="font-semibold">
                          Real-world project
                        </span>
                      </div>
                    </div>
                    <div className="rounded-md bg-chart-3/8 border border-chart-3/20 p-3">
                      <p className="text-xs font-medium text-foreground">
                        Key requirement
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Must solve a genuine problem for a real client. You
                        cannot be your own client.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border lg:col-span-2">
                  <CardHeader>
                    <CardTitle className="text-base font-display">
                      Key Tips for a High-Scoring IA
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {[
                        "Choose a manageable scope — a focused, well-executed solution scores higher than an ambitious incomplete one.",
                        "Document your development process as you go, not retrospectively.",
                        "Involve your client throughout — show evidence of consultation at each stage.",
                        "Choose a programming language your teacher can understand and run.",
                        "Start early — the IA requires ~30 hours of genuine work spread over two years.",
                      ].map((tip, i) => (
                        <div
                          key={tip}
                          className="flex items-start gap-3 py-2 border-b border-border last:border-0"
                          data-ocid={`assessment.ia_key_tip.${i + 1}`}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <p className="text-sm text-muted-foreground">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* 5-step process */}
              <div>
                <h3 className="font-display text-base font-semibold text-foreground mb-5 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  The 5-Phase Development Process
                </h3>
                <div className="space-y-4">
                  {iaSteps.map((step) => {
                    const Icon = step.icon;
                    return (
                      <Card
                        key={step.number}
                        className="border-border"
                        data-ocid={`assessment.ia_step.${step.number}`}
                      >
                        <CardContent className="pt-5 pb-5">
                          <div className="flex items-start gap-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 border border-primary/20 shrink-0">
                              <span className="font-display font-bold text-sm text-primary">
                                {step.number}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <Icon className="w-4 h-4 text-primary shrink-0" />
                                <h4 className="font-display font-semibold text-sm text-foreground">
                                  {step.phase}
                                </h4>
                              </div>
                              <p className="text-sm text-muted-foreground mb-3">
                                {step.description}
                              </p>
                              <div className="rounded-md bg-primary/6 border border-primary/15 px-3 py-2">
                                <p className="text-xs text-primary">
                                  <span className="font-semibold">
                                    Examiner tip:{" "}
                                  </span>
                                  {step.tip}
                                </p>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ── Command Terms Table ───────────────────────────────────────────── */}
      <section
        className="py-10 bg-background"
        data-ocid="assessment.command_terms_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="font-display text-xl font-bold text-foreground">
              Command Terms Reference
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              IB command terms determine how much depth is expected. Matching
              your response to the correct level is essential for full marks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {commandTerms.map((group, gi) => (
              <Card
                key={group.level}
                className="border-border"
                data-ocid={`assessment.command_group.${gi + 1}`}
              >
                <CardHeader className="pb-3">
                  <Badge
                    className={`${group.levelBg} border-0 w-fit text-xs font-semibold`}
                  >
                    {group.level}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-2">
                  {group.terms.map((term) => (
                    <div
                      key={term.term}
                      className="pb-2 border-b border-border last:border-0 last:pb-0"
                    >
                      <div className="font-semibold text-sm text-foreground">
                        {term.term}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {term.meaning}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────────────────────── */}
      <section
        className="py-10 section-alt"
        data-ocid="assessment.timeline_section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="font-display text-xl font-bold text-foreground">
              Two-Year Assessment Timeline
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Typical milestones across the IB Diploma Programme. Your school
              may set different internal deadlines.
            </p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7.5rem] top-0 bottom-0 w-px bg-border hidden sm:block" />

            <div className="space-y-3">
              {timelineMilestones.map((milestone, i) => (
                <div
                  key={milestone.period}
                  className="flex items-start gap-4 sm:gap-0"
                  data-ocid={`assessment.timeline_item.${i + 1}`}
                >
                  {/* Period label */}
                  <div className="hidden sm:flex sm:w-36 sm:pr-4 sm:text-right shrink-0">
                    <span className="text-xs text-muted-foreground font-medium leading-tight mt-3.5">
                      {milestone.period}
                    </span>
                  </div>

                  {/* Dot */}
                  <div className="hidden sm:flex w-4 shrink-0 justify-center">
                    <div
                      className={`w-3 h-3 rounded-full mt-3.5 border-2 border-background ring-2 ${
                        milestone.type === "final"
                          ? "bg-chart-3 ring-chart-3/40"
                          : milestone.type === "exam"
                            ? "bg-primary ring-primary/40"
                            : milestone.type === "ia"
                              ? "bg-accent ring-accent/40"
                              : "bg-muted-foreground ring-muted-foreground/40"
                      }`}
                    />
                  </div>

                  {/* Content card */}
                  <div className="flex-1 sm:pl-4">
                    <Card className="border-border">
                      <CardContent className="pt-3 pb-3">
                        <div className="flex items-start gap-3">
                          <Badge
                            className={`${typeColors[milestone.type]} border text-xs shrink-0 mt-0.5`}
                          >
                            {typeLabels[milestone.type]}
                          </Badge>
                          <div className="min-w-0">
                            <div className="font-semibold text-sm text-foreground">
                              {milestone.event}
                            </div>
                            <div className="text-xs text-muted-foreground mt-0.5 sm:hidden">
                              {milestone.period}
                            </div>
                            <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                              {milestone.detail}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
