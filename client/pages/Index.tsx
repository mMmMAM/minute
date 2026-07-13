import { ArrowUpRight, Bell, CalendarDays, ChevronRight, Clock3, Dumbbell, FolderPlus, MoreHorizontal, Play, Plus, Search, TimerReset, UsersRound } from "lucide-react";
import { Link } from "react-router-dom";

const workouts = [
  { title: "Full Body Foundations", label: "Strength · 45 min", people: "12 clients", color: "bg-[#d9efc3]", icon: Dumbbell },
  { title: "Morning Mobility", label: "Mobility · 18 min", people: "8 clients", color: "bg-[#f6d4bc]", icon: TimerReset },
  { title: "Run Strong", label: "Conditioning · 32 min", people: "6 clients", color: "bg-[#d8dbfa]", icon: Play },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#142117]">
      <header className="sticky top-0 z-20 border-b border-[#e6e7e2] bg-[#f7f7f5]/90 px-5 backdrop-blur-lg md:px-9">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 font-extrabold tracking-[-0.06em]">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#baff4b] text-lg tracking-[-0.15em]">p.</span>
            <span className="text-[22px]">pace</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#6a746c] md:flex">
            <Link to="/" className="text-[#142117]">Overview</Link>
            <Link to="/workouts" className="transition hover:text-[#142117]">Workouts</Link>
            <Link to="/clients" className="transition hover:text-[#142117]">Clients</Link>
            <Link to="/library" className="transition hover:text-[#142117]">Library</Link>
          </nav>
          <div className="flex items-center gap-3">
            <button aria-label="Search" className="hidden h-10 w-10 place-items-center rounded-full border border-[#e3e5df] bg-white text-[#526057] sm:grid"><Search size={18} /></button>
            <button aria-label="Notifications" className="grid h-10 w-10 place-items-center rounded-full border border-[#e3e5df] bg-white text-[#526057]"><Bell size={18} /></button>
            <button className="flex items-center gap-2 rounded-full bg-[#142117] py-2 pl-2 pr-3 text-sm font-bold text-white"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#f4a96f] text-xs text-[#142117]">MJ</span><span className="hidden sm:inline">Margot</span></button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1440px] px-5 pb-12 pt-9 md:px-9 md:pt-12">
        <section className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#8a968c]">Tuesday, 24 June</p>
            <h1 className="font-display max-w-2xl text-4xl font-semibold tracking-[-0.055em] text-[#142117] sm:text-5xl">Good morning, Margot.</h1>
            <p className="mt-3 text-base text-[#68736b]">Create better training experiences, one workout at a time.</p>
          </div>
          <Link to="/workouts/new" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#142117] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#25372a]"><Plus size={18} /> Create workout</Link>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[22px] bg-[#142117] p-6 text-white"><div className="flex items-center justify-between text-[#c5ffc0]"><span className="text-sm font-semibold">This week</span><ArrowUpRight size={18} /></div><p className="mt-8 font-display text-5xl tracking-[-0.06em]">16<span className="ml-2 text-lg font-medium text-[#aeb9af]">sessions</span></p><p className="mt-4 text-sm text-[#aeb9af]">Up 18% from last week</p></div>
          <div className="rounded-[22px] border border-[#e2e5dd] bg-white p-6"><div className="flex items-center justify-between"><span className="text-sm font-bold text-[#68736b]">Active clients</span><span className="grid h-9 w-9 place-items-center rounded-full bg-[#f2f5ed] text-[#52723b]"><UsersRound size={18} /></span></div><p className="mt-8 font-display text-5xl tracking-[-0.06em]">24</p><p className="mt-4 text-sm text-[#778078]">4 new this month</p></div>
          <div className="rounded-[22px] border border-[#e2e5dd] bg-white p-6"><div className="flex items-center justify-between"><span className="text-sm font-bold text-[#68736b]">Workout library</span><span className="grid h-9 w-9 place-items-center rounded-full bg-[#fff1e8] text-[#bd6840]"><FolderPlus size={18} /></span></div><p className="mt-8 font-display text-5xl tracking-[-0.06em]">38</p><p className="mt-4 text-sm text-[#778078]">Across 6 collections</p></div>
        </section>

        <section className="mt-11 grid gap-8 xl:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-5 flex items-center justify-between"><div><h2 className="font-display text-2xl font-semibold tracking-[-0.04em]">Your workout shelf</h2><p className="mt-1 text-sm text-[#758077]">Pick up where you left off.</p></div><Link to="/workouts" className="flex items-center gap-1 text-sm font-bold text-[#476c2e]">View all <ChevronRight size={17} /></Link></div>
            <div className="grid gap-4 md:grid-cols-3">
              {workouts.map(({ title, label, people, color, icon: Icon }) => <Link key={title} to="/workouts/new" className="group rounded-[22px] border border-[#e2e5dd] bg-white p-3 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#142117]/5"><div className={`relative flex h-36 items-center justify-center overflow-hidden rounded-[15px] ${color}`}><span className="grid h-16 w-16 rotate-[-8deg] place-items-center rounded-2xl border border-white/70 bg-white/50 text-[#243729] shadow-sm"><Icon size={30} strokeWidth={1.7} /></span><button aria-label={`More options for ${title}`} className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full bg-white/80"><MoreHorizontal size={16} /></button></div><div className="px-1 pb-1 pt-4"><h3 className="font-display text-lg font-semibold tracking-[-0.03em]">{title}</h3><p className="mt-1 text-xs text-[#79837b]">{label}</p><div className="mt-4 flex items-center justify-between border-t border-[#edf0eb] pt-3 text-xs font-semibold text-[#68736b]"><span>{people}</span><span className="grid h-7 w-7 place-items-center rounded-full bg-[#142117] text-white"><Play size={12} fill="currentColor" /></span></div></div></Link>)}
            </div>
          </div>
          <aside className="rounded-[24px] border border-[#e2e5dd] bg-white p-6"><div className="flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.13em] text-[#8a968c]">Today</p><h2 className="mt-1 font-display text-2xl font-semibold tracking-[-0.04em]">Your schedule</h2></div><CalendarDays size={21} className="text-[#547f38]" /></div><div className="mt-6 space-y-5 border-l border-[#dfe5db] pl-5"><div className="relative"><span className="absolute -left-[25px] top-1.5 h-2 w-2 rounded-full bg-[#baff4b] ring-4 ring-[#edf4e8]"/><p className="text-xs font-semibold text-[#89938b]">9:00 AM</p><p className="mt-1 font-bold">Lena — Full Body</p><p className="mt-1 text-sm text-[#738077]">Remote session · 45 min</p></div><div className="relative"><span className="absolute -left-[25px] top-1.5 h-2 w-2 rounded-full bg-[#f3ae7a] ring-4 ring-[#fdf1e8]"/><p className="text-xs font-semibold text-[#89938b]">12:30 PM</p><p className="mt-1 font-bold">Team Atlas — Run Strong</p><p className="mt-1 text-sm text-[#738077]">Shared workout · 32 min</p></div><div className="relative"><span className="absolute -left-[25px] top-1.5 h-2 w-2 rounded-full bg-[#d9dfe9] ring-4 ring-[#f1f3f6]"/><p className="text-xs font-semibold text-[#89938b]">4:15 PM</p><p className="mt-1 font-bold">Dani — Mobility</p><p className="mt-1 text-sm text-[#738077]">In person · 18 min</p></div></div><button className="mt-7 w-full rounded-xl border border-[#dfe4dc] py-3 text-sm font-bold text-[#3c4c40] transition hover:bg-[#f4f6f2]">Open calendar</button></aside>
        </section>
      </main>
    </div>
  );
}
