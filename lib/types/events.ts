export type EventCategory = "ritual" | "workshop" | "sound" | "meditation";

export interface EventSession {
  date: Date;
  topic: string;
  content: string[];
}

export interface Event {
  id: string;
  title: string;
  level?: string;
  series?: string;
  sessions: EventSession[];
  sessionDuration: string;
  startTime: string;
  location: string;
  contact?: string;
  category: EventCategory;
  spots?: number;
  description: string;
  bibliography?: string[];
}

export interface CategoryStyle {
  label: string;
  className: string;
}
