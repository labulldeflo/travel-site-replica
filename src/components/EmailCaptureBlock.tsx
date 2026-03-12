import { Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const EmailCaptureBlock = () => {
  return (
    <section className="py-16 bg-ocean/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-14 h-14 bg-ocean/10 rounded-xl flex items-center justify-center mx-auto mb-5">
            <Download className="w-7 h-7 text-ocean" />
          </div>
          <h2 className="text-2xl md:text-3xl font-elegant font-bold text-foreground mb-3">
            Guide gratuit : checklist complète pour préparer son voyage
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Documents, budget, équipement, assurance… Téléchargez notre checklist complète pour ne rien oublier avant de partir.
          </p>
          <Link
            to="/guide-gratuit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ocean text-white font-semibold rounded-lg hover:bg-ocean/90 transition-colors duration-200 shadow-md"
          >
            <Download className="w-5 h-5" />
            Télécharger la checklist
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailCaptureBlock;
