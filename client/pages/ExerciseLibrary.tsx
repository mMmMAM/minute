import { useState } from "react";
import { ArrowLeft, Plus, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import MinuteLogo from "@/components/MinuteLogo";

type Exercise = { id: number; name: string; focus: string; equipment: string };
const starterExercises: Exercise[] = [
  { id: 1, name: "World's Greatest Stretch", focus: "Mobility", equipment: "Bodyweight" },
  { id: 2, name: "Goblet Squat", focus: "Legs", equipment: "Dumbbell" },
  { id: 3, name: "Dumbbell Row", focus: "Arms & back", equipment: "Dumbbells" },
  { id: 4, name: "Dead Bug", focus: "Core", equipment: "Bodyweight" },
];

export default function ExerciseLibrary() {
  const [exercises, setExercises] = useState(starterExercises);
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [focus, setFocus] = useState("Core");
  const filtered = exercises.filter((exercise) => `${exercise.name} ${exercise.focus} ${exercise.equipment}`.toLowerCase().includes(query.toLowerCase()));
  const addExercise = () => { if (!name.trim()) return; setExercises((items) => [...items, { id: Date.now(), name: name.trim(), focus, equipment: "Bodyweight" }]); setName(""); setShowForm(false); };

  return <div className="min-h-screen bg-[#f8f8f5] text-[#1d2b21]"><header className="border-b border-[#dfe6df] bg-[#f8f8f5] px-5 sm:px-8"><div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between"><MinuteLogo /><Link to="/workouts" className="inline-flex items-center gap-2 text-sm font-bold text-[#526258]"><ArrowLeft size={16}/> Back to workouts</Link></div></header><main className="mx-auto max-w-[920px] px-5 pb-14 pt-10 sm:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-3 text-xs font-semibold uppercase tracking-[0.17em] text-[#7a8a7e]">Your movements</p><h1 className="font-brand text-4xl font-semibold tracking-normal sm:text-5xl">Exercise library</h1><p className="mt-3 text-[15px] leading-6 text-[#6b776e]">Add your own exercises once, then use them in every workout.</p></div><button onClick={() => setShowForm(true)} className="inline-flex items-center justify-center gap-2 rounded-md bg-[#2d5b3a] px-4 py-3 text-sm font-bold text-white"><Plus size={17}/> Add exercise</button></div>{showForm && <div className="mt-8 rounded-2xl border border-[#d8e2d8] bg-white p-5"><div className="flex items-center justify-between"><h2 className="font-bold">New exercise</h2><button onClick={() => setShowForm(false)} aria-label="Close form"><X size={18}/></button></div><div className="mt-4 grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold text-[#526258] sm:col-span-2">Exercise name<input autoFocus value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. Reverse lunge" className="mt-2 h-11 w-full rounded-xl border border-[#dce4dc] px-3 text-sm font-normal outline-none focus:border-[#2d5b3a]"/></label><label className="text-sm font-semibold text-[#526258]">Area of focus<select value={focus} onChange={(event) => setFocus(event.target.value)} className="mt-2 h-11 w-full rounded-xl border border-[#dce4dc] bg-white px-3 text-sm font-normal outline-none"><option>Arms</option><option>Core</option><option>Legs</option><option>Full body</option><option>Mobility</option></select></label><label className="text-sm font-semibold text-[#526258]">Equipment<input defaultValue="Bodyweight" className="mt-2 h-11 w-full rounded-xl border border-[#dce4dc] px-3 text-sm font-normal outline-none"/></label></div><button onClick={addExercise} className="mt-5 rounded-md bg-[#2d5b3a] px-4 py-2.5 text-sm font-bold text-white">Save exercise</button></div>}<div className="mt-9 relative"><Search size={17} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#91a097]"/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search exercises" className="h-12 w-full rounded-xl border border-[#e1e6df] bg-white pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-[#2d5b3a]/20"/></div><div className="mt-5 overflow-hidden rounded-2xl border border-[#e1e6df] bg-white">{filtered.map((exercise) => <div key={exercise.id} className="flex items-center justify-between gap-4 border-b border-[#edf0eb] p-4 last:border-0"><div><h3 className="font-bold">{exercise.name}</h3><p className="mt-1 text-xs text-[#7a877e]">{exercise.focus} · {exercise.equipment}</p></div><Link to="/workouts/new" className="rounded-lg bg-[#eef3ec] px-3 py-2 text-xs font-bold text-[#35533d]">Use in workout</Link></div>)}</div></main></div>;
}
