import { MapPin, Wallet, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import islandeImg from '@/assets/cities/islande.jpg';
import baliImg from '@/assets/cities/bali.jpg';
import bangkokImg from '@/assets/cities/bangkok.jpg';
import marrakechImg from '@/assets/cities/marrakech.jpg';
import lisbonneImg from '@/assets/cities/lisbonne.jpg';
import romeImg from '@/assets/cities/rome.jpg';

const destinations = [
  {
    title: "Thaïlande",
    image: bangkokImg,
    budget: "25-40€/jour",
    duration: "2-4 semaines",
    description: "Budget détaillé, itinéraires par région, street food et hébergements testés.",
    link: "/destinations/thailande",
    badge: "Populaire",
  },
  {
    title: "Bali, Indonésie",
    image: baliImg,
    budget: "30-50€/jour",
    duration: "2-3 semaines",
    description: "Guide complet : temples, rizières, plages et budget réel jour par jour.",
    link: "/destinations/indonesie/bali",
    badge: "Guide complet",
  },
  {
    title: "Portugal",
    image: lisbonneImg,
    budget: "50-80€/jour",
    duration: "1-2 semaines",
    description: "Lisbonne, Porto, Algarve : itinéraires, transports et bonnes adresses.",
    link: "/destinations/portugal",
    badge: "Europe",
  },
  {
    title: "Maroc",
    image: marrakechImg,
    budget: "25-45€/jour",
    duration: "1-2 semaines",
    description: "Marrakech, Fès, désert du Sahara : budget, riads et conseils pratiques.",
    link: "/destinations/maroc",
    badge: "Afrique",
  },
  {
    title: "Islande",
    image: islandeImg,
    budget: "100-150€/jour",
    duration: "10-15 jours",
    description: "Road trip, aurores boréales, sources chaudes : guide complet et budget.",
    link: "/destinations/islande",
    badge: "Aventure",
  },
  {
    title: "Italie",
    image: romeImg,
    budget: "60-100€/jour",
    duration: "1-3 semaines",
    description: "Rome, Florence, Venise : itinéraires culturels, gastronomie et budget.",
    link: "/destinations/italie",
    badge: "Europe",
  },
];

const Voyages = () => {
  return (
    <section id="voyages" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-elegant font-bold text-foreground mb-3">
              Destinations populaires
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Guides complets avec budgets réels et itinéraires testés.
            </p>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Link to={destination.link} key={index}>
                <Card className="group overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={destination.image} 
                      alt={`Guide voyage ${destination.title}`}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <span className="absolute top-3 left-3 px-3 py-1 bg-ocean/90 text-white text-xs font-semibold rounded-full">
                      {destination.badge}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-elegant font-semibold text-foreground mb-2 group-hover:text-ocean transition-colors">
                      {destination.title}
                    </h3>
                    
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Wallet className="w-4 h-4 text-ocean" />
                        <span>{destination.budget}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-sunset" />
                        <span>{destination.duration}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {destination.description}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link 
              to="/destinations" 
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-ocean text-ocean font-semibold rounded-lg hover:bg-ocean hover:text-white transition-all duration-300"
            >
              <MapPin className="w-5 h-5" />
              Voir toutes les destinations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Voyages;
