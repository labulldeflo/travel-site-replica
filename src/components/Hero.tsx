import { Link } from "react-router-dom";
import { MapPin, BookOpen, Compass } from "lucide-react";
import heroImage from "@/assets/hero-mediterranean-cover.webp";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Paysage de voyage inspirant"
          width={1200}
          height={577}
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-10">
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-white/80 mb-4 font-medium">
            Guides pratiques · Budgets réels · Itinéraires testés
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-elegant font-bold mb-6 text-white drop-shadow-lg leading-tight">
            Organisez vos voyages
            <br />
            <span className="text-ocean-light">simplement.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-8">
            Des guides complets, des budgets détaillés et des conseils pratiques
            pour préparer chaque destination avec confiance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 px-8 py-4 bg-ocean text-white font-semibold rounded-lg hover:bg-ocean/90 transition-all duration-300 shadow-lg hover:shadow-elegant"
            >
              <MapPin className="w-5 h-5" />
              Explorer les destinations
            </Link>
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <BookOpen className="w-5 h-5" />
              Voir les guides pratiques
            </Link>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-4 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4" />
            <span>+40 destinations couvertes</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>+100 guides pratiques</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Budgets réels & vérifiés</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
