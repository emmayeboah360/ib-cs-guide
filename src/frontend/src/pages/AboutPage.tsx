import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  Code2,
  GraduationCap,
  Users,
} from "lucide-react";
import { useState } from "react";

const audiences = [
  {
    icon: GraduationCap,
    title: "IB DP Students",
    description:
      "The primary audience — whether you're studying for Paper 1, Paper 2, or prepping your IA, this guide supports every stage of your IB CS journey.",
    badge: "Primary Audience",
  },
  {
    icon: BookOpen,
    title: "CS Teachers",
    description:
      "A quick reference for curriculum planning, topic ordering, and assessment breakdowns. Useful for explaining course structure to students and parents.",
    badge: "Reference Tool",
  },
  {
    icon: Users,
    title: "Parents & Guardians",
    description:
      "Understand what the IB DP CS course involves, how it's assessed, and how it differs at SL and HL — without needing a technical background.",
    badge: "Course Overview",
  },
];

const howToSteps = [
  {
    step: 1,
    text: "Start with the Syllabus page to understand what topics are covered across Theme A, Theme B, and the HL Options.",
  },
  {
    step: 2,
    text: "Check the SL vs HL page to understand course differences and which additional topics HL students must master.",
  },
  {
    step: 3,
    text: "Read the Assessment Guides to understand what the exams look like, how they're marked, and what to expect.",
  },
  {
    step: 4,
    text: "Use the Resources page to find practice materials, past papers, and recommended tools for studying.",
  },
  {
    step: 5,
    text: "Check News & Updates for the latest curriculum changes, exam session notes, and guide revisions.",
  },
];

const techStack = [
  { name: "React", desc: "UI framework" },
  { name: "TypeScript", desc: "Type-safe JavaScript" },
  { name: "Tailwind CSS", desc: "Utility-first styling" },
  { name: "Caffeine.ai", desc: "Deployment platform" },
];

type FeedbackType = "Correction" | "Suggestion" | "Missing Content" | "Other";

interface FeedbackForm {
  name: string;
  email: string;
  type: FeedbackType | "";
  message: string;
}

export function AboutPage() {
  const [form, setForm] = useState<FeedbackForm>({
    name: "",
    email: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header py-10" data-ocid="about.page">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3">
            <Badge className="badge-sl mt-1">About</Badge>
            <div>
              <h1 className="font-display text-3xl font-bold text-foreground">
                About This Website
              </h1>
              <p className="text-muted-foreground mt-1 max-w-2xl">
                An unofficial study companion for IB Diploma Programme Computer
                Science students and teachers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section
        className="py-12 bg-background"
        data-ocid="about.purpose_section"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* What Is This Website */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              What Is This Website?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This website is an unofficial study companion for students taking
              IB Diploma Programme Computer Science. It provides organized,
              accessible guides to the IB CS syllabus, assessment requirements,
              and curated learning resources.
            </p>
          </div>

          {/* Who Is It For */}
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-5">
              Who Is It For?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {audiences.map((a, i) => (
                <Card
                  key={a.title}
                  className="border-border"
                  data-ocid={`about.audience_card.${i + 1}`}
                >
                  <CardContent className="pt-5 pb-5">
                    <div className="flex flex-col items-start gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary shrink-0">
                        <a.icon size={20} />
                      </div>
                      <div>
                        <span className="inline-block text-xs font-medium text-accent-foreground bg-accent/20 rounded-full px-2 py-0.5 mb-2">
                          {a.badge}
                        </span>
                        <div className="font-display font-bold text-sm text-foreground mb-1.5">
                          {a.title}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {a.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div
            className="rounded-xl border border-amber-300/60 bg-amber-50/70 dark:bg-amber-950/20 dark:border-amber-700/40 p-5"
            data-ocid="about.disclaimer"
          >
            <div className="flex items-start gap-3">
              <AlertTriangle
                size={20}
                className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5"
              />
              <div>
                <div className="font-display font-bold text-base text-amber-800 dark:text-amber-300 mb-2">
                  ⚠️ Unofficial Resource
                </div>
                <p className="text-sm leading-relaxed text-amber-900/80 dark:text-amber-200/80">
                  This website is{" "}
                  <strong>
                    NOT affiliated with, endorsed by, or connected to
                  </strong>{" "}
                  the International Baccalaureate Organization (IBO) in any way.
                  All IB® trademarks, curriculum content, and assessment
                  materials belong to the IBO. This is an independent
                  student/teacher resource for educational purposes only. For
                  official information, please visit{" "}
                  <a
                    href="https://ibo.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-medium hover:text-amber-700 dark:hover:text-amber-100 transition-colors"
                  >
                    ibo.org
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div data-ocid="about.how_to_section">
            <h2 className="font-display text-2xl font-bold text-foreground mb-5">
              How to Use This Website
            </h2>
            <ol className="space-y-4">
              {howToSteps.map(({ step, text }) => (
                <li
                  key={step}
                  className="flex items-start gap-4"
                  data-ocid={`about.how_to_step.${step}`}
                >
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-display font-bold text-sm">
                    {step}
                  </span>
                  <p className="text-muted-foreground leading-relaxed pt-1">
                    {text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-12 section-alt" data-ocid="about.feedback_section">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground mb-1">
            Help Us Improve
          </h2>
          <p className="text-muted-foreground mb-6 text-sm">
            We cannot respond to every message, but all feedback is reviewed.
          </p>

          {submitted ? (
            <div
              className="flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 px-5 py-5"
              data-ocid="about.feedback.success_state"
            >
              <CheckCircle2 size={22} className="text-accent shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">
                  Thank you for your feedback!
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Your message has been received. We'll review it carefully.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              data-ocid="about.feedback_form"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="fb-name">Name</Label>
                  <Input
                    id="fb-name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    required
                    data-ocid="about.feedback.name_input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="fb-email">Email</Label>
                  <Input
                    id="fb-email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    required
                    data-ocid="about.feedback.email_input"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="fb-type">Type of Feedback</Label>
                <Select
                  value={form.type}
                  onValueChange={(val) =>
                    setForm((f) => ({ ...f, type: val as FeedbackType }))
                  }
                  required
                >
                  <SelectTrigger
                    id="fb-type"
                    data-ocid="about.feedback.type_select"
                  >
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Correction">Correction</SelectItem>
                    <SelectItem value="Suggestion">Suggestion</SelectItem>
                    <SelectItem value="Missing Content">
                      Missing Content
                    </SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="fb-message">Message</Label>
                <Textarea
                  id="fb-message"
                  rows={4}
                  placeholder="Describe your feedback in detail..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  required
                  data-ocid="about.feedback.message_textarea"
                />
              </div>

              <Button
                type="submit"
                className="w-full sm:w-auto"
                data-ocid="about.feedback.submit_button"
              >
                Send Feedback
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Footer Credits */}
      <section
        className="py-10 bg-background"
        data-ocid="about.credits_section"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-display text-base font-bold text-foreground mb-3 flex items-center gap-2">
                <Code2 size={16} className="text-primary" />
                Built With
              </h3>
              <ul className="space-y-2">
                {techStack.map((t) => (
                  <li key={t.name} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    <span className="text-sm font-medium text-foreground">
                      {t.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      — {t.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-foreground mb-3 flex items-center gap-2">
                <BookOpen size={16} className="text-primary" />
                Data Sources
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block mt-1.5" />
                  <span className="text-sm text-muted-foreground">
                    IB CS Subject Guide (IBO) — official curriculum document
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block mt-1.5" />
                  <span className="text-sm text-muted-foreground">
                    Various educational resources curated by IB CS educators
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
