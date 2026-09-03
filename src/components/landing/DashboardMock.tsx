import { motion } from "framer-motion";

const pipeline = [
  { label: "Novo Lead", count: 142, color: "oklch(0.65 0.18 240)" },
  { label: "Qualificado IA", count: 87, color: "oklch(0.72 0.20 200)" },
  { label: "Visita Agendada", count: 34, color: "oklch(0.72 0.20 152)" },
];

const leads = [
  { name: "Ricardo M.", score: 94, status: "Quente", tag: "3 quartos · Pinheiros" },
  { name: "Camila S.", score: 88, status: "Quente", tag: "Lote · Sorocaba" },
  { name: "Bruno A.", score: 71, status: "Morno", tag: "Cobertura · BH" },
  { name: "Júlia P.", score: 96, status: "Quente", tag: "Studio · SP centro" },
];

export function DashboardMock() {
  return (
    <div className="relative rounded-3xl glass-strong p-1 shadow-[0_30px_100px_-20px_oklch(0.62_0.24_264/0.4)]">
      <div className="rounded-[20px] bg-[oklch(0.06_0_0)] p-5">
        {/* header */}
        <div className="flex items-center justify-between border-b border-border/60 pb-3">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-electric animate-glow-pulse" />
            <span className="font-display text-sm font-medium">Scalio CRM · Pipeline</span>
          </div>
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
            Ao vivo
          </span>
        </div>

        {/* pipeline */}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {pipeline.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="rounded-xl border border-border/60 bg-surface-1 p-3"
            >
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                {p.label}
              </p>
              <p className="mt-1 font-display text-2xl font-semibold" style={{ color: p.color }}>
                {p.count}
              </p>
              <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-border/60">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(p.count / 142) * 100}%` }}
                  transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
                  className="h-full rounded-full"
                  style={{ background: p.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* chart */}
        <div className="mt-4 rounded-xl border border-border/60 bg-surface-1 p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">Lead Score · Últimos 7 dias</p>
            <p className="text-xs text-success">▲ 23%</p>
          </div>
          <svg viewBox="0 0 300 70" className="mt-2 h-16 w-full">
            <defs>
              <linearGradient id="ln" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.72 0.26 258)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="oklch(0.72 0.26 258)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              d="M0,55 L40,48 L80,52 L120,38 L160,32 L200,20 L240,24 L280,10 L300,8"
              fill="none"
              stroke="oklch(0.72 0.26 258)"
              strokeWidth="2"
            />
            <path
              d="M0,55 L40,48 L80,52 L120,38 L160,32 L200,20 L240,24 L280,10 L300,8 L300,70 L0,70 Z"
              fill="url(#ln)"
            />
          </svg>
        </div>

        {/* leads list */}
        <div className="mt-4 space-y-2">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
            IA · Leads qualificados agora
          </p>
          {leads.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.08 }}
              className="flex items-center justify-between rounded-xl border border-border/60 bg-surface-1 px-3 py-2.5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-electric/15 text-xs font-medium text-electric-bright">
                  {l.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium">{l.name}</p>
                  <p className="text-[11px] text-muted-foreground">{l.tag}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] ${l.status === "Quente" ? "bg-electric/20 text-electric-bright" : "bg-muted text-muted-foreground"}`}
                >
                  {l.status}
                </span>
                <span className="font-display text-sm font-semibold">{l.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
