import React, { useEffect, Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import LoadingPage from "@/components/LoadingPage"; // Créer un composant simple de chargement

// --- 1. Définition des Composants Lazy-Loaded (Lazy Loading) ---

// PAGES STATIQUES & GÉNÉRALES
const Index = lazy(() => import("./pages/Index"));
const Destinations = lazy(() => import("./pages/Destinations"));
const Guides = lazy(() => import("./pages/Guides"));
const Tests = lazy(() => import("./pages/Tests"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const GuideGratuit = lazy(() => import("./pages/GuideGratuit"));
const RessourcesGratuites = lazy(() => import("./pages/RessourcesGratuites"));
const Blog = lazy(() => import("./pages/Blog"));
const Premium = lazy(() => import("./pages/Premium"));

// BLOG ARTICLES
const OrganiserTourMondeBudget = lazy(() => import("./pages/blog/OrganiserTourMondeBudget"));
const DestinationsVoyagerSeule50Ans = lazy(() => import("./pages/blog/DestinationsVoyagerSeule50Ans"));

const NotFound = lazy(() => import("./pages/NotFound"));

// BONS PLANS
const BonsPlansVols = lazy(() => import("./pages/BonsPlansVols"));
const BonsPlansHebergement = lazy(() => import("./pages/BonsPlansHebergement"));
const BonsPlansCartesSIM = lazy(() => import("./pages/BonsPlansCartesSIM"));

// REGIONS (Continent/Sous-continents)
const Europe = lazy(() => import("./pages/Europe"));
const Afrique = lazy(() => import("./pages/Afrique"));
const Amerique = lazy(() => import("./pages/Amerique"));

// DESTINATIONS (Pays) - Regroupement suggéré pour la clarté
const DestinationsList = {
  // Asie du Sud-Est
  Vietnam: lazy(() => import("./pages/Vietnam")),
  Cambodge: lazy(() => import("./pages/Cambodge")),
  Thailande: lazy(() => import("./pages/Thailande")),
  Laos: lazy(() => import("./pages/Laos")),
  Birmanie: lazy(() => import("./pages/Birmanie")),
  Malaisie: lazy(() => import("./pages/Malaisie")),
  Singapour: lazy(() => import("./pages/Singapour")),
  Indonesie: lazy(() => import("./pages/Indonesie")),
  Philippines: lazy(() => import("./pages/Philippines")),
  Brunei: lazy(() => import("./pages/Brunei")),
  TimorOriental: lazy(() => import("./pages/TimorOriental")),

  // Europe
  France: lazy(() => import("./pages/France")),
  Italie: lazy(() => import("./pages/Italie")),
  Espagne: lazy(() => import("./pages/Espagne")),
  Grece: lazy(() => import("./pages/Grece")),
  Portugal: lazy(() => import("./pages/Portugal")),
  Croatie: lazy(() => import("./pages/Croatie")),
  Suisse: lazy(() => import("./pages/Suisse")),
  Autriche: lazy(() => import("./pages/Autriche")),
  Islande: lazy(() => import("./pages/Islande")),
  Irlande: lazy(() => import("./pages/Irlande")),
  Norvege: lazy(() => import("./pages/Norvege")),
  Hongrie: lazy(() => import("./pages/Hongrie")),

  // Afrique
  Maroc: lazy(() => import("./pages/Maroc")),
  Egypte: lazy(() => import("./pages/Egypte")),
  Kenya: lazy(() => import("./pages/Kenya")),
  Tanzanie: lazy(() => import("./pages/Tanzanie")),
  AfriqueDuSud: lazy(() => import("./pages/AfriqueDuSud")),
  Madagascar: lazy(() => import("./pages/Madagascar")),

  // Amérique
  USA: lazy(() => import("./pages/USA")),
  Canada: lazy(() => import("./pages/Canada")),
  Mexique: lazy(() => import("./pages/Mexique")),
  Perou: lazy(() => import("./pages/Perou")),
  Bresil: lazy(() => import("./pages/Bresil")),
  Argentine: lazy(() => import("./pages/Argentine")),
  Chili: lazy(() => import("./pages/Chili")),
  Colombie: lazy(() => import("./pages/Colombie")),
};

// GUIDES THÉMATIQUES PAR PAYS
const CountryGuides = {
  // Vietnam
  GuideCompletVietnam: lazy(() => import("./pages/guides/GuideCompletVietnam")),
  BudgetVietnam: lazy(() => import("./pages/guides/BudgetVietnam")),
  StreetFoodVietnam: lazy(() => import("./pages/guides/StreetFoodVietnam")),
  TransportVietnam: lazy(() => import("./pages/guides/TransportVietnam")),
  VietnamFamille: lazy(() => import("./pages/guides/VietnamFamille")),
  PhotoVietnam: lazy(() => import("./pages/guides/PhotoVietnam")),
  // Thaïlande
  GuideCompletThailande: lazy(() => import("./pages/guides/GuideCompletThailande")),
  BudgetThailande: lazy(() => import("./pages/guides/BudgetThailande")),
  StreetFoodThailande: lazy(() => import("./pages/guides/StreetFoodThailande")),
  TransportThailande: lazy(() => import("./pages/guides/TransportThailande")),
  ThailandeFamille: lazy(() => import("./pages/guides/ThailandeFamille")),
  PhotoThailande: lazy(() => import("./pages/guides/PhotoThailande")),
};

// ARTICLES DE BLOG
const Articles = {
  // Articles par Pays
  ArticleVietnam: lazy(() => import("./pages/ArticleVietnam")),
  ArticleThailande: lazy(() => import("./pages/ArticleThailande")),
  ArticleCambodge: lazy(() => import("./pages/ArticleCambodge")),
  ArticleLaos: lazy(() => import("./pages/ArticleLaos")),
  ArticleMalaisie: lazy(() => import("./pages/ArticleMalaisie")),

  // Articles par Ville/Thématique (Vietnam)
  ArticleHanoi: lazy(() => import("./pages/ArticleHanoi")),
  ArticleHaLong: lazy(() => import("./pages/ArticleHaLong")),
  ArticleHoiAn: lazy(() => import("./pages/ArticleHoiAn")),
  ArticleHoChiMinh: lazy(() => import("./pages/ArticleHoChiMinh")),

  // Articles Asie - Laos
  ArticleLuangPrabang: lazy(() => import("./pages/ArticleLuangPrabang")),
  ArticleVangVieng: lazy(() => import("./pages/ArticleVangVieng")),
  ArticleVientiane: lazy(() => import("./pages/ArticleVientiane")),

  // Articles Asie - Cambodge
  ArticleSiemReap: lazy(() => import("./pages/ArticleSiemReap")),
  ArticlePhnomPenh: lazy(() => import("./pages/ArticlePhnomPenh")),
  ArticleSihanoukville: lazy(() => import("./pages/ArticleSihanoukville")),

  // Articles Europe
  ArticleParis: lazy(() => import("./pages/ArticleParis")),
  ArticleProvence: lazy(() => import("./pages/ArticleProvence")),
  ArticleAlpes: lazy(() => import("./pages/ArticleAlpes")),
  ArticleRome: lazy(() => import("./pages/ArticleRome")),
  ArticleToscane: lazy(() => import("./pages/ArticleToscane")),
  ArticleVenise: lazy(() => import("./pages/ArticleVenise")),
  ArticleBarcelone: lazy(() => import("./pages/ArticleBarcelone")),
  ArticleMadrid: lazy(() => import("./pages/ArticleMadrid")),
  ArticleAndalousie: lazy(() => import("./pages/ArticleAndalousie")),
  ArticleDubrovnik: lazy(() => import("./pages/ArticleDubrovnik")),
  ArticleSplit: lazy(() => import("./pages/ArticleSplit")),
  ArticlePlitvice: lazy(() => import("./pages/ArticlePlitvice")),
  
  // Articles Europe - Grèce
  ArticleAthenes: lazy(() => import("./pages/ArticleAthenes")),
  ArticleSantorin: lazy(() => import("./pages/ArticleSantorin")),
  ArticleMykonos: lazy(() => import("./pages/ArticleMykonos")),
  ArticleCrete: lazy(() => import("./pages/ArticleCrete")),
  
  // Articles Europe - Portugal
  ArticleLisbonne: lazy(() => import("./pages/ArticleLisbonne")),
  ArticlePorto: lazy(() => import("./pages/ArticlePorto")),
  ArticleAlgarve: lazy(() => import("./pages/ArticleAlgarve")),

  // Articles Asie - Thaïlande
  ArticleBangkok: lazy(() => import("./pages/ArticleBangkok")),
  ArticleChiangMai: lazy(() => import("./pages/ArticleChiangMai")),
  ArticleIlesSudThailande: lazy(() => import("./pages/ArticleIlesSudThailande")),

  // Articles Asie - Indonésie
  ArticleBali: lazy(() => import("./pages/ArticleBali")),
  ArticleJava: lazy(() => import("./pages/ArticleJava")),

  // Articles Asie - Malaisie
  ArticleKualaLumpur: lazy(() => import("./pages/ArticleKualaLumpur")),
  ArticlePenang: lazy(() => import("./pages/ArticlePenang")),
  ArticleBorneo: lazy(() => import("./pages/ArticleBorneo")),

  // Articles Afrique - Maroc
  ArticleMarrakech: lazy(() => import("./pages/ArticleMarrakech")),
  ArticleFes: lazy(() => import("./pages/ArticleFes")),
  ArticleSahara: lazy(() => import("./pages/ArticleSahara")),
  ArticleChefchaouen: lazy(() => import("./pages/ArticleChefchaouen")),

  // Articles Afrique - Égypte
  ArticleCaire: lazy(() => import("./pages/ArticleCaire")),
  ArticleGizeh: lazy(() => import("./pages/ArticleGizeh")),
  ArticleLuxor: lazy(() => import("./pages/ArticleLuxor")),
  ArticleAlexandrie: lazy(() => import("./pages/ArticleAlexandrie")),

  // Articles Amérique - Canada
  ArticleBanff: lazy(() => import("./pages/ArticleBanff")),
  ArticleVancouver: lazy(() => import("./pages/ArticleVancouver")),
  ArticleMontreal: lazy(() => import("./pages/ArticleMontreal")),
  ArticleQuebec: lazy(() => import("./pages/ArticleQuebec")),
  ArticleToronto: lazy(() => import("./pages/ArticleToronto")),

  // Articles Amérique - USA
  ArticleNewYork: lazy(() => import("./pages/ArticleNewYork")),
  ArticleGrandCanyon: lazy(() => import("./pages/ArticleGrandCanyon")),
  ArticleLasVegas: lazy(() => import("./pages/ArticleLasVegas")),
  ArticleLosAngeles: lazy(() => import("./pages/ArticleLosAngeles")),
  ArticleSanFrancisco: lazy(() => import("./pages/ArticleSanFrancisco")),

  // Articles Amérique - Pérou
  ArticleLima: lazy(() => import("./pages/ArticleLima")),
  ArticleMachuPicchu: lazy(() => import("./pages/ArticleMachuPicchu")),
  ArticleArequipa: lazy(() => import("./pages/ArticleArequipa")),
  ArticleTiticaca: lazy(() => import("./pages/ArticleTiticaca")),

  // Articles Amérique - Argentine
  ArticleBuenosAires: lazy(() => import("./pages/ArticleBuenosAires")),
  ArticleMendoza: lazy(() => import("./pages/ArticleMendoza")),
  ArticleIguazu: lazy(() => import("./pages/ArticleIguazu")),
  ArticleSalta: lazy(() => import("./pages/ArticleSalta")),
  ArticlePeninsulaValdes: lazy(() => import("./pages/ArticlePeninsulaValdes")),

  // Articles Europe - Autriche
  ArticleVienne: lazy(() => import("./pages/ArticleVienne")),
  ArticleSalzbourg: lazy(() => import("./pages/ArticleSalzbourg")),
  ArticleTyrol: lazy(() => import("./pages/ArticleTyrol")),

  // Articles Europe - Norvège
  ArticleOslo: lazy(() => import("./pages/ArticleOslo")),
  ArticleFjords: lazy(() => import("./pages/ArticleFjords")),
  ArticleBergen: lazy(() => import("./pages/ArticleBergen")),

  // Articles Europe - France (supplémentaires)
  ArticleLyon: lazy(() => import("./pages/ArticleLyon")),
  ArticleCoteDazur: lazy(() => import("./pages/ArticleCoteDazur")),
  ArticleAlsace: lazy(() => import("./pages/ArticleAlsace")),

  // Articles Europe - Irlande
  ArticleDublin: lazy(() => import("./pages/ArticleDublin")),
  ArticleGalway: lazy(() => import("./pages/ArticleGalway")),

  // Articles Europe - Hongrie
  ArticleBudapest: lazy(() => import("./pages/ArticleBudapest")),

  // Articles Europe - Suisse
  ArticleZurich: lazy(() => import("./pages/ArticleZurich")),
  ArticleGeneve: lazy(() => import("./pages/ArticleGeneve")),

  // Articles Afrique - Afrique du Sud
  ArticleCapeTown: lazy(() => import("./pages/ArticleCapeTown")),

  // Articles Amérique - Brésil
  ArticleRio: lazy(() => import("./pages/ArticleRio")),
  ArticleSaoPaulo: lazy(() => import("./pages/ArticleSaoPaulo")),
  ArticleAmazonie: lazy(() => import("./pages/ArticleAmazonie")),
  ArticleSalvador: lazy(() => import("./pages/ArticleSalvador")),

  // Articles Amérique - Mexique
  ArticleMexico: lazy(() => import("./pages/ArticleMexico")),
  ArticleCancun: lazy(() => import("./pages/ArticleCancun")),
  ArticleOaxaca: lazy(() => import("./pages/ArticleOaxaca")),

  // Articles Amérique - Chili
  ArticleSantiago: lazy(() => import("./pages/ArticleSantiago")),
  ArticleAtacama: lazy(() => import("./pages/ArticleAtacama")),
  ArticleTorresDelPaine: lazy(() => import("./pages/ArticleTorresDelPaine")),

  // Articles Amérique - Colombie
  ArticleBogota: lazy(() => import("./pages/ArticleBogota")),
  ArticleCartagene: lazy(() => import("./pages/ArticleCartagene")),
  ArticleMedellin: lazy(() => import("./pages/ArticleMedellin")),

  // Articles Asie - Birmanie
  ArticleYangon: lazy(() => import("./pages/ArticleYangon")),
  ArticleBagan: lazy(() => import("./pages/ArticleBagan")),
  ArticleMandalay: lazy(() => import("./pages/ArticleMandalay")),

  // Articles Asie - Philippines
  ArticleManille: lazy(() => import("./pages/ArticleManille")),
  ArticlePalawan: lazy(() => import("./pages/ArticlePalawan")),
  ArticleBoracay: lazy(() => import("./pages/ArticleBoracay")),

  // Articles Asie - Singapour
  ArticleSingapour: lazy(() => import("./pages/ArticleSingapour")),

  // Articles Asie - Brunei
  ArticleBrunei: lazy(() => import("./pages/ArticleBrunei")),

  // Articles Asie - Timor Oriental
  ArticleTimorOriental: lazy(() => import("./pages/ArticleTimorOriental")),

  // Articles Afrique - Kenya
  ArticleNairobi: lazy(() => import("./pages/ArticleNairobi")),
  ArticleMasaiMara: lazy(() => import("./pages/ArticleMasaiMara")),

  // Articles Afrique - Madagascar
  ArticleAntananarivo: lazy(() => import("./pages/ArticleAntananarivo")),
  ArticleAlleeBaobabs: lazy(() => import("./pages/ArticleAlleeBaobabs")),

  // Articles Afrique - Tanzanie
  ArticleZanzibar: lazy(() => import("./pages/ArticleZanzibar")),
  ArticleKilimandjaro: lazy(() => import("./pages/ArticleKilimandjaro")),

  // Articles Thématiques
  ArticleIslande: lazy(() => import("./pages/ArticleIslande")),
  ArticleIndonesie: lazy(() => import("./pages/ArticleIndonesie")),
  ArticlePatagonie: lazy(() => import("./pages/ArticlePatagonie")),
};

const queryClient = new QueryClient();

// --- 2. Composant de Configuration des Routes (pour la lisibilité) ---
const AppRoutes = () => {
  return (
    <Routes>
      {/* PAGES GÉNÉRALES */}
      {/* NOTE: Index, Destinations, Guides, Tests, About, GuideGratuit doivent aussi être déclarés en Lazy Loading 
                       en haut du fichier pour la cohérence! */}
      <Route path="/" element={<Index />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="/tests" element={<Tests />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/guide-gratuit" element={<GuideGratuit />} />
      <Route path="/ressources-gratuites" element={<RessourcesGratuites />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/organiser-tour-monde-budget-limite" element={<OrganiserTourMondeBudget />} />
      <Route path="/blog/destinations-voyager-seule-50-ans" element={<DestinationsVoyagerSeule50Ans />} />
      <Route path="/premium" element={<Premium />} />

      {/* BONS PLANS */}
      <Route path="/bons-plans/vols" element={<BonsPlansVols />} />
      <Route path="/bons-plans/hebergement" element={<BonsPlansHebergement />} />
      <Route path="/bons-plans/cartes-sim" element={<BonsPlansCartesSIM />} />

      {/* REGIONS */}
      <Route path="/europe" element={<Europe />} />
      <Route path="/afrique" element={<Afrique />} />
      <Route path="/amerique" element={<Amerique />} />

      {/* DESTINATIONS DÉTAILLÉES (Pays) */}
      <Route path="/destinations/vietnam" element={<DestinationsList.Vietnam />} />
      <Route path="/destinations/cambodge" element={<DestinationsList.Cambodge />} />
      <Route path="/destinations/thailande" element={<DestinationsList.Thailande />} />
      <Route path="/destinations/laos" element={<DestinationsList.Laos />} />
      <Route path="/destinations/birmanie" element={<DestinationsList.Birmanie />} />
      <Route path="/destinations/malaisie" element={<DestinationsList.Malaisie />} />
      <Route path="/destinations/singapour" element={<DestinationsList.Singapour />} />
      <Route path="/destinations/indonesie" element={<DestinationsList.Indonesie />} />
      <Route path="/destinations/philippines" element={<DestinationsList.Philippines />} />
      <Route path="/destinations/brunei" element={<DestinationsList.Brunei />} />
      <Route path="/destinations/timor-oriental" element={<DestinationsList.TimorOriental />} />

      <Route path="/destinations/france" element={<DestinationsList.France />} />
      <Route path="/destinations/italie" element={<DestinationsList.Italie />} />
      <Route path="/destinations/espagne" element={<DestinationsList.Espagne />} />
      <Route path="/destinations/grece" element={<DestinationsList.Grece />} />
      <Route path="/destinations/portugal" element={<DestinationsList.Portugal />} />
      <Route path="/destinations/croatie" element={<DestinationsList.Croatie />} />
      <Route path="/destinations/suisse" element={<DestinationsList.Suisse />} />
      <Route path="/destinations/autriche" element={<DestinationsList.Autriche />} />
      <Route path="/destinations/islande" element={<DestinationsList.Islande />} />
      <Route path="/destinations/irlande" element={<DestinationsList.Irlande />} />
      <Route path="/destinations/norvege" element={<DestinationsList.Norvege />} />
      <Route path="/destinations/hongrie" element={<DestinationsList.Hongrie />} />

      <Route path="/destinations/maroc" element={<DestinationsList.Maroc />} />
      <Route path="/destinations/egypte" element={<DestinationsList.Egypte />} />
      <Route path="/destinations/kenya" element={<DestinationsList.Kenya />} />
      <Route path="/destinations/tanzanie" element={<DestinationsList.Tanzanie />} />
      <Route path="/destinations/afrique-du-sud" element={<DestinationsList.AfriqueDuSud />} />
      <Route path="/destinations/madagascar" element={<DestinationsList.Madagascar />} />

      <Route path="/destinations/usa" element={<DestinationsList.USA />} />
      <Route path="/destinations/canada" element={<DestinationsList.Canada />} />
      <Route path="/destinations/mexique" element={<DestinationsList.Mexique />} />
      <Route path="/destinations/perou" element={<DestinationsList.Perou />} />
      <Route path="/destinations/bresil" element={<DestinationsList.Bresil />} />
      <Route path="/destinations/argentine" element={<DestinationsList.Argentine />} />
      <Route path="/destinations/chili" element={<DestinationsList.Chili />} />
      <Route path="/destinations/colombie" element={<DestinationsList.Colombie />} />

      {/* ========== GUIDES THÉMATIQUES ========== */}
      
      {/* GUIDES - Vietnam */}
      <Route path="/guides/guide-complet-vietnam" element={<CountryGuides.GuideCompletVietnam />} />
      <Route path="/guides/budget-vietnam" element={<CountryGuides.BudgetVietnam />} />
      <Route path="/guides/street-food-vietnam" element={<CountryGuides.StreetFoodVietnam />} />
      <Route path="/guides/transport-vietnam" element={<CountryGuides.TransportVietnam />} />
      <Route path="/guides/vietnam-famille" element={<CountryGuides.VietnamFamille />} />
      <Route path="/guides/photo-vietnam" element={<CountryGuides.PhotoVietnam />} />

      {/* ========== ARTICLES PAR DESTINATION ========== */}
      
      {/* ARTICLES - Vietnam */}
      <Route path="/destinations/vietnam/hanoi" element={<Articles.ArticleHanoi />} />
      <Route path="/destinations/vietnam/ha-long" element={<Articles.ArticleHaLong />} />
      <Route path="/destinations/vietnam/hoi-an" element={<Articles.ArticleHoiAn />} />
      <Route path="/destinations/vietnam/ho-chi-minh" element={<Articles.ArticleHoChiMinh />} />
      
      {/* ARTICLES - Thaïlande */}
      <Route path="/destinations/thailande/bangkok" element={<Articles.ArticleBangkok />} />
      <Route path="/destinations/thailande/chiang-mai" element={<Articles.ArticleChiangMai />} />
      <Route path="/destinations/thailande/iles-sud" element={<Articles.ArticleIlesSudThailande />} />

      {/* ARTICLES - Indonésie */}
      <Route path="/destinations/indonesie/bali" element={<Articles.ArticleBali />} />
      <Route path="/destinations/indonesie/java" element={<Articles.ArticleJava />} />

      {/* ARTICLES - Malaisie */}
      <Route path="/destinations/malaisie/kuala-lumpur" element={<Articles.ArticleKualaLumpur />} />
      <Route path="/destinations/malaisie/penang" element={<Articles.ArticlePenang />} />
      <Route path="/destinations/malaisie/borneo" element={<Articles.ArticleBorneo />} />

      {/* ARTICLES - Laos */}
      <Route path="/destinations/laos/luang-prabang" element={<Articles.ArticleLuangPrabang />} />
      <Route path="/destinations/laos/vang-vieng" element={<Articles.ArticleVangVieng />} />
      <Route path="/destinations/laos/vientiane" element={<Articles.ArticleVientiane />} />

      {/* ARTICLES - Cambodge */}
      <Route path="/destinations/cambodge/siem-reap" element={<Articles.ArticleSiemReap />} />
      <Route path="/destinations/cambodge/phnom-penh" element={<Articles.ArticlePhnomPenh />} />
      <Route path="/destinations/cambodge/sihanoukville" element={<Articles.ArticleSihanoukville />} />

      {/* ARTICLES - Birmanie */}
      <Route path="/destinations/birmanie/yangon" element={<Articles.ArticleYangon />} />
      <Route path="/destinations/birmanie/bagan" element={<Articles.ArticleBagan />} />
      <Route path="/destinations/birmanie/mandalay" element={<Articles.ArticleMandalay />} />

      {/* ARTICLES - Philippines */}
      <Route path="/destinations/philippines/manille" element={<Articles.ArticleManille />} />
      <Route path="/destinations/philippines/palawan" element={<Articles.ArticlePalawan />} />
      <Route path="/destinations/philippines/boracay" element={<Articles.ArticleBoracay />} />

      {/* ARTICLES - Singapour */}
      <Route path="/destinations/singapour/singapour" element={<Articles.ArticleSingapour />} />

      {/* ARTICLES - Brunei */}
      <Route path="/destinations/brunei/bandar-seri-begawan" element={<Articles.ArticleBrunei />} />

      {/* ARTICLES - Timor Oriental */}
      <Route path="/destinations/timor-oriental/dili" element={<Articles.ArticleTimorOriental />} />

      {/* ARTICLES - France */}
      <Route path="/destinations/france/paris" element={<Articles.ArticleParis />} />
      <Route path="/destinations/france/provence" element={<Articles.ArticleProvence />} />
      <Route path="/destinations/france/alpes" element={<Articles.ArticleAlpes />} />
      <Route path="/destinations/france/lyon" element={<Articles.ArticleLyon />} />
      <Route path="/destinations/france/cote-azur" element={<Articles.ArticleCoteDazur />} />
      <Route path="/destinations/france/alsace" element={<Articles.ArticleAlsace />} />

      {/* ARTICLES - Italie */}
      <Route path="/destinations/italie/rome" element={<Articles.ArticleRome />} />
      <Route path="/destinations/italie/toscane" element={<Articles.ArticleToscane />} />
      <Route path="/destinations/italie/venise" element={<Articles.ArticleVenise />} />

      {/* ARTICLES - Espagne */}
      <Route path="/destinations/espagne/barcelone" element={<Articles.ArticleBarcelone />} />
      <Route path="/destinations/espagne/madrid" element={<Articles.ArticleMadrid />} />
      <Route path="/destinations/espagne/andalousie" element={<Articles.ArticleAndalousie />} />

      {/* ARTICLES - Croatie */}
      <Route path="/destinations/croatie/dubrovnik" element={<Articles.ArticleDubrovnik />} />
      <Route path="/destinations/croatie/split" element={<Articles.ArticleSplit />} />
      <Route path="/destinations/croatie/plitvice" element={<Articles.ArticlePlitvice />} />

      {/* ARTICLES - Grèce */}
      <Route path="/destinations/grece/athenes" element={<Articles.ArticleAthenes />} />
      <Route path="/destinations/grece/santorin" element={<Articles.ArticleSantorin />} />
      <Route path="/destinations/grece/mykonos" element={<Articles.ArticleMykonos />} />
      <Route path="/destinations/grece/crete" element={<Articles.ArticleCrete />} />

      {/* ARTICLES - Portugal */}
      <Route path="/destinations/portugal/lisbonne" element={<Articles.ArticleLisbonne />} />
      <Route path="/destinations/portugal/porto" element={<Articles.ArticlePorto />} />
      <Route path="/destinations/portugal/algarve" element={<Articles.ArticleAlgarve />} />

      {/* ARTICLES - Autriche */}
      <Route path="/destinations/autriche/vienne" element={<Articles.ArticleVienne />} />
      <Route path="/destinations/autriche/salzbourg" element={<Articles.ArticleSalzbourg />} />
      <Route path="/destinations/autriche/tyrol" element={<Articles.ArticleTyrol />} />

      {/* ARTICLES - Norvège */}
      <Route path="/destinations/norvege/oslo" element={<Articles.ArticleOslo />} />
      <Route path="/destinations/norvege/fjords" element={<Articles.ArticleFjords />} />
      <Route path="/destinations/norvege/bergen" element={<Articles.ArticleBergen />} />

      {/* ARTICLES - Irlande */}
      <Route path="/destinations/irlande/dublin" element={<Articles.ArticleDublin />} />
      <Route path="/destinations/irlande/galway" element={<Articles.ArticleGalway />} />

      {/* ARTICLES - Hongrie */}
      <Route path="/destinations/hongrie/budapest" element={<Articles.ArticleBudapest />} />

      {/* ARTICLES - Suisse */}
      <Route path="/destinations/suisse/zurich" element={<Articles.ArticleZurich />} />
      <Route path="/destinations/suisse/geneve" element={<Articles.ArticleGeneve />} />

      {/* ARTICLES - Islande */}
      <Route path="/destinations/islande/reykjavik" element={<Articles.ArticleIslande />} />

      {/* ARTICLES - Maroc */}
      <Route path="/destinations/maroc/marrakech" element={<Articles.ArticleMarrakech />} />
      <Route path="/destinations/maroc/fes" element={<Articles.ArticleFes />} />
      <Route path="/destinations/maroc/sahara" element={<Articles.ArticleSahara />} />
      <Route path="/destinations/maroc/chefchaouen" element={<Articles.ArticleChefchaouen />} />

      {/* ARTICLES - Égypte */}
      <Route path="/destinations/egypte/le-caire" element={<Articles.ArticleCaire />} />
      <Route path="/destinations/egypte/gizeh" element={<Articles.ArticleGizeh />} />
      <Route path="/destinations/egypte/louxor" element={<Articles.ArticleLuxor />} />
      <Route path="/destinations/egypte/alexandrie" element={<Articles.ArticleAlexandrie />} />

      {/* ARTICLES - Kenya */}
      <Route path="/destinations/kenya/nairobi" element={<Articles.ArticleNairobi />} />
      <Route path="/destinations/kenya/masai-mara" element={<Articles.ArticleMasaiMara />} />

      {/* ARTICLES - Tanzanie */}
      <Route path="/destinations/tanzanie/zanzibar" element={<Articles.ArticleZanzibar />} />
      <Route path="/destinations/tanzanie/kilimandjaro" element={<Articles.ArticleKilimandjaro />} />

      {/* ARTICLES - Afrique du Sud */}
      <Route path="/destinations/afrique-du-sud/cape-town" element={<Articles.ArticleCapeTown />} />

      {/* ARTICLES - Madagascar */}
      <Route path="/destinations/madagascar/antananarivo" element={<Articles.ArticleAntananarivo />} />
      <Route path="/destinations/madagascar/allee-baobabs" element={<Articles.ArticleAlleeBaobabs />} />

      {/* ARTICLES - USA */}
      <Route path="/destinations/usa/new-york" element={<Articles.ArticleNewYork />} />
      <Route path="/destinations/usa/grand-canyon" element={<Articles.ArticleGrandCanyon />} />
      <Route path="/destinations/usa/las-vegas" element={<Articles.ArticleLasVegas />} />
      <Route path="/destinations/usa/los-angeles" element={<Articles.ArticleLosAngeles />} />
      <Route path="/destinations/usa/san-francisco" element={<Articles.ArticleSanFrancisco />} />

      {/* ARTICLES - Canada */}
      <Route path="/destinations/canada/banff" element={<Articles.ArticleBanff />} />
      <Route path="/destinations/canada/vancouver" element={<Articles.ArticleVancouver />} />
      <Route path="/destinations/canada/montreal" element={<Articles.ArticleMontreal />} />
      <Route path="/destinations/canada/quebec" element={<Articles.ArticleQuebec />} />
      <Route path="/destinations/canada/toronto" element={<Articles.ArticleToronto />} />

      {/* ARTICLES - Mexique */}
      <Route path="/destinations/mexique/mexico" element={<Articles.ArticleMexico />} />
      <Route path="/destinations/mexique/cancun" element={<Articles.ArticleCancun />} />
      <Route path="/destinations/mexique/oaxaca" element={<Articles.ArticleOaxaca />} />

      {/* ARTICLES - Pérou */}
      <Route path="/destinations/perou/lima" element={<Articles.ArticleLima />} />
      <Route path="/destinations/perou/machu-picchu" element={<Articles.ArticleMachuPicchu />} />
      <Route path="/destinations/perou/arequipa" element={<Articles.ArticleArequipa />} />
      <Route path="/destinations/perou/titicaca" element={<Articles.ArticleTiticaca />} />

      {/* ARTICLES - Brésil */}
      <Route path="/destinations/bresil/rio" element={<Articles.ArticleRio />} />
      <Route path="/destinations/bresil/sao-paulo" element={<Articles.ArticleSaoPaulo />} />
      <Route path="/destinations/bresil/amazonie" element={<Articles.ArticleAmazonie />} />
      <Route path="/destinations/bresil/salvador" element={<Articles.ArticleSalvador />} />

      {/* ARTICLES - Argentine */}
      <Route path="/destinations/argentine/buenos-aires" element={<Articles.ArticleBuenosAires />} />
      <Route path="/destinations/argentine/mendoza" element={<Articles.ArticleMendoza />} />
      <Route path="/destinations/argentine/patagonie" element={<Articles.ArticlePatagonie />} />
      <Route path="/destinations/argentine/iguazu" element={<Articles.ArticleIguazu />} />
      <Route path="/destinations/argentine/salta" element={<Articles.ArticleSalta />} />
      <Route path="/destinations/argentine/peninsula-valdes" element={<Articles.ArticlePeninsulaValdes />} />

      {/* ARTICLES - Chili */}
      <Route path="/destinations/chili/santiago" element={<Articles.ArticleSantiago />} />
      <Route path="/destinations/chili/atacama" element={<Articles.ArticleAtacama />} />
      <Route path="/destinations/chili/torres-del-paine" element={<Articles.ArticleTorresDelPaine />} />

      {/* ARTICLES - Colombie */}
      <Route path="/destinations/colombie/bogota" element={<Articles.ArticleBogota />} />
      <Route path="/destinations/colombie/cartagene" element={<Articles.ArticleCartagene />} />
      <Route path="/destinations/colombie/medellin" element={<Articles.ArticleMedellin />} />

      {/* ROUTE 404 (Doit être la dernière) */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

// --- Composant Principal ---
const App = () => {
  // Script pour iframe auto-resize dans WordPress (Gardé tel quel, c'est spécifique)
  useEffect(() => {
    const sendHeight = () => {
      const height = document.documentElement.scrollHeight;
      window.parent.postMessage({ type: "setHeight", height }, "*");
    };

    sendHeight();
    window.addEventListener("resize", sendHeight);
    const interval = setInterval(sendHeight, 1000);

    return () => {
      window.removeEventListener("resize", sendHeight);
      clearInterval(interval);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/* 3. Ajout de Suspense pour gérer l'attente du Lazy Loading */}
            <Suspense fallback={<LoadingPage />}>
              <AppRoutes />
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
