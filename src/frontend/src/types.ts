// Shared types for IB DP Computer Science study website

export type Level = "SL" | "HL" | "Both";

export interface NavItem {
  label: string;
  path: string;
  description?: string;
}

export interface TopicCard {
  id: string;
  title: string;
  description: string;
  level: Level;
  href?: string;
}

export interface AssessmentComponent {
  code: string;
  name: string;
  description: string;
  slWeight: string;
  hlWeight: string;
  type: "internal" | "external";
}

export interface Resource {
  title: string;
  description: string;
  url: string;
  category: "Official" | "Practice" | "Video" | "Tool";
  free: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  tag: string;
}
