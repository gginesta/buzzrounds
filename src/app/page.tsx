"use client";

const games = [
  {
    name: "Tunes",
    tagline: "Name That Tune",
    description:
      "Listen to a song clip and guess the year it was released. The closer you are, the more points you get. Supports Spotify or preview mode.",
    emoji: "🎵",
    color: "from-green-500 to-emerald-700",
    glowColor: "rgba(34, 197, 94, 0.2)",
    borderHover: "rgba(34, 197, 94, 0.4)",
    url: "https://tunes.buzzrounds.com",
    status: "live" as const,
    players: "2–8",
    features: ["Spotify Integration", "500+ Songs", "4 Game Modes"],
  },
  {
    name: "YDKJ",
    tagline: "You Don't Know Jack",
    description:
      "Irreverent trivia with attitude. Trick questions, fast-buzzer rounds, and a snarky host who's judging your every answer.",
    emoji: "🧠",
    color: "from-yellow-500 to-orange-600",
    glowColor: "rgba(234, 179, 8, 0.2)",
    borderHover: "rgba(234, 179, 8, 0.4)",
    url: "https://ydkj.buzzrounds.com",
    status: "live" as const,
    players: "1–4",
    features: ["Trick Questions", "DisOrDat Rounds", "Jack Attack Finale"],
  },
  {
    name: "???",
    tagline: "Something New",
    description:
      "We're always cooking up new games. Got an idea? We might just build it.",
    emoji: "🎲",
    color: "from-slate-500 to-slate-700",
    glowColor: "rgba(100, 116, 139, 0.1)",
    borderHover: "rgba(100, 116, 139, 0.3)",
    url: "#",
    status: "tbd" as const,
    players: "?",
    features: ["Mystery", "Surprise", "Fun"],
  },
];

function StatusBadge({ status }: { status: "live" | "coming-soon" | "tbd" }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-dot" />
        LIVE
      </span>
    );
  }
  if (status === "coming-soon") {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full">
        COMING SOON
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
      TBD
    </span>
  );
}

function GameCard({
  game,
}: {
  game: (typeof games)[0];
}) {
  const isPlayable = game.status === "live";

  return (
    <a
      href={isPlayable ? game.url : undefined}
      target={isPlayable ? "_blank" : undefined}
      rel={isPlayable ? "noopener noreferrer" : undefined}
      className={`game-card block rounded-2xl bg-[var(--bg-card)] p-6 ${
        isPlayable ? "cursor-pointer" : "cursor-default"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl">{game.emoji}</div>
        <StatusBadge status={game.status} />
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold mb-0.5">{game.name}</h2>
      <p className="text-sm text-[var(--text-secondary)] mb-3">
        {game.tagline}
      </p>

      {/* Description */}
      <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
        {game.description}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-2 mb-4">
        {game.features.map((f) => (
          <span
            key={f}
            className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-[var(--text-secondary)]"
          >
            {f}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <span className="text-xs text-[var(--text-secondary)]">
          👥 {game.players} players
        </span>
        {isPlayable && (
          <span
            className={`text-sm font-semibold bg-gradient-to-r ${game.color} bg-clip-text text-transparent`}
          >
            Play Now →
          </span>
        )}
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="hero-gradient grid-pattern min-h-screen">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold tracking-tight">
          <span className="gradient-text">BuzzRounds</span>
        </div>
        <a
          href="https://github.com/gginesta"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          GitHub
        </a>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-8 pb-10 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-3">
            Party games
            <span className="gradient-text"> for everyone.</span>
          </h1>
          <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-lg">
            Multiplayer games you play in the browser. No downloads, no signups.
            Just share a link and go.
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="px-6 md:px-12 pb-10 max-w-7xl mx-auto">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-5">
          Games
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {games.map((game) => (
            <GameCard key={game.name} game={game} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 px-6 md:px-12 py-5 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-sm text-[var(--text-secondary)]">
            © {new Date().getFullYear()} BuzzRounds
          </p>
          <p className="text-xs text-[var(--text-secondary)]">
            Built with 🎮 in Hong Kong
          </p>
        </div>
      </footer>
    </div>
  );
}
