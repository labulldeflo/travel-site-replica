import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import irlandeImg from '@/assets/destinations/irlande.jpg';

const Irlande = () => (
  <div className="min-h-screen">
    <Header />
    <main className="pt-24">
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${irlandeImg})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-elegant font-bold mb-6">Irlande</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">Île émeraude entre falaises et pubs chaleureux.</p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-white/20 text-white">💰 Budget: €€</Badge>
              <Badge className="bg-white/20 text-white">🕒 10-15 jours</Badge>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="practical">
            <TabsList><TabsTrigger value="practical">Infos Pratiques</TabsTrigger></TabsList>
            <TabsContent value="practical" className="mt-8">
              <Card><CardHeader><CardTitle>Informations essentielles</CardTitle></CardHeader>
              <CardContent><div className="grid md:grid-cols-2 gap-4">
                <div><h4 className="font-semibold">Visa</h4><p className="text-sm text-muted-foreground">Non requis (UE)</p></div>
                <div><h4 className="font-semibold">Monnaie</h4><p className="text-sm text-muted-foreground">Euro (€)</p></div>
                <div><h4 className="font-semibold">Budget</h4><p className="text-sm text-muted-foreground">60-120€/jour</p></div>
                <div><h4 className="font-semibold">Langue</h4><p className="text-sm text-muted-foreground">Anglais, Gaélique</p></div>
              </div></CardContent></Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);
export default Irlande;
