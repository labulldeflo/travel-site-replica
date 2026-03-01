import { useTranslation } from "react-i18next";
import heroImage from "@/assets/hero-mediterranean-cover.webp";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* 🌅 Image de fond optimisée */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Crique méditerranéenne paradisiaque"
          width={1200}
          height={577}
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* ✨ Contenu */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 drop-shadow-lg text-sky-500 px-4 md:px-0">
            {t("hero.title")}
          </h1>

          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-0.5 bg-gradient-ocean"></div>
            <div className="w-12 h-0.5 bg-gradient-ocean"></div>
          </div>

          <p className="text-lg md:text-xl text-foreground uppercase tracking-widest drop-shadow-md mx-[10px] my-[8px]">
            {t("hero.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
