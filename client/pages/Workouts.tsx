import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Search, SlidersHorizontal, Tag } from "lucide-react";
import MinuteLogo from "@/components/MinuteLogo";

type Workout = { id: number; title: string; description: string; duration: string; exercises: number; tags: string[]; tone: string };

const initialWorkouts: Workout[] = [
  { id: 1, title: "Full Body Foundations", description: "A steady strength session for your whole body.", duration: "45 min", exercises: 6, tags: ["strength", "full body"], tone: "bg-[#dbe8d9]" },
  { id: 2, title: "Morning Mobility", description: "Open up the places that need a little more space.", duration: "18 min", exercises: 4, tags: ["low impact", "stretching"], tone: "bg-[#f3ddd8]" },
  { id: 3, title: "Run Strong", description: "Build a stronger engine with focused conditioning.", duration: "32 min", exercises: 5, tags: ["cardio", "legs"], tone: "bg-[#dbe4e8]" },
  { id: 4, title: "Core Reset", description: "A calm, focused set for your center.", duration: "20 min", exercises: 5, tags: ["core", "low impact"], tone: "bg-[#eee9dd]" },
];

const filters = ["all", "cardio", "low impact", "stretching", "arms", "core", "legs"];

export default function Workouts() {
  const [workouts, setWorkouts] = useState(initialWorkouts);
  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [showTags, setShowTags] = useState(false);

  const visibleWorkouts = useMemo(() => workouts.filter((workout) => {
    const matchesFilter = activeFilter === "all" || workout.tags.includes(activeFilter);
    const matchesQuery = `${workout.title} ${workout.description} ${workout.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesQuery;
  }), [activeFilter, query, workouts]);

  const createWorkout = () => {
    const id = Date.now();
    setWorkouts((items) => [{ id, title: "Untitled workout", description: "Start building your next practice.", duration: "0 min", exercises: 0, tags: ["new"], tone: "bg-[#e6e7ff]" }, ...items]);
  };

  return <div className="min-h-screen bg-[#f8f8f5] text-[#1d2b21]"><header className="border-b border-[#dfe6df] bg-[#f8f8f5] px-5 sm:px-8"><div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between"><MinuteLogo /><nav className="hidden items-center gap-7 text-sm font-semibold text-[#647268] md:flex"><Link to="/program" className="hover:text-[#1d2b21]">Program</Link><Link to="/workouts" className="text-[#1d2b21]">Workouts</Link><button className="hover:text-[#1d2b21]">Progress</button></nav><button className="flex items-center gap-2 rounded-full bg-[#1d2b21] py-2 pl-2 pr-3 text-sm font-semibold text-white"><span className="grid h-6 w-6 place-items-center rounded-full bg-[#d98e7e] text-xs text-[#1d2b21]">MJ</span><span className="hidden sm:inline">Margot</span></button></div></header><main className="mx-auto max-w-[1240px] px-5 pb-14 pt-9 sm:px-8 sm:pt-12"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.17em] text-[#7a8a7e]">Your movement library</p><h1 className="font-brand text-4xl font-semibold tracking-normal sm:text-5xl">Workouts</h1><p className="mt-3 max-w-lg text-[15px] leading-6 text-[#6b776e]">Find a session that fits today, or build one from your exercise library.</p></div><button onClick={createWorkout} className="inline-flex items-center justify-center gap-2 rounded-md bg-[#2d5b3a] px-4 py-3 text-sm font-bold text-white"><Plus size={17}/> Build a workout</button></div><div className="mt-9 flex flex-col gap-4 rounded-2xl border border-[#e1e6df] bg-white p-4 sm:flex-row sm:items-center"><div className="relative flex-1"><Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#91a097]"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search workouts" className="h-11 w-full rounded-xl bg-[#f5f7f3] pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-[#2d5b3a]/20"/></div><button onClick={() => setShowTags(!showTags)} className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#dce4dc] px-4 text-sm font-semibold text-[#536259]"><SlidersHorizontal size={16}/> Tags</button></div>{showTags && <div className="mt-3 flex flex-wrap gap-2"><Tag size={16} className="mt-2 text-[#829087]"/>{filters.slice(1).map((filter) => <button key={filter} onClick={() => { setActiveFilter(filter); setShowTags(false); }} className={`rounded-full px-3 py-2 text-xs font-bold capitalize ${activeFilter === filter ? "bg-[#2d5b3a] text-white" : "bg-[#e8efe7] text-[#3f5945]"}`}>{filter}</button>)}</div>}<div className="mt-8 flex items-center justify-between"><h2 className="text-lg font-bold">All workouts</h2><span className="text-sm text-[#7a877e]">{visibleWorkouts.length} sessions</span></div><div className="mt-4 grid gap-4 md:grid-cols-2">{visibleWorkouts.map((workout) => <Link to="/workouts/start" key={workout.id} className="group rounded-2xl border border-[#e1e6df] bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#b8cbbb] hover:shadow-sm"><div className={`flex h-28 items-end justify-between rounded-xl p-4 ${workout.tone}`}><span className="rounded-full bg-white/70 px-2.5 py-1 text-xs font-bold text-[#39513e]">{workout.duration}</span><ArrowRight size={19} className="text-[#39513e] transition group-hover:translate-x-1"/></div><h3 className="mt-4 text-lg font-bold tracking-normal">{workout.title}</h3><p className="mt-1 text-sm leading-5 text-[#718078]">{workout.description}</p><div className="mt-4 flex items-center justify-between"><span className="text-xs font-semibold text-[#7a877e]">{workout.exercises} exercises</span><div className="flex flex-wrap justify-end gap-1.5">{workout.tags.map((tag) => <span key={tag} className="rounded-full bg-[#f0f4ef] px-2 py-1 text-[11px] font-semibold capitalize text-[#536759]">{tag}</span>)}</div></div></Link>)}</div>{visibleWorkouts.length === 0 && <div className="mt-4 rounded-2xl border border-dashed border-[#cbd7cc] bg-white p-10 text-center text-sm text-[#738077]">No workouts match those tags yet.</div>}<Link to="/exercise-library" className="mt-10 flex items-center justify-between rounded-2xl border border-[#dfe6df] bg-[#eef3ec] p-5 transition hover:bg-[#e7eee5]"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#718373]">Exercise library</p><p className="mt-1 font-bold">Create and manage the movements you use most.</p></div><span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#2d5b3a]"><ArrowRight size={17}/></span></Link></main></div>;
}
