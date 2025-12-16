import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, DollarSign, Compass, Calendar } from "lucide-react";
import thailandeImg from "@/assets/destinations/thailande.jpg";
import laosImg from "@/assets/destinations/laos.jpg";
import birmanieImg from "@/assets/destinations/birmanie.jpg";
import malaisieImg from "@/assets/destinations/malaisie.jpg";
import singapourImg from "@/assets/destinations/singapour.jpg";
import indonesieImg from "@/assets/destinations/indonesie.jpg";
import philippinesImg from "@/assets/destinations/philippines.jpg";
import bruneiImg from "@/assets/destinations/brunei.jpg";
import timorOrientalImg from "@/assets/destinations/timor-oriental.jpg";

const countries = [
  {
    name: "Thaïlande",
    region: "Asie du Sud-Est",
    description:
      "Plages idylliques, temples dorés et gastronomie incomparable, la Thaïlande offre une immersion entre spiritualité et fête.",
    duration: "2-3 semaines",
    budget: "€€",
    difficulty: "Facile",
    season: "Nov-Avr",
    highlights: ["Bangkok", "Chiang Mai", "Phuket", "+1"],
    image: thailandeImg,
  },
  {
    name: "Laos",
    region: "Asie du Sud-Est",
    description:
      "Un pays paisible et authentique, traversé par le Mékong, où le temps semble s'être arrêté.",
    duration: "10-15 jours",
    budget: "€",
    difficulty: "Facile",
    season: "Nov-Mar",
    highlights: ["Luang Prabang", "Vang Vieng", "Pakse", "+1"],
    image: laosImg,
  },
  {
    name: "Birmanie (Myanmar)",
    region: "Asie du Sud-Est",
    description:
      "Entre pagodes dorées, lacs paisibles et sourires chaleureux, la Birmanie dévoile une Asie hors du temps.",
    duration: "2-3 semaines",
    budget: "€",
    difficulty: "Modérée",
    season: "Nov-Fév",
    highlights: ["Bagan", "Lac Inle", "Yangon", "+1"],
    image: birmanieImg,
  },
  {
    name: "Malaisie",
    region: "Asie du Sud-Est",
    description:
      "Un mélange fascinant entre modernité et nature tropicale, des gratte-ciels de Kuala Lumpur aux îles paradisiaques.",
    duration: "2-3 semaines",
    budget: "€€",
    difficulty: "Facile",
    season: "Déc-Mar",
    highlights: ["Kuala Lumpur", "Langkawi", "Bornéo", "+1"],
    image: malaisieImg,
  },
  {
    name: "Singapour",
    region: "Asie du Sud-Est",
    description:
      "Ville-État futuriste et verte, Singapour impressionne par sa propreté, sa sécurité et son mélange de cultures.",
    duration: "4-6 jours",
    budget: "€€€",
    difficulty: "Facile",
    season: "Toute l'année",
    highlights: ["Marina Bay Sands", "Gardens by the Bay", "Chinatown", "+1"],
    image: singapourImg,
  },
  {
    name: "Indonésie",
    region: "Asie du Sud-Est",
    description:
      "Archipel aux mille visages, l'Indonésie combine volcans, plages et spiritualité dans un cadre naturel spectaculaire.",
    duration: "3-4 semaines",
    budget: "€€",
    difficulty: "Modérée",
    season: "Mai-Oct",
    highlights: ["Bali", "Java", "Komodo", "+1"],
    image: indonesieImg,
  },
  {
    name: "Philippines",
    region: "Asie du Sud-Est",
    description:
      "Un archipel aux eaux turquoise, parfait pour la plongée, les plages de rêve et les rencontres chaleureuses.",
    duration: "2-3 semaines",
    budget: "€€",
    difficulty: "Facile",
    season: "Nov-Mai",
    highlights: ["Palawan", "Cebu", "Bohol", "+1"],
    image: philippinesImg,
  },
  {
    name: "Brunei",
    region: "Asie du Sud-Est",
    description:
      "Petit mais riche, Brunei séduit par ses mosquées dorées et sa nature luxuriante encore préservée.",
    duration: "5-7 jours",
    budget: "€€€",
    difficulty: "Facile",
    season: "Nov-Mar",
    highlights: ["Bandar Seri Begawan", "Kampong Ayer", "Ulu Temburong", "+1"],
    image: bruneiImg,
  },
  {
    name: "Timor oriental",
    region: "Asie du Sud-Est",
    description:
      "Une destination confidentielle, sauvage et authentique, entre montagnes, plages et culture portugaise.",
    duration: "10-12 jours",
    budget: "€",
    difficulty: "Modérée",
    season: "Mai-Nov",
    highlights: ["Dili", "Atauro", "Maubisse", "+1"],
    image: timorOrientalImg,
  },
];

export default function AsieSudEst() {
  return (
    <div className="grid md:grid-cols-3 gap-6 p-6">
      {countries.map((country) => (
        <Card
          key={country.name}
          className="overflow-hidden hover:shadow-2xl transition-all duration-300"
        >
          <img
            src={country.image}
            alt={country.name}
            className="w-full h-48 object-cover"
          />
          <CardContent className="p-5">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-semibold">{country.name}</h3>
              <Badge variant="secondary">{country.region}</Badge>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              {country.description}
            </p>
            <ul className="text-sm mb-4 space-y-1">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {country.duration}
              </li>
              <li className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                {country.budget}
              </li>
              <li className="flex items-center gap-2">
                <Compass className="w-4 h-4" />
                {country.difficulty}
              </li>
              <li className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {country.season}
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              {country.highlights.map((point) => (
                <Badge key={point} variant="outline">
                  {point}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-5 pt-0">
            <Button className="w-full">Découvrir {country.name}</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}