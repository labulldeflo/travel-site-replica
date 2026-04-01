import { Link } from "react-router-dom";
import { BookOpen, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-coastal-travel.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Vue aérienne d'une côte turquoise avec plage et falaises"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4 py-24 md:py-32">
        <h1 className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)] leading-[1.15]">
          Cap sur le Monde
        </h1>

        <p className="text-base sm:text-lg font-elegant text-white/90 font-light mb-12 tracking-widest uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
          Organisez vos voyages simplement
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-ocean text-white font-medium rounded-md hover:bg-ocean/90 transition-colors duration-200 shadow-lg"
          >
            <BookOpen className="w-4 h-4" />
            Voir les guides de voyage
          </Link>
          <Link
            to="/preparer-voyage"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-white/10 backdrop-blur-sm text-white font-medium rounded-md border border-white/30 hover:bg-white/20 transition-colors duration-200"
          >
            <MapPin className="w-4 h-4" />
            Préparer mon voyage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
