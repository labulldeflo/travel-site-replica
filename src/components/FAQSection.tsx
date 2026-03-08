import { HelpCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Helmet } from 'react-helmet-async';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  className?: string;
}

const FAQSection = ({ faqs, className = '' }: FAQSectionProps) => {
  if (!faqs || faqs.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Card className={`p-8 ${className}`}>
        <h2 className="text-2xl font-elegant font-semibold text-foreground mb-6 flex items-center">
          <HelpCircle className="w-6 h-6 mr-2 text-ocean" />
          Questions fréquentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="text-left font-medium text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </>
  );
};

export default FAQSection;
