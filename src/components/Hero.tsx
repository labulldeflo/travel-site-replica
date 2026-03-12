import { Link } from "react-router-dom";
import { MapPin, BookOpen, Backpack } from "lucide-react";
import heroImage from "@/assets/hero-coastal-travel.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Vue aérienne d'une côte turquoise avec plage et falaises"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-elegant font-bold text-white mb-5 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] leading-[1.1]">
          Préparer vos voyages simplement
        </h1>

        <p className="text-lg sm:text-xl text-white/90 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
          Guides pratiques, budgets réels et équipements recommandés pour organiser vos voyages sereinement.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            to="/guides"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm bg-ocean text-white font-medium rounded-md hover:bg-ocean/90 transition-colors duration-200 shadow-md"
          >
            <BookOpen className="w-4 h-4" />
            Voir les guides de voyage
          </Link>
          <Link
            to="/preparer-voyage"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm bg-white/10 backdrop-blur-sm text-white font-medium rounded-md border border-white/30 hover:bg-white/20 transition-colors duration-200"
          >
            <MapPin className="w-4 h-4" />
            Préparer mon voyage
          </Link>
          <Link
            to="/equipement-voyage"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-sm bg-sunset/90 text-white font-medium rounded-md hover:bg-sunset transition-colors duration-200 shadow-md"
          >
            <Backpack className="w-4 h-4" />
            Découvrir l'équipement
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
