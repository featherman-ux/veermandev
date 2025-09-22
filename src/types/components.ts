/**
 * TypeScript interfaces for component props
 */

export interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  link: string;
  linkText?: string;
}

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  image?: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  link?: string;
}

export interface StatCardProps {
  value: string | number;
  label: string;
  icon?: string;
}

export interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  icon?: string;
}

export interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  image?: string;
}

export interface CTASectionProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}