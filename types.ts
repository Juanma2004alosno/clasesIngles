export enum PageView {
  HOME = 'HOME',
  CLASSES = 'CLASSES',
  TUTOR = 'TUTOR',
  CONTACT = 'CONTACT'
}

export interface Course {
  id: number;
  title: string;
  level: string;
  description: string;
  schedule: string;
  price: string;
  image: string;
  features: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface MethodologyStep {
  title: string;
  description: string;
  icon: string;
}