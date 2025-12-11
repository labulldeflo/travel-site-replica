import { ArrowLeft, LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import AffiliateWidget from '@/components/AffiliateWidget';

interface GuideSection {
  title: string;
  icon: LucideIcon;
  content: string[];
}

interface GuideTemplateProps {
  title: string;
  description: string;
  metaDescription: string;
  country: string;
  countrySlug: string;
  icon: LucideIcon;
  sections: GuideSection[];
  affiliateCity?: string;
  affiliateCountryCode?: string;
}

const GuideTemplate = ({
  title,
  description,
  metaDescription,
  country,
  countrySlug,
  icon: MainIcon,
  sections,
  affiliateCity,
  affiliateCountryCode
}: GuideTemplateProps) => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={`${title} - Cap sur le Monde`}
        description={metaDescription}
      />
      <Header />
      
      <div className="container mx-auto px-4 py-12 pt-24">
        <Link to={`/destinations/${countrySlug}`} className="inline-flex items-center text-ocean hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Retour à {country}
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-ocean rounded-full flex items-center justify-center mx-auto mb-6">
              <MainIcon className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-script font-bold text-foreground mb-4">
              {title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
          </div>

          {sections.map((section, index) => (
            <Card key={index} className="p-8 mb-8">
              <h2 className="text-2xl font-elegant font-semibold text-foreground mb-4 flex items-center">
                <section.icon className="w-6 h-6 mr-2 text-ocean" />
                {section.title}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <ul className="space-y-3 ml-4">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-sunset rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}

          {affiliateCity && affiliateCountryCode && (
            <div className="mt-8">
              <AffiliateWidget 
                title={`🏨 Trouvez votre hébergement au ${country}`}
                description="Réservez votre hôtel ou appartement aux meilleurs prix via notre partenaire Booking.com"
                link={`https://www.booking.com/searchresults.html?ss=${affiliateCity}&lang=fr&aid=2311236`}
                badge="Partenaire officiel"
              />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GuideTemplate;
