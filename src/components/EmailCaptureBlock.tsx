import { Download, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  'Documents et formalités',
  'Budget détaillé par poste',
  'Équipement indispensable',
  'Assurance et santé',
];

const EmailCaptureBlock = () => {
  return (
    <section className="py-16 bg-ocean/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-background rounded-2xl border border-ocean/20 p-8 md:p-10 shadow-soft">
            <div className="text-center mb-6">
              <div className="w-14 h-14 bg-ocean/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-7 h-7 text-ocean" />
              </div>
              <h2 className="text-2xl md:text-3xl font-elegant font-bold text-foreground mb-2">
                Checklist gratuite : ne rien oublier avant de partir
              </h2>
              <p className="text-muted-foreground text-sm max-w-md mx-auto">
                Téléchargez notre checklist complète utilisée par +10 000 voyageurs pour préparer leur voyage sereinement.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-6 max-w-sm mx-auto">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-ocean shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/guide-gratuit"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-ocean text-white font-semibold rounded-lg hover:bg-ocean/90 transition-colors duration-200 shadow-md text-base"
              >
                <Download className="w-5 h-5" />
                Télécharger la checklist gratuite
              </Link>
              <p className="text-xs text-muted-foreground mt-3">
                Accès immédiat • Format PDF • 100% gratuit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailCaptureBlock;
