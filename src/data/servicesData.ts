import { BookOpen, BarChart3, Mail, Presentation } from 'lucide-react';

export interface Service {
  id: string;
  name: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  icon: any;
  description: string;
  services: Service[];
  color: string;
}

export const servicesData: ServiceCategory[] = [
  {
    id: 'academic-writing',
    title: 'Academic Writing',
    icon: BookOpen,
    description: 'Professional writing services for research',
    color: '#2563eb',
    services: [
      { id: 'synopsis', name: 'Synopsis Writing' },
      { id: 'thesis', name: 'Thesis Writing' },
      { id: 'article', name: 'Article Writing' },
      { id: 'abstract', name: 'Abstract Making' },
    ],
  },
  {
    id: 'data-statistics',
    title: 'Data & Statistics',
    icon: BarChart3,
    description: 'Statistical analysis and data management',
    color: '#10b981',
    services: [
      { id: 'sample-size', name: 'Sample Size Calculation' },
      { id: 'data-entry', name: 'Data Entry' },
      { id: 'data-article', name: 'SPSS/Stata Analysis' },
      { id: 'data-thesis', name: 'Thesis Analysis' },
    ],
  },
  {
    id: 'publication-support',
    title: 'Publication Support',
    icon: Mail,
    description: 'Complete publication assistance',
    color: '#ef4444',
    services: [
      { id: 'journal-correspondence', name: 'Journal Correspondence' },
      { id: 'editing', name: 'Article Editing/Formatting' },
      { id: 'plagiarism', name: 'Plagiarism Report & Removal' },
    ],
  },
  {
    id: 'presentation-visuals',
    title: 'Presentation & Visuals',
    icon: Presentation,
    description: 'Visual presentation materials',
    color: '#a855f7',
    services: [
      { id: 'poster', name: 'Poster Making' },
      { id: 'powerpoint', name: 'PowerPoint Presentations' },
    ],
  },
];
