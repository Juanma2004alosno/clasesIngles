import { Course, Testimonial, FAQItem, MethodologyStep } from './types';

export const TEACHER_NAME = "Sarah Jenkins";
export const TEACHER_BIO = "Certified CELTA instructor with over 10 years of experience helping professionals and students achieve fluency. My methodology focuses on practical usage, confidence building, and cultural nuance.";

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Business English Mastery",
    level: "Intermediate - Advanced",
    description: "Master the art of negotiation, presentations, and professional email writing. Tailored for corporate environments.",
    schedule: "Mon/Wed 18:00 - 19:30",
    price: "€120/month",
    image: "https://picsum.photos/400/300?random=1",
    features: ["Negotiation Skills", "Email Etiquette", "Presentation Practice", "Industry Vocabulary"]
  },
  {
    id: 2,
    title: "Conversational Fluency",
    level: "Beginner - Intermediate",
    description: "Focus on speaking and listening skills in a relaxed environment. Overcome the fear of speaking.",
    schedule: "Tue/Thu 19:00 - 20:30",
    price: "€100/month",
    image: "https://picsum.photos/400/300?random=2",
    features: ["Pronunciation Clinics", "Daily Life Scenarios", "Listening Drills", "Small Group Debates"]
  },
  {
    id: 3,
    title: "IELTS Preparation",
    level: "All Levels",
    description: "Intensive preparation for the IELTS exam covering all four bands: Reading, Writing, Listening, and Speaking.",
    schedule: "Saturdays 10:00 - 13:00",
    price: "€150/month",
    image: "https://picsum.photos/400/300?random=3",
    features: ["Mock Exams", "Essay Feedback", "Speaking Simulations", "Time Management"]
  }
];

export const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    title: "Assessment",
    description: "We start with a comprehensive analysis of your current level and identify your specific goals.",
    icon: "Target"
  },
  {
    title: "Immersion",
    description: "Classes are conducted 100% in English, focusing on real-world scenarios relevant to your life.",
    icon: "MessageCircle"
  },
  {
    title: "Feedback",
    description: "Receive detailed, constructive feedback after every session to track progress and correct errors.",
    icon: "TrendingUp"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Elena Rodriguez",
    role: "Marketing Director",
    content: "Sarah's Business English course completely changed how I present to international clients. I feel so much more confident now.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Marc Dubois",
    role: "Software Engineer",
    content: "I needed to pass the IELTS for my visa. Thanks to the intensive prep, I got a Band 8.0! Highly recommended.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Sofia Rossi",
    role: "University Student",
    content: "The conversation classes are fun and engaging. I finally stopped translating in my head before speaking.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you offer a free trial class?",
    answer: "Yes! I offer a 20-minute free discovery call to assess your level and discuss your goals."
  },
  {
    question: "What platform do you use for online classes?",
    answer: "I primarily use Zoom or Google Meet, as they allow for screen sharing and recording sessions for your review."
  },
  {
    question: "Can I cancel or reschedule a class?",
    answer: "Life happens! You can reschedule a class free of charge with at least 24 hours' notice."
  },
  {
    question: "Are materials included in the price?",
    answer: "Absolutely. I provide all necessary PDF worksheets, audio files, and access to a digital vocabulary list."
  }
];

export const GEMINI_SYSTEM_INSTRUCTION = `
You are Sarah's AI Assistant, a friendly and encouraging English tutor. 
Your goal is to chat with potential students to assess their English level casually.
1. Keep your responses concise (under 60 words) unless explaining a grammar concept.
2. Correct major grammar mistakes gently if they occur.
3. Be polite, professional, but warm.
4. If they ask about pricing, mention classes start at €100/month.
5. If they ask about specific schedules, refer them to the 'Classes' section of the website.
`;