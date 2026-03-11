import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";
import { OrganiserVoyageBlock } from "@/components/affiliate";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock, Compass, Train, DollarSign, CheckCircle, XCircle } from "lucide-react";
import japonImage from "@/assets/destinations/japon.jpg";

const JRPassJapon = () => {
  const faqs = [
    { question: "Le JR Pass couvre-t-il le Shinkansen Nozomi ?", answer: "Non, le JR Pass standard ne couvre pas le Nozomi (le plus rapide). Prenez le Hikari, presque aussi rapide (Tokyo-Kyoto en 2h40 vs 2h15). Depuis 2024, un pass spécial Nozomi existe en supplément." },
    { question: "Où acheter le JR Pass ?", answer: "En ligne sur le site officiel japanrailpass.net ou via des agences agréées. Depuis 2023, il peut aussi être acheté au Japon dans les grandes gares, mais c'est plus cher." },
    { question: "Peut-on réserver des sièges avec le JR Pass ?", answer: "Oui, les réservations de sièges sont gratuites et illimitées avec le JR Pass. Vous pouvez aussi utiliser les voitures non-réservées (libre-service)." },
    { question: "Le JR Pass couvre-t-il le métro ?", answer: "Non, le JR Pass ne couvre pas le métro (Tokyo Metro, Toei). Il couvre les lignes JR (dont la Yamanote Line à Tokyo). Pour le métro, utilisez une carte Suica/Pasmo." },
    { question: "Le JR Pass est-il rentable pour 7 jours à Tokyo uniquement ?", answer: "Non. Si vous restez uniquement à Tokyo, la carte Suica + un pass Tokyo Metro 72h (1 500¥) sont bien plus économiques. Le JR Pass n'est rentable que pour les trajets intercités." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="JR Pass Japon : Faut-il l'Acheter ? Guide Complet"
        description="Guide complet du Japan Rail Pass. Prix, rentabilité, types de pass, où acheter, comment l'utiliser : tout savoir sur le JR Pass pour votre voyage au Japon."
        image={japonImage}
        ogType="article"
        hideH1
        articleMeta={{ author: "Cap sur le Monde", datePublished: "2025-06-23" }}
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "JR Pass Japon", url: "/blog/jr-pass-japon" },
        ]}
      />
      <Header />

      <main className="flex-grow pt-24">
        <header className="relative h-[60vh] md:h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${japonImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="relative container mx-auto px-4 h-full flex items-end pb-16 z-10">
            <div className="text-white max-w-4xl">
              <span className="inline-block bg-ocean/80 text-white text-sm font-medium px-3 py-1 rounded mb-4">Guide Pratique</span>
              <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-4 drop-shadow-lg">
                JR Pass Japon : Faut-il l'Acheter ?
              </h1>
              <p className="text-xl text-white/90">Guide complet pour décider si le Japan Rail Pass vaut le coup pour votre voyage</p>
              <div className="flex items-center gap-6 mt-6 pt-4 border-t border-white/30 text-sm text-white/90">
                <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> 23 juin 2025</span>
                <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> 11 min de lecture</span>
              </div>
            </div>
          </div>
        </header>

        <article className="container mx-auto px-4 py-12 max-w-4xl prose prose-lg">
          <p className="text-lg leading-relaxed text-muted-foreground first-letter:text-5xl first-letter:font-bold first-letter:text-ocean first-letter:mr-2 first-letter:float-left">
            Le <strong>Japan Rail Pass (JR Pass)</strong> est le sésame des voyageurs au Japon. Ce pass illimité sur le réseau JR (incluant le Shinkansen) peut représenter d'<strong>énormes économies</strong> — ou un gaspillage total, selon votre itinéraire. Ce guide vous aide à déterminer si le JR Pass est <strong>rentable pour VOTRE voyage</strong>, avec des calculs concrets et des alternatives.
          </p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Qu'est-ce que le JR Pass ?
          </h2>
          <p>Le JR Pass est un <strong>abonnement illimité</strong> sur tout le réseau Japan Railways :</p>
          <ul>
            <li><strong>Shinkansen</strong> (sauf Nozomi et Mizuho)</li>
            <li><strong>Trains JR locaux et express</strong> partout au Japon</li>
            <li><strong>Bus JR</strong> (certaines lignes locales)</li>
            <li><strong>Ferry JR</strong> (Miyajima notamment)</li>
            <li><strong>Monorail de Tokyo</strong> (vers l'aéroport Haneda)</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <DollarSign className="h-7 w-7 text-ocean" /> Prix du JR Pass (2025)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-bold">Durée</th>
                  <th className="py-3 px-4 font-bold">Standard</th>
                  <th className="py-3 px-4 font-bold">Green Car (1ère classe)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">7 jours</td><td className="py-2 px-4">50 000¥ (~320€)</td><td className="py-2 px-4">70 000¥ (~450€)</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">14 jours</td><td className="py-2 px-4">80 000¥ (~515€)</td><td className="py-2 px-4">110 000¥ (~710€)</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">21 jours</td><td className="py-2 px-4">100 000¥ (~645€)</td><td className="py-2 px-4">140 000¥ (~900€)</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <CheckCircle className="h-7 w-7 text-ocean" /> Quand le JR Pass EST Rentable
          </h2>

          <h3 className="text-xl font-bold mt-6">Scénario 1 : Tokyo-Kyoto aller-retour (7 jours)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-bold">Trajet</th>
                  <th className="py-3 px-4 font-bold">Sans JR Pass</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Tokyo → Kyoto (Hikari)</td><td className="py-2 px-4">14 170¥</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Kyoto → Nara (JR)</td><td className="py-2 px-4">720¥</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Nara → Osaka (JR)</td><td className="py-2 px-4">810¥</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Osaka → Tokyo (Hikari)</td><td className="py-2 px-4">14 520¥</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Narita Express A/R</td><td className="py-2 px-4">6 140¥</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Yamanote + JR locaux</td><td className="py-2 px-4">~2 000¥</td></tr>
                <tr className="border-b border-border font-bold"><td className="py-2 px-4">TOTAL</td><td className="py-2 px-4">38 360¥ (~247€)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-2"><strong>Verdict</strong> : JR Pass 7 jours (50 000¥) n'est PAS rentable pour ce seul parcours. Mais ajoutez une excursion à Hiroshima (+19 000¥) et il le devient largement.</p>

          <h3 className="text-xl font-bold mt-6">Scénario 2 : Tokyo-Kyoto-Hiroshima (7 jours) ✅</h3>
          <p>Total sans JR Pass : <strong>~57 000¥ (366€)</strong> → JR Pass 7 jours : <strong>50 000¥ (320€)</strong>. <strong>Économie : 7 000¥ (45€)</strong> + trajets locaux JR illimités en bonus.</p>

          <h3 className="text-xl font-bold mt-6">Scénario 3 : Grand circuit 14 jours ✅✅</h3>
          <p>Tokyo → Hakone → Kyoto → Nara → Osaka → Hiroshima → Fukuoka → retour Tokyo. Total sans JR Pass : <strong>~95 000¥ (610€)</strong> → JR Pass 14 jours : <strong>80 000¥ (515€)</strong>. <strong>Économie : 95€+</strong>.</p>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <XCircle className="h-7 w-7 text-ocean" /> Quand le JR Pass N'EST PAS Rentable
          </h2>
          <ul>
            <li><strong>Séjour uniquement à Tokyo</strong> : utilisez Suica + pass Metro</li>
            <li><strong>Séjour Tokyo + une seule ville</strong> (ex: Kyoto) sans excursion supplémentaire</li>
            <li><strong>Voyage en bus longue distance</strong> : si vous préférez les bus de nuit économiques</li>
            <li><strong>Séjour à Hokkaido ou Okinawa uniquement</strong> : les pass régionaux sont plus adaptés</li>
          </ul>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Train className="h-7 w-7 text-ocean" /> Pass Régionaux – Les Alternatives
          </h2>
          <p>Si le JR Pass national n'est pas rentable, des <strong>pass régionaux</strong> peuvent l'être :</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-4 font-bold">Pass</th>
                  <th className="py-3 px-4 font-bold">Prix</th>
                  <th className="py-3 px-4 font-bold">Idéal pour</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50"><td className="py-2 px-4">JR West Kansai (4j)</td><td className="py-2 px-4">~10 000¥</td><td className="py-2 px-4">Kyoto-Osaka-Nara-Kobe</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">JR Hokkaido (5j)</td><td className="py-2 px-4">~20 000¥</td><td className="py-2 px-4">Sapporo et Hokkaido</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">JR Kyushu (5j)</td><td className="py-2 px-4">~18 000¥</td><td className="py-2 px-4">Fukuoka-Nagasaki-Beppu</td></tr>
                <tr className="border-b border-border/50"><td className="py-2 px-4">Sanyo-San'in (7j)</td><td className="py-2 px-4">~23 000¥</td><td className="py-2 px-4">Osaka-Hiroshima + côte</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-elegant font-bold text-primary mt-10 flex items-center gap-3">
            <Compass className="h-7 w-7 text-ocean" /> Comment Utiliser le JR Pass
          </h2>
          <ol>
            <li><strong>Achat en ligne</strong> : sur japanrailpass.net ou agences agréées</li>
            <li><strong>Échange au Japon</strong> : présentez votre voucher dans un <strong>JR Office</strong> (grandes gares, aéroports) avec votre passeport</li>
            <li><strong>Activation</strong> : choisissez la date de début (peut être différente du jour d'échange)</li>
            <li><strong>Utilisation</strong> : passez par les <strong>guichets avec personnel</strong> (pas les portiques automatiques)</li>
            <li><strong>Réservation</strong> : gratuite aux guichets ou bornes « Midori no Madoguchi »</li>
          </ol>

          <div className="mt-10 p-6 bg-accent/30 rounded-lg border-l-4 border-ocean">
            <p className="text-lg text-foreground italic leading-relaxed">
              Le JR Pass est un <strong>investissement dans la liberté</strong>. La tranquillité d'esprit de pouvoir monter dans n'importe quel train sans penser au prix, de changer d'avis sur une excursion improvisée, vaut parfois plus que les économies chiffrées.
            </p>
          </div>

          <FAQSection faqs={faqs} className="mt-10" />
          <OrganiserVoyageBlock destination="Japon" showVols showHotel showActivites showEsim />

          <div className="mt-10 p-6 bg-muted/30 rounded-lg border border-border">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <Compass className="h-5 w-5 text-ocean" /> À lire aussi
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { label: "Comment se déplacer au Japon", url: "/blog/comment-se-deplacer-japon" },
                { label: "Guide complet du Japon", url: "/blog/guide-complet-japon" },
                { label: "Itinéraire Japon 7 jours", url: "/blog/itineraire-japon-7-jours" },
                { label: "Budget transport Japon", url: "/blog/budget-transport-japon" },
              ].map((link, idx) => (
                <Link key={idx} to={link.url} onClick={() => window.scrollTo(0, 0)} className="flex items-center gap-2 p-2 rounded-md hover:bg-background transition-all text-muted-foreground hover:text-ocean text-sm">
                  <span className="text-ocean">→</span><span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 p-6 bg-ocean/5 rounded-lg border border-ocean/20">
            <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-ocean" /> 🗺️ Destinations mentionnées
            </h3>
            <div className="flex flex-wrap gap-2">
              {[{ label: "🇯🇵 Japon", url: "/destinations/japon" }].map((dest, idx) => (
                <Link key={idx} to={dest.url} onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center gap-1 px-3 py-1.5 bg-background border border-border rounded-full text-sm hover:border-ocean hover:text-ocean transition-colors">
                  {dest.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1 bg-ocean hover:bg-ocean/90">
              <Link to="/destinations/japon" onClick={() => window.scrollTo(0, 0)}>Découvrir le Japon</Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link to="/blog" onClick={() => window.scrollTo(0, 0)}>Retour au blog</Link>
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default JRPassJapon;
