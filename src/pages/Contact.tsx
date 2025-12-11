import React, { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Intégrer avec Systeme.io ou service d'envoi d'email
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contact - Cap sur le Monde"
        description="Contactez-nous pour toute question sur vos projets de voyage. Nous sommes là pour vous aider à planifier votre prochaine aventure."
        url="/contact"
      />
      <Header />

      <main className="flex-grow pt-[var(--header-height, 6rem)]">
        {/* Hero Section */}
        <section className="bg-gradient-ocean text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-elegant font-extrabold mb-6">
              {t('contact.title', 'Contactez-nous')}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {t('contact.subtitle', 'Une question ? Un projet de voyage ? N\'hésitez pas à nous écrire !')}
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-elegant font-bold mb-6 text-foreground">
                    {t('contact.formTitle', 'Envoyez-nous un message')}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        {t('contact.name', 'Nom')}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('contact.namePlaceholder', 'Votre nom')}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        {t('contact.email', 'Email')}
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t('contact.emailPlaceholder', 'votre@email.com')}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        {t('contact.subject', 'Sujet')}
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder={t('contact.subjectPlaceholder', 'De quoi souhaitez-vous parler ?')}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        {t('contact.message', 'Message')}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('contact.messagePlaceholder', 'Votre message...')}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-ocean hover:bg-ocean/90 text-white">
                      <Send className="w-4 h-4 mr-2" />
                      {t('contact.send', 'Envoyer')}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-elegant font-bold mb-6 text-foreground">
                    {t('contact.infoTitle', 'Informations de contact')}
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    {t('contact.infoText', 'Nous répondons généralement sous 24-48h. N\'hésitez pas à nous suivre sur les réseaux sociaux pour plus de contenu voyage !')}
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-ocean/10 rounded-full p-3">
                        <Mail className="w-6 h-6 text-ocean" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t('contact.email', 'Email')}</h3>
                        <a href="mailto:contact@capsurlmonde.com" className="text-ocean hover:underline">
                          contact@capsurlemonde.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-sunset/10 rounded-full p-3">
                        <MapPin className="w-6 h-6 text-sunset" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t('contact.location', 'Localisation')}</h3>
                        <p className="text-muted-foreground">
                          {t('contact.locationText', 'Quelque part entre Paris et le bout du monde')}
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="bg-ocean/10 rounded-full p-3">
                        <Phone className="w-6 h-6 text-ocean" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{t('contact.social', 'Réseaux sociaux')}</h3>
                        <div className="space-y-2">
                          <a href="https://www.instagram.com/capsurlemonde" target="_blank" rel="noopener noreferrer" className="block text-ocean hover:underline">
                            Instagram
                          </a>
                          <a href="https://www.pinterest.com/capsurlemonde" target="_blank" rel="noopener noreferrer" className="block text-ocean hover:underline">
                            Pinterest
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-elegant font-bold mb-6 text-foreground">
              {t('contact.newsletterTitle', 'Rejoignez la communauté')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t('contact.newsletterText', 'Recevez nos meilleurs conseils voyage, guides gratuits et inspiration directement dans votre boîte mail.')}
            </p>
            <Button asChild size="lg" className="bg-gradient-ocean text-white hover:opacity-90">
              <a href="/ressources-gratuites">
                {t('contact.newsletterBtn', 'Rejoindre la newsletter')}
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
