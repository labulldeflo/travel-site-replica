import { Link } from "react-router-dom";
import { MapPin, BookOpen, Compass } from "lucide-react";
import heroImage from "@/assets/hero-mediterranean-cover.webp";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-black/45"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto px-4 py-16">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-elegant font-bold text-white mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] leading-[1.1]">
            Cap sur le Monde
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-light tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            Organisez vos voyages simplement.
          </p>
        </div>

        {/* CTA Buttons - bottom of hero */}
        <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-row gap-4 justify-center items-center">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm bg-ocean text-white font-medium rounded-md hover:bg-ocean/90 transition-all duration-300 shadow-md"
            >
              <MapPin className="w-4 h-4" />
              Explorer les destinations
            </Link>
            <Link
              to="/guides"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm bg-white/10 backdrop-blur-sm text-white font-medium rounded-md border border-white/30 hover:bg-white/20 transition-all duration-300"
            >
              <BookOpen className="w-4 h-4" />
              Voir les guides pratiques
            </Link>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-muted py-6">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-10 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-ocean" />
            <span>+40 destinations couvertes</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-ocean" />
            <span>+100 guides pratiques</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-ocean" />
            <span>Budgets réels & vérifiés</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
