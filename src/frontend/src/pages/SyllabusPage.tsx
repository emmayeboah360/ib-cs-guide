import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type SubtopicLesson, lessonContentA } from "@/data/lessonContentA";
import { lessonContentB } from "@/data/lessonContentB";
import {
  BookMarked,
  BookOpen,
  BoxSelect,
  BrainCircuit,
  ChevronDown,
  Clock,
  Code2,
  Cpu,
  Database,
  ExternalLink,
  FlaskConical,
  GitBranch,
  GraduationCap,
  Layers,
  Lightbulb,
  Network,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const allLessonContent: Record<string, SubtopicLesson> = {
  ...lessonContentA,
  ...lessonContentB,
};

type Level = "SL" | "HL" | "Both";

interface Subtopic {
  id: string;
  code: string;
  title: string;
  outcomes: string[];
}

interface Topic {
  id: string;
  code: string;
  title: string;
  level: Level;
  slHours?: number;
  hlHours?: number;
  subtopics: Subtopic[];
  isNew?: boolean;
  icon: React.ReactNode;
}

interface Theme {
  id: string;
  title: string;
  description: string;
  topics: Topic[];
}

const themeA: Theme = {
  id: "theme-a",
  title: "Theme A: Concepts of Computer Science",
  description:
    "Fundamental concepts covering hardware, networks, databases, and machine learning.",
  topics: [
    {
      id: "A1",
      code: "A.1",
      title: "Computer Fundamentals",
      level: "Both",
      slHours: 30,
      hlHours: 40,
      icon: <Cpu className="w-4 h-4" />,
      subtopics: [
        {
          id: "A.1.1",
          code: "A.1.1",
          title: "Hardware Components",
          outcomes: [
            "Identify and describe the role of the CPU, memory, storage, and I/O devices",
            "Explain the relationship between hardware components in a computer system",
            "Compare primary and secondary storage technologies and their trade-offs",
          ],
        },
        {
          id: "A.1.2",
          code: "A.1.2",
          title: "Binary Representation, Data Types & Encoding",
          outcomes: [
            "Convert between binary, decimal, and hexadecimal number systems",
            "Explain how integers, characters, and booleans are stored in memory",
            "Describe common encoding standards (ASCII, Unicode) and their purpose",
          ],
        },
        {
          id: "A.1.3",
          code: "A.1.3",
          title: "Logic Gates, Boolean Algebra & Truth Tables",
          outcomes: [
            "Construct and interpret truth tables for AND, OR, NOT, NAND, NOR, XOR gates",
            "Simplify Boolean expressions using algebraic laws",
            "Design simple combinational circuits from logic diagrams",
          ],
        },
        {
          id: "A.1.4",
          code: "A.1.4",
          title: "Operating Systems Functions & Features",
          outcomes: [
            "Describe the main functions of an operating system (process, memory, file management)",
            "Explain how an OS manages multitasking and resource allocation",
            "Compare types of operating systems (real-time, batch, interactive)",
          ],
        },
      ],
    },
    {
      id: "A2",
      code: "A.2",
      title: "Networks",
      level: "Both",
      slHours: 25,
      hlHours: 35,
      icon: <Network className="w-4 h-4" />,
      subtopics: [
        {
          id: "A.2.1",
          code: "A.2.1",
          title: "Network Types",
          outcomes: [
            "Distinguish between LAN, WAN, MAN, and PAN network types",
            "Compare client-server and peer-to-peer network architectures",
            "Explain how different network topologies affect performance and reliability",
          ],
        },
        {
          id: "A.2.2",
          code: "A.2.2",
          title: "Network Protocols",
          outcomes: [
            "Describe the purpose and function of TCP/IP, HTTP/HTTPS, and DNS",
            "Explain the OSI model and its seven layers",
            "Trace data flow through protocol layers with examples",
          ],
        },
        {
          id: "A.2.3",
          code: "A.2.3",
          title: "Network Security",
          outcomes: [
            "Explain symmetric and asymmetric encryption techniques",
            "Describe the role of firewalls, VPNs, and intrusion detection systems",
            "Identify common network threats (phishing, DDoS, MITM) and countermeasures",
          ],
        },
        {
          id: "A.2.4",
          code: "A.2.4",
          title: "Data Transmission & Packet Switching",
          outcomes: [
            "Explain how data is divided into packets and routed across a network",
            "Compare circuit switching and packet switching approaches",
            "Describe error detection and correction methods (parity, checksum)",
          ],
        },
      ],
    },
    {
      id: "A3",
      code: "A.3",
      title: "Databases",
      level: "Both",
      slHours: 20,
      hlHours: 30,
      isNew: true,
      icon: <Database className="w-4 h-4" />,
      subtopics: [
        {
          id: "A.3.1",
          code: "A.3.1",
          title: "Database Concepts & Models",
          outcomes: [
            "Define key database terms: table, record, field, primary key, foreign key",
            "Compare relational and non-relational database models",
            "Draw and interpret entity-relationship (ER) diagrams",
          ],
        },
        {
          id: "A.3.2",
          code: "A.3.2",
          title: "SQL Queries & Database Operations",
          outcomes: [
            "Write SQL queries using SELECT, WHERE, JOIN, GROUP BY, and ORDER BY clauses",
            "Perform INSERT, UPDATE, and DELETE operations on a database",
            "Explain the role of indexes in query optimization",
          ],
        },
        {
          id: "A.3.3",
          code: "A.3.3",
          title: "Data Integrity & Normalization",
          outcomes: [
            "Define data integrity constraints (entity, referential, domain)",
            "Normalize a database schema to First, Second, and Third Normal Form (1NF–3NF)",
            "Identify and eliminate data redundancy and anomalies",
          ],
        },
      ],
    },
    {
      id: "A4",
      code: "A.4",
      title: "Machine Learning",
      level: "Both",
      slHours: 15,
      hlHours: 25,
      isNew: true,
      icon: <BrainCircuit className="w-4 h-4" />,
      subtopics: [
        {
          id: "A.4.1",
          code: "A.4.1",
          title: "ML Concepts: Supervised vs Unsupervised Learning",
          outcomes: [
            "Define machine learning and distinguish it from traditional programming",
            "Compare supervised learning (classification, regression) and unsupervised learning (clustering)",
            "Give examples of real-world ML applications in different domains",
          ],
        },
        {
          id: "A.4.2",
          code: "A.4.2",
          title: "Neural Networks & Deep Learning Basics",
          outcomes: [
            "Describe the structure of a feedforward neural network (layers, neurons, weights)",
            "Explain how training occurs through forward propagation and backpropagation",
            "Identify use cases for deep learning (image recognition, NLP)",
          ],
        },
        {
          id: "A.4.3",
          code: "A.4.3",
          title: "Ethical Implications of AI/ML",
          outcomes: [
            "Discuss bias, fairness, and transparency issues in ML systems",
            "Evaluate the social and economic impacts of automation and AI",
            "Explain privacy concerns related to data collection for ML",
          ],
        },
      ],
    },
  ],
};

const themeB: Theme = {
  id: "theme-b",
  title: "Theme B: Computational Thinking & Problem-Solving",
  description:
    "Core programming skills, algorithms, object-oriented design, and abstract data types.",
  topics: [
    {
      id: "B1",
      code: "B.1",
      title: "Computational Thinking",
      level: "Both",
      slHours: 20,
      hlHours: 30,
      icon: <BoxSelect className="w-4 h-4" />,
      subtopics: [
        {
          id: "B.1.1",
          code: "B.1.1",
          title: "Decomposition, Abstraction & Pattern Recognition",
          outcomes: [
            "Break a complex problem into smaller, manageable sub-problems (decomposition)",
            "Identify patterns and generalize solutions across similar problems",
            "Apply abstraction to hide implementation details and reduce complexity",
          ],
        },
        {
          id: "B.1.2",
          code: "B.1.2",
          title: "Algorithm Design Strategies",
          outcomes: [
            "Design algorithms using pseudocode and flowcharts",
            "Apply divide-and-conquer, greedy, and dynamic programming strategies",
            "Trace algorithms manually to verify correctness",
          ],
        },
        {
          id: "B.1.3",
          code: "B.1.3",
          title: "Efficiency & Complexity (Big O Notation)",
          outcomes: [
            "Define time and space complexity and their importance in algorithm selection",
            "Express algorithm complexity using Big O notation (O(1), O(n), O(n²), O(log n))",
            "Compare the efficiency of common sorting and searching algorithms",
          ],
        },
      ],
    },
    {
      id: "B2",
      code: "B.2",
      title: "Programming",
      level: "Both",
      slHours: 35,
      hlHours: 45,
      icon: <Code2 className="w-4 h-4" />,
      subtopics: [
        {
          id: "B.2.1",
          code: "B.2.1",
          title: "Variables, Data Types & Control Structures",
          outcomes: [
            "Declare and use variables of appropriate data types (integer, float, string, boolean)",
            "Implement selection (if/elif/else) and iteration (for/while) control structures",
            "Trace program execution with sample inputs to predict output",
          ],
        },
        {
          id: "B.2.2",
          code: "B.2.2",
          title: "Functions & Modules",
          outcomes: [
            "Define and call functions with parameters and return values",
            "Explain scope, local vs global variables, and the call stack",
            "Use built-in and third-party modules in a program",
          ],
        },
        {
          id: "B.2.3",
          code: "B.2.3",
          title: "File Handling & Error Handling",
          outcomes: [
            "Read from and write to text files using standard file operations",
            "Handle runtime exceptions using try/except blocks",
            "Explain the importance of validating and sanitizing user input",
          ],
        },
        {
          id: "B.2.4",
          code: "B.2.4",
          title: "Collections: Lists, Arrays & Dictionaries",
          outcomes: [
            "Create and manipulate lists, tuples, and arrays programmatically",
            "Use dictionaries (key-value stores) for efficient data lookup",
            "Apply common collection operations: sorting, searching, slicing",
          ],
        },
      ],
    },
    {
      id: "B3",
      code: "B.3",
      title: "Object-Oriented Programming",
      level: "Both",
      slHours: 25,
      hlHours: 35,
      icon: <Layers className="w-4 h-4" />,
      subtopics: [
        {
          id: "B.3.1",
          code: "B.3.1",
          title: "Classes, Objects, Attributes & Methods",
          outcomes: [
            "Define classes with attributes (instance variables) and methods",
            "Instantiate objects from a class and call their methods",
            "Distinguish between instance and class-level attributes",
          ],
        },
        {
          id: "B.3.2",
          code: "B.3.2",
          title: "Encapsulation, Inheritance & Polymorphism",
          outcomes: [
            "Apply encapsulation using access modifiers and getter/setter methods",
            "Implement inheritance to model 'is-a' relationships between classes",
            "Demonstrate polymorphism through method overriding and duck typing",
          ],
        },
        {
          id: "B.3.3",
          code: "B.3.3",
          title: "UML Diagrams",
          outcomes: [
            "Draw UML class diagrams showing attributes, methods, and relationships",
            "Represent inheritance, association, and composition in UML notation",
            "Use UML as a design tool before implementing code",
          ],
        },
      ],
    },
    {
      id: "B4",
      code: "B.4",
      title: "Abstract Data Types",
      level: "HL",
      hlHours: 30,
      icon: <GitBranch className="w-4 h-4" />,
      subtopics: [
        {
          id: "B.4.1",
          code: "B.4.1",
          title: "Stacks, Queues & Linked Lists",
          outcomes: [
            "Describe the structure and operations (push/pop, enqueue/dequeue) of stacks and queues",
            "Implement a singly and doubly linked list with insert, delete, and traversal operations",
            "Compare arrays and linked lists in terms of memory and time complexity",
          ],
        },
        {
          id: "B.4.2",
          code: "B.4.2",
          title: "Trees & Graphs",
          outcomes: [
            "Define binary trees and binary search trees; perform in-order, pre-order, and post-order traversals",
            "Represent graphs using adjacency matrices and adjacency lists",
            "Apply Depth-First Search (DFS) and Breadth-First Search (BFS) algorithms",
          ],
        },
        {
          id: "B.4.3",
          code: "B.4.3",
          title: "Recursion",
          outcomes: [
            "Define recursion and identify base cases and recursive cases",
            "Trace recursive functions and evaluate their call stacks",
            "Implement classic recursive algorithms (factorial, Fibonacci, tower of Hanoi)",
          ],
        },
      ],
    },
  ],
};

function HoursBadge({
  slHours,
  hlHours,
  level,
}: { slHours?: number; hlHours?: number; level: Level }) {
  if (level === "HL") {
    return (
      <span className="badge-hl flex items-center gap-1">
        <Clock className="w-3 h-3" />
        {hlHours}h HL
      </span>
    );
  }
  return (
    <div className="flex items-center gap-1.5">
      {slHours && (
        <span className="badge-sl flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {slHours}h SL
        </span>
      )}
      {hlHours && (
        <span className="badge-hl flex items-center gap-1">
          <Clock className="w-3 h-3" />
          {hlHours}h HL
        </span>
      )}
    </div>
  );
}

function ResourceIcon({
  type,
}: { type: SubtopicLesson["resources"][0]["type"] }) {
  const icons = {
    textbook: <BookMarked className="w-3.5 h-3.5" />,
    video: (
      <svg
        className="w-3.5 h-3.5"
        viewBox="0 0 24 24"
        fill="currentColor"
        role="img"
        aria-label="Video"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    ),
    website: <ExternalLink className="w-3.5 h-3.5" />,
    official: <GraduationCap className="w-3.5 h-3.5" />,
  };
  const colours = {
    textbook: "text-amber-600 bg-amber-50 border-amber-200",
    video: "text-red-600 bg-red-50 border-red-200",
    website: "text-blue-600 bg-blue-50 border-blue-200",
    official: "text-emerald-600 bg-emerald-50 border-emerald-200",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold border ${colours[type]}`}
    >
      {icons[type]}
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </span>
  );
}

function LessonPanel({ lesson }: { lesson: SubtopicLesson }) {
  return (
    <div className="mt-3 space-y-5">
      {/* Concept Explanation */}
      <div>
        <div className="flex items-center gap-2 mb-2.5">
          <Lightbulb className="w-4 h-4 text-primary shrink-0" />
          <h4 className="text-sm font-bold text-foreground uppercase tracking-wide">
            Lesson Content
          </h4>
        </div>
        <div className="prose-lesson">
          {lesson.conceptExplanation.split("\n\n").map((paragraph) => {
            const isBold = paragraph.startsWith("**");
            return (
              <p
                key={paragraph.slice(0, 40)}
                className={`text-sm leading-relaxed text-muted-foreground mb-2 last:mb-0 ${
                  isBold ? "font-medium text-foreground" : ""
                }`}
              >
                {paragraph.split(/\*\*(.*?)\*\*/g).map((part, j) =>
                  j % 2 === 1 ? (
                    <strong
                      key={`b-${j}-${part.slice(0, 20)}`}
                      className="font-semibold text-foreground"
                    >
                      {part}
                    </strong>
                  ) : (
                    part
                  ),
                )}
              </p>
            );
          })}
        </div>
      </div>

      {/* Key Terms */}
      <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
        <div className="flex items-center gap-2 mb-3">
          <BookMarked className="w-4 h-4 text-primary shrink-0" />
          <h4 className="text-sm font-bold text-primary">Key Terms</h4>
        </div>
        <dl className="space-y-2.5">
          {lesson.keyTerms.map(({ term, definition }) => (
            <div key={term} className="flex flex-col sm:flex-row sm:gap-2">
              <dt className="text-xs font-bold text-foreground shrink-0 min-w-[140px] sm:min-w-[160px]">
                {term}
              </dt>
              <dd className="text-xs text-muted-foreground leading-relaxed">
                {definition}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Worked Example */}
      {lesson.workedExample && (
        <div className="rounded-lg border border-border bg-[oklch(0.13_0.008_230)] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-border/50 bg-[oklch(0.17_0.01_230)]">
            <FlaskConical className="w-3.5 h-3.5 text-accent shrink-0" />
            <span className="text-xs font-bold text-accent uppercase tracking-wide">
              Worked Example
            </span>
          </div>
          <pre className="px-4 py-3 text-xs font-mono text-[oklch(0.85_0.05_230)] overflow-x-auto leading-relaxed whitespace-pre-wrap">
            {lesson.workedExample}
          </pre>
        </div>
      )}

      {/* HL Extension */}
      {lesson.hlExtension && (
        <div className="rounded-lg border border-primary/30 bg-primary/[0.06] overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/20 bg-primary/10">
            <span className="badge-hl text-[10px] px-2 py-0.5">HL</span>
            <span className="text-xs font-bold text-primary uppercase tracking-wide">
              Higher Level Extension
            </span>
          </div>
          <div className="p-4">
            {lesson.hlExtension.split("\n\n").map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="text-sm text-muted-foreground leading-relaxed mb-2 last:mb-0"
              >
                {paragraph.split(/\*\*(.*?)\*\*/g).map((part, j) =>
                  j % 2 === 1 ? (
                    <strong
                      key={`b-${j}-${part.slice(0, 20)}`}
                      className="font-semibold text-foreground"
                    >
                      {part}
                    </strong>
                  ) : (
                    part
                  ),
                )}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Resources */}
      <div>
        <div className="flex items-center gap-2 mb-2.5">
          <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0" />
          <h4 className="text-sm font-bold text-foreground">
            Recommended Resources
          </h4>
        </div>
        <ul className="space-y-2">
          {lesson.resources.map((resource) => (
            <li
              key={resource.url}
              className="flex items-start gap-2.5 p-2.5 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-smooth group"
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-primary hover:underline group-hover:text-primary/80 transition-colors"
                  >
                    {resource.title}
                  </a>
                  <ResourceIcon type={resource.type} />
                </div>
                <p className="text-xs text-muted-foreground leading-snug">
                  {resource.description}
                </p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-smooth" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function SubtopicRow({ subtopic, idx }: { subtopic: Subtopic; idx: number }) {
  const [open, setOpen] = useState(false);
  const lesson = allLessonContent[subtopic.id];
  return (
    <div
      className="border border-border rounded-lg overflow-hidden"
      data-ocid={`syllabus.subtopic.${idx}`}
    >
      <button
        type="button"
        className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left hover:bg-muted/40 transition-smooth"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        data-ocid={`syllabus.subtopic_toggle.${idx}`}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <code className="text-xs font-mono text-primary shrink-0 bg-primary/10 px-1.5 py-0.5 rounded">
            {subtopic.code}
          </code>
          <span className="text-sm font-medium text-foreground truncate">
            {subtopic.title}
          </span>
          {lesson && (
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-medium text-accent bg-accent/10 px-1.5 py-0.5 rounded-full shrink-0">
              <Lightbulb className="w-2.5 h-2.5" />
              Lesson
            </span>
          )}
        </div>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-5 pt-2 bg-muted/20 border-t border-border">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Learning Outcomes
              </p>
              <ul className="space-y-2 mb-0">
                {subtopic.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
              {lesson && <LessonPanel lesson={lesson} />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TopicAccordion({
  topic,
  levelFilter,
  topicIdx,
}: { topic: Topic; levelFilter: "SL" | "HL"; topicIdx: number }) {
  const [open, setOpen] = useState(false);
  const isHLOnly = topic.level === "HL";

  // SL tab: hide HL-only topics
  if (levelFilter === "SL" && isHLOnly) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: topicIdx * 0.05 }}
      className="rounded-xl border border-border bg-card overflow-hidden shadow-subtle"
      data-ocid={`syllabus.topic_card.${topicIdx + 1}`}
    >
      {/* Topic header */}
      <button
        type="button"
        className="w-full flex items-start gap-3 px-5 py-4 text-left hover:bg-muted/30 transition-smooth"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        data-ocid={`syllabus.topic_toggle.${topicIdx + 1}`}
      >
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {topic.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <code className="text-xs font-mono font-bold text-primary">
              {topic.code}
            </code>
            {isHLOnly && (
              <span className="badge-hl text-[10px] px-2 py-0">HL Only</span>
            )}
            {topic.isNew && (
              <Badge
                variant="outline"
                className="text-[10px] px-1.5 py-0 border-accent text-accent-foreground bg-accent/10"
              >
                NEW
              </Badge>
            )}
          </div>
          <h3 className="font-semibold text-foreground text-sm leading-snug">
            {topic.title}
          </h3>
          <div className="mt-2">
            <HoursBadge
              slHours={topic.slHours}
              hlHours={topic.hlHours}
              level={topic.level}
            />
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 mt-1 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Subtopics */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 space-y-2 border-t border-border bg-background/60">
              {topic.subtopics.map((sub, i) => (
                <SubtopicRow
                  key={sub.id}
                  subtopic={sub}
                  idx={(topicIdx + 1) * 10 + i + 1}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function ThemeSection({
  theme,
  levelFilter,
}: { theme: Theme; levelFilter: "SL" | "HL" }) {
  const visibleTopics = theme.topics.filter(
    (t) => levelFilter === "HL" || t.level !== "HL",
  );
  const hlOnlyCount = theme.topics.filter((t) => t.level === "HL").length;

  return (
    <div>
      <div className="mb-4">
        <h2 className="font-display text-lg font-bold text-foreground">
          {theme.title}
        </h2>
        <p className="text-sm text-muted-foreground mt-0.5">
          {theme.description}
        </p>
        {levelFilter === "SL" && hlOnlyCount > 0 && (
          <p className="text-xs text-muted-foreground mt-1 italic">
            {hlOnlyCount} HL-only topic{hlOnlyCount > 1 ? "s" : ""} hidden.
            Switch to HL view to see all topics.
          </p>
        )}
      </div>
      {visibleTopics.length === 0 ? (
        <div className="rounded-xl border border-dashed border-border p-8 text-center text-muted-foreground text-sm">
          No SL topics in this section.
        </div>
      ) : (
        <div className="space-y-3">
          {theme.topics.map((topic, i) => (
            <TopicAccordion
              key={topic.id}
              topic={topic}
              levelFilter={levelFilter}
              topicIdx={i}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function SyllabusPage() {
  const [levelFilter, setLevelFilter] = useState<"SL" | "HL">("SL");

  const slHours = [
    themeA.topics.reduce((sum, t) => sum + (t.slHours ?? 0), 0),
    themeB.topics
      .filter((t) => t.level !== "HL")
      .reduce((sum, t) => sum + (t.slHours ?? 0), 0),
  ].reduce((a, b) => a + b, 0);

  const hlHours = [
    themeA.topics.reduce((sum, t) => sum + (t.hlHours ?? 0), 0),
    themeB.topics.reduce((sum, t) => sum + (t.hlHours ?? 0), 0),
  ].reduce((a, b) => a + b, 0);

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header py-10" data-ocid="syllabus.page">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                  IB CS Syllabus
                </h1>
                <Badge
                  variant="outline"
                  className="border-accent text-accent-foreground bg-accent/10 text-xs shrink-0"
                >
                  2023 Syllabus
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
                Complete topic breakdown for IB Diploma Programme Computer
                Science. Expand each topic to explore subtopics and specific
                learning outcomes. Toggle between SL and HL to filter content.
              </p>
              <div className="flex flex-wrap gap-3 mt-3">
                <span className="badge-sl flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  SL: ~{slHours} hrs total
                </span>
                <span className="badge-hl flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  HL: ~{hlHours} hrs total
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SL/HL Level Toggle */}
      <div
        className="sticky top-0 z-20 bg-card/95 backdrop-blur border-b border-border shadow-subtle"
        data-ocid="syllabus.level_filter"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground shrink-0">
              View:
            </span>
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={() => setLevelFilter("SL")}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-smooth ${
                  levelFilter === "SL"
                    ? "bg-accent text-accent-foreground shadow-subtle"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
                data-ocid="syllabus.sl_tab"
              >
                Standard Level (SL)
              </button>
              <button
                type="button"
                onClick={() => setLevelFilter("HL")}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-smooth ${
                  levelFilter === "HL"
                    ? "bg-primary text-primary-foreground shadow-subtle"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
                data-ocid="syllabus.hl_tab"
              >
                Higher Level (HL)
              </button>
            </div>
            {levelFilter === "HL" && (
              <span className="badge-hl ml-auto hidden sm:inline-flex">
                Includes all SL + HL extension topics
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Syllabus Content by Theme */}
      <section
        className="py-8 bg-background"
        data-ocid="syllabus.content_section"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="theme-a" data-ocid="syllabus.theme_tabs">
            <TabsList className="mb-8 flex-wrap h-auto gap-1">
              <TabsTrigger
                value="theme-a"
                data-ocid="syllabus.tab_theme_a"
                className="text-xs sm:text-sm"
              >
                Theme A — Concepts of CS
              </TabsTrigger>
              <TabsTrigger
                value="theme-b"
                data-ocid="syllabus.tab_theme_b"
                className="text-xs sm:text-sm"
              >
                Theme B — Computational Thinking
              </TabsTrigger>
            </TabsList>

            <TabsContent value="theme-a">
              <ThemeSection theme={themeA} levelFilter={levelFilter} />
            </TabsContent>

            <TabsContent value="theme-b">
              <ThemeSection theme={themeB} levelFilter={levelFilter} />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer note */}
      <section className="section-alt py-6" data-ocid="syllabus.footer_note">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground text-center">
            Based on the IB DP Computer Science guide (first assessment 2027).
            Hour estimates are indicative and may vary by teacher. HL students
            study all SL content plus HL-exclusive topics.
          </p>
        </div>
      </section>
    </Layout>
  );
}
