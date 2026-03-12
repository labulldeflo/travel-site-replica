import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PolitiqueConfidentialite = () => {
  return (
    <>
      <SEO
        title="Politique de confidentialité"
        description="Politique de confidentialité du site Cap sur le Monde : collecte de données, cookies et droits des utilisateurs."
        url="/politique-confidentialite"
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Politique de confidentialité", url: "/politique-confidentialite" },
        ]}
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-sm">
              <h2 className="text-2xl font-elegant font-bold text-foreground mb-6">Collecte des données</h2>
              <p>
                Le site Cap sur le Monde ne collecte aucune donnée personnelle de manière directe, sauf si vous nous contactez
                par email (auquel cas nous conservons votre adresse email uniquement pour répondre à votre message).
              </p>

              <h2 className="text-2xl font-elegant font-bold text-foreground mt-10 mb-4">Cookies</h2>
              <p>
                Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Des cookies tiers peuvent
                être déposés par nos partenaires affiliés (Booking.com, Skyscanner, Amazon, etc.) lorsque vous cliquez sur
                un lien d'affiliation.
              </p>
              <p>
                Vous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur.
              </p>

              <h2 className="text-2xl font-elegant font-bold text-foreground mt-10 mb-4">Outils d'analyse</h2>
              <p>
                Ce site peut utiliser des outils d'analyse de trafic anonymisés pour comprendre comment les visiteurs
                utilisent le site et améliorer l'expérience utilisateur.
              </p>

              <h2 className="text-2xl font-elegant font-bold text-foreground mt-10 mb-4">Vos droits</h2>
              <p>
                Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression des données
                vous concernant. Pour exercer ces droits, contactez-nous à : contact@cap-sur-le-monde.com
              </p>

              <h2 className="text-2xl font-elegant font-bold text-foreground mt-10 mb-4">Liens externes</h2>
              <p>
                Ce site contient des liens vers des sites tiers. Nous ne sommes pas responsables du contenu ni de la
                politique de confidentialité de ces sites.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PolitiqueConfidentialite;
