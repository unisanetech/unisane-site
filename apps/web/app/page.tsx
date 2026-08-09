import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/hero-section';
import { ServicesSection } from '@/components/home/services-section';
import ProcessSection from '@/components/home/process-section';
import { TechStackSection } from '@/components/home/tech-stack-section';
import { PortfolioSection } from '@/components/home/portfolio-section';
import { PageLayout } from '@/components/layouts/page-layout';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata('home');

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
      <PortfolioSection />
      <ProcessSection />
    </PageLayout>
  );
}
