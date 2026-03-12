import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const MentionsLegales = () => {
  return (
    <>
      <SEO
        title="Mentions légales"
        description="Mentions légales du site Cap sur le Monde : éditeur, hébergement, propriété intellectuelle et conditions d'utilisation."
        url="/mentions-legales"
        breadcrumbs={[
          { name: "Accueil", url: "/" },
          { name: "Mentions légales", url: "/mentions-legales" },
        ]}
      />
      <div className="min-h-screen">
        <Header />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-sm">
              <h2 className="text-2xl font-elegant font-bold text-foreground mb-6">Éditeur du site</h2>
              <p>
                Le site <strong>Cap sur le Monde</strong> (www.cap-sur-le-monde.com) est un site d'information dédié au voyage,
                édité à titre personnel.
              </p>
              <p>
                <strong>Contact :</strong> contact@cap-sur-le-monde.com
              </p>

              <h2 className="text-2xl font-elegant font-bold text-foreground mt-10 mb-4">Hébergement</h2>
              <p>Ce site est hébergé par Lovable (lovable.dev).</p>

              <h2 className="text-2xl font-elegant font-bold text-foreground mt-10 mb-4">Propriété intellectuelle</h2>
              <p>
                L'ensemble des contenus (textes, images, graphiques) présents sur ce site sont protégés par le droit d'auteur.
                Toute reproduction, même partielle, est interdite sans autorisation préalable de l'éditeur.
              </p>

              <h2 className="text-2xl font-elegant font-bold text-foreground mt-10 mb-4">Liens d'affiliation</h2>
              <p>
                Certains liens présents sur ce site sont des liens d'affiliation. Cela signifie que nous percevons une commission
                lorsque vous effectuez un achat via ces liens, sans aucun surcoût pour vous. Ces commissions nous permettent de
                financer le fonctionnement du site et la création de nouveaux contenus.
              </p>
              <p>
                Nos recommandations restent indépendantes et basées sur nos propres tests et recherches.
              </p>

              <h2 className="text-2xl font-elegant font-bold text-foreground mt-10 mb-4">Responsabilité</h2>
              <p>
                Les informations fournies sur ce site le sont à titre indicatif. L'éditeur ne saurait être tenu responsable
                des éventuelles erreurs ou omissions, ni de l'utilisation qui pourrait en être faite.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MentionsLegales;
