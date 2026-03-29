import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Sofa, Crown, Plane, Utensils, Hotel, MapPin, Mail, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// ============================================================
// 🔧 DONNÉES MODIFIABLES — Prix par jour en € par catégorie
// Modifiez cet objet pour ajuster les estimations budgétaires
// ============================================================
const BUDGET_DATA: Record<string, { eco: BudgetBreakdown; confort: BudgetBreakdown; premium: BudgetBreakdown }> = {
  default: {
    eco:     { logement: 15, nourriture: 10, transport: 8,  activites: 5  },
    confort: { logement: 45, nourriture: 25, transport: 15, activites: 15 },
    premium: { logement: 120, nourriture: 55, transport: 35, activites: 40 },
  },
};

interface BudgetBreakdown {
  logement: number;
  nourriture: number;
  transport: number;
  activites: number;
}

type TravelStyle = 'eco' | 'confort' | 'premium';

const STYLES: { key: TravelStyle; label: string; icon: typeof Leaf; desc: string }[] = [
  { key: 'eco', label: 'Éco', icon: Leaf, desc: 'Auberges & street food' },
  { key: 'confort', label: 'Confort', icon: Sofa, desc: 'Hôtels 3★ & restos' },
  { key: 'premium', label: 'Premium', icon: Crown, desc: 'Luxe & expériences VIP' },
];

const CHART_COLORS = [
  'hsl(200, 85%, 45%)',   // primary - Logement
  'hsl(35, 90%, 55%)',    // warm - Nourriture
  'hsl(160, 60%, 45%)',   // green - Transport
  'hsl(280, 60%, 55%)',   // purple - Activités
];

const CHART_LABELS = [
  { key: 'logement', label: 'Logement', icon: Hotel },
  { key: 'nourriture', label: 'Nourriture', icon: Utensils },
  { key: 'transport', label: 'Transport', icon: Plane },
  { key: 'activites', label: 'Activités', icon: MapPin },
];

interface GlobalTravelPlannerProps {
  destination?: string;
}

const STORAGE_KEY = 'gtp_email_submitted';

const GlobalTravelPlanner = ({ destination = 'votre voyage' }: GlobalTravelPlannerProps) => {
  const [days, setDays] = useState(10);
  const [style, setStyle] = useState<TravelStyle>('confort');
  const [email, setEmail] = useState('');
  const [alreadySubmitted, setAlreadySubmitted] = useState(false);
  const [justSubmitted, setJustSubmitted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      setAlreadySubmitted(true);
    }
  }, []);

  const budgetKey = 'default';
  const dailyBudget = BUDGET_DATA[budgetKey][style];
  const dailyTotal = dailyBudget.logement + dailyBudget.nourriture + dailyBudget.transport + dailyBudget.activites;
  const totalBudget = dailyTotal * days;

  const chartData = useMemo(() => [
    { name: 'Logement', value: dailyBudget.logement * days },
    { name: 'Nourriture', value: dailyBudget.nourriture * days },
    { name: 'Transport', value: dailyBudget.transport * days },
    { name: 'Activités', value: dailyBudget.activites * days },
  ], [dailyBudget, days]);

  return (
    <section className="w-full max-w-[600px] mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          💰 Prévoyez votre budget pour{' '}
          <span className="text-primary">{destination}</span>
        </h2>
        <p className="text-sm text-muted-foreground">
          Estimez vos dépenses en quelques secondes
        </p>
      </div>

      {/* Slider durée */}
      <div className="mb-8 bg-card rounded-xl border border-border p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <label className="text-sm font-semibold text-foreground">Durée du séjour</label>
          <motion.span
            key={days}
            initial={{ scale: 1.3, color: 'hsl(200, 85%, 45%)' }}
            animate={{ scale: 1, color: 'hsl(220, 15%, 20%)' }}
            className="text-lg font-bold"
          >
            {days} jour{days > 1 ? 's' : ''}
          </motion.span>
        </div>
        <input
          type="range"
          min={1}
          max={30}
          value={days}
          onChange={(e) => setDays(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer bg-secondary accent-primary"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-1">
          <span>1 jour</span>
          <span>30 jours</span>
        </div>
      </div>

      {/* Style cards */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {STYLES.map((s) => {
          const Icon = s.icon;
          const isActive = style === s.key;
          return (
            <motion.button
              key={s.key}
              whileTap={{ scale: 0.95 }}
              onClick={() => setStyle(s.key)}
              className={`relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'border-primary bg-primary/5 shadow-md'
                  : 'border-border bg-card hover:border-primary/30'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 rounded-xl border-2 border-primary"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                isActive ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'
              }`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className={`text-sm font-semibold ${isActive ? 'text-primary' : 'text-foreground'}`}>
                {s.label}
              </span>
              <span className="text-[10px] text-muted-foreground text-center leading-tight">
                {s.desc}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Total animé */}
      <motion.div
        key={`${style}-${days}`}
        initial={{ scale: 0.95, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center mb-8"
      >
        <p className="text-sm text-muted-foreground mb-1">Budget total estimé</p>
        <AnimatePresence mode="wait">
          <motion.p
            key={totalBudget}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-primary"
          >
            {totalBudget.toLocaleString('fr-FR')} €
          </motion.p>
        </AnimatePresence>
        <p className="text-xs text-muted-foreground mt-1">
          soit ~{dailyTotal} €/jour en mode {style}
        </p>
      </motion.div>

      {/* Donut Chart */}
      <div className="bg-card rounded-xl border border-border p-5 shadow-sm mb-8">
        <h3 className="text-sm font-semibold text-foreground mb-4 text-center">Répartition du budget</h3>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="w-[180px] h-[180px] shrink-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={3}
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={600}
                >
                  {chartData.map((_, index) => (
                    <Cell key={index} fill={CHART_COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-3 flex-1 w-full">
            {CHART_LABELS.map((item, idx) => {
              const value = chartData[idx].value;
              const pct = Math.round((value / totalBudget) * 100);
              const Icon = item.icon;
              return (
                <div key={item.key} className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: CHART_COLORS[idx] }}
                  />
                  <Icon className="w-4 h-4 text-muted-foreground shrink-0" />
                  <span className="text-sm text-foreground flex-1">{item.label}</span>
                  <span className="text-sm font-semibold text-foreground">{value} €</span>
                  <span className="text-xs text-muted-foreground w-8 text-right">{pct}%</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Email Capture / Success */}
      {!alreadySubmitted && !justSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 via-card to-accent/10 rounded-2xl border border-primary/20 overflow-hidden shadow-lg"
        >
          <div className="p-6 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">
              Recevez votre estimation détaillée
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Budget personnalisé + astuces pour économiser, directement dans votre boîte mail.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
                localStorage.setItem(STORAGE_KEY, 'true');
                setJustSubmitted(true);
              }}
              className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3 px-5 rounded-lg hover:bg-primary/90 transition-colors shadow-md text-sm whitespace-nowrap"
              >
                <Send className="w-4 h-4" />
                Recevoir mon budget
              </button>
            </form>
            <p className="text-[10px] text-muted-foreground mt-2">
              📩 Gratuit • Pas de spam • Se désinscrire en 1 clic
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-br from-primary/10 via-card to-accent/10 rounded-2xl border border-primary/20 overflow-hidden shadow-lg"
        >
          <div className="p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-1">
              C'est envoyé ! 🎉
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Profitez-en pour découvrir notre{' '}
              <Link to="/premium" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">
                Guide Premium à -50%
              </Link>
            </p>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default GlobalTravelPlanner;
