import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface NewsletterRequest {
  email: string;
  firstName?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email, firstName }: NewsletterRequest = await req.json();

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 255) {
      return new Response(
        JSON.stringify({ error: 'Email invalide' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Sanitize firstName
    const safeName = (firstName || '').replace(/[<>"'&]/g, '').slice(0, 100);

    console.log('Processing newsletter signup for:', email);

    // 1. Add subscriber to Systeme.io
    const systemeResponse = await fetch('https://api.systeme.io/api/contacts', {
      method: 'POST',
      headers: {
        'X-API-Key': Deno.env.get('SYSTEME_IO_API_KEY') || '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        firstName: safeName,
        tags: ['Newsletter Voyageuse'],
        listIds: [Deno.env.get('SYSTEME_IO_LIST_ID')],
      }),
    });

    let isAlreadySubscribed = false;
    
    if (!systemeResponse.ok) {
      const errorText = await systemeResponse.text();
      console.error('Systeme.io error:', errorText);
      
      // Si l'email existe déjà, on considère que c'est OK
      if (errorText.includes('Cette valeur est déjà utilisée') || errorText.includes('already')) {
        console.log('Email already subscribed to Systeme.io');
        isAlreadySubscribed = true;
      } else {
        throw new Error('Erreur lors de l\'inscription. Veuillez réessayer.');
      }
    } else {
      console.log('Successfully added to Systeme.io');
    }

    // 2. Send welcome email via Resend with all resources
    // Files are served from the deployed app's public folder
    const siteUrl = 'https://slsewefciiilrwblqoje.lovable.app';
    
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Cap sur le Monde <contact@labulledeflo.com>',
        to: [email],
        subject: '🌍 Bienvenue ! Tes ressources gratuites sont prêtes',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #0891b2;">Bienvenue ${safeName || 'Voyageuse'} ! 🎉</h1>
            <p style="font-size: 16px; line-height: 1.6;">
              Merci de rejoindre notre communauté de voyageuses passionnées !
            </p>
            
            <h2 style="color: #0891b2; margin-top: 30px;">📥 Tes ressources gratuites</h2>
            <p style="font-size: 16px; line-height: 1.6;">
              Voici tous les guides et check-lists promis. Clique sur les liens pour les télécharger :
            </p>
            
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #0891b2; margin-top: 0;">✅ Check-lists Voyage</h3>
              <ul style="list-style: none; padding: 0;">
                <li style="margin: 10px 0;">
                  <a href="${siteUrl}/checklist-voyageuse-organisee.pdf" 
                     style="color: #0891b2; text-decoration: none; font-weight: bold;">
                    📄 Check-list Ultime de la Voyageuse Organisée
                  </a>
                </li>
                <li style="margin: 10px 0;">
                  <a href="${siteUrl}/checklist-documents-voyage.pdf" 
                     style="color: #0891b2; text-decoration: none; font-weight: bold;">
                    📄 Check-list Documents de Voyage
                  </a>
                </li>
              </ul>
              
              <h3 style="color: #0891b2; margin-top: 20px;">🗺️ Mini-Guides par Continent</h3>
              <ul style="list-style: none; padding: 0;">
                <li style="margin: 10px 0;">
                  <a href="${siteUrl}/guide-asie-sud-est.pdf" 
                     style="color: #0891b2; text-decoration: none; font-weight: bold;">
                    📚 Guide Express Asie du Sud-Est
                  </a>
                </li>
                <li style="margin: 10px 0;">
                  <a href="${siteUrl}/guide-europe.pdf" 
                     style="color: #0891b2; text-decoration: none; font-weight: bold;">
                    📚 Guide Express Europe
                  </a>
                </li>
                <li style="margin: 10px 0;">
                  <a href="${siteUrl}/guide-afrique.pdf" 
                     style="color: #0891b2; text-decoration: none; font-weight: bold;">
                    📚 Guide Express Afrique
                  </a>
                </li>
                <li style="margin: 10px 0;">
                  <a href="${siteUrl}/Guide-tour-du-monde.pdf" 
                     style="color: #0891b2; text-decoration: none; font-weight: bold;">
                    📚 Guide Complet Tour du Monde
                  </a>
                </li>
              </ul>
              
              <h3 style="color: #0891b2; margin-top: 20px;">📱 Outils Pratiques</h3>
              <ul style="list-style: none; padding: 0;">
                <li style="margin: 10px 0;">
                  <a href="${siteUrl}/top-applis-voyage.pdf" 
                     style="color: #0891b2; text-decoration: none; font-weight: bold;">
                    📱 Top 15 des Applis Voyage Indispensables
                  </a>
                </li>
              </ul>
            </div>
            
            <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">
              Tu recevras chaque semaine :
            </p>
            <ul style="font-size: 16px; line-height: 1.8;">
              <li>Des idées d'escapades inspirantes</li>
              <li>Des conseils pratiques pour voyager sereinement</li>
              <li>Des bons plans exclusifs</li>
              <li>Des nouveaux guides gratuits</li>
            </ul>
            
            <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">
              Retrouve-nous aussi sur :
            </p>
            <div style="margin: 20px 0;">
              <a href="https://pinterest.com" style="margin-right: 15px; color: #0891b2; text-decoration: none;">📌 Pinterest</a>
              <a href="https://instagram.com" style="margin-right: 15px; color: #0891b2; text-decoration: none;">📷 Instagram</a>
              <a href="https://facebook.com" style="color: #0891b2; text-decoration: none;">👥 Facebook</a>
            </div>
            
            <p style="font-size: 14px; color: #666; margin-top: 30px; border-top: 1px solid #e5e7eb; padding-top: 20px;">
              À très vite pour de nouvelles aventures !<br>
              L'équipe Cap sur le Monde ✈️
            </p>
          </div>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error('Resend error:', errorText);
      // Don't throw here - subscriber is already added to Systeme.io
      console.warn('Email not sent but subscriber added successfully');
    } else {
      console.log('Welcome email sent successfully');
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: isAlreadySubscribed 
          ? 'Tu es déjà inscrit(e) à notre newsletter !' 
          : 'Inscription réussie ! Vérifie ta boîte mail.' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error: any) {
    console.error('Error in newsletter-signup function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
