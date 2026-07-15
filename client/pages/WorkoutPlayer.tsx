import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Check, Pause, Play, SkipForward } from "lucide-react";
import { Link } from "react-router-dom";
import MinuteLogo from "@/components/MinuteLogo";
import { loadExercises, LibraryExercise } from "@/exerciseLibrary";

type PlayerExercise = LibraryExercise & { mode: "reps" | "time"; target: number };

export default function WorkoutPlayer() {
  const library = useMemo(() => loadExercises(), []);
  const exercises = useMemo<PlayerExercise[]>(() => library.slice(0, 4).map((exercise, index) => ({ ...exercise, mode: index % 2 === 0 ? "time" : "reps", target: index % 2 === 0 ? (index === 0 ? 10 : 8) : 12 })), [library]);
  const [current, setCurrent] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(exercises[0]?.target ?? 0);
  const [running, setRunning] = useState(true);
  const exercise = exercises[current];
  const isFinished = current >= exercises.length;

  useEffect(() => {
    if (!running || !exercise || exercise.mode !== "time") return;
    const interval = window.setInterval(() => setSecondsLeft((seconds) => seconds - 1), 1000);
    return () => window.clearInterval(interval);
  }, [exercise, running]);

  useEffect(() => {
    if (exercise?.mode === "time" && secondsLeft <= 0) {
      setCurrent((index) => index + 1);
      setSecondsLeft(exercises[current + 1]?.target ?? 0);
      setRunning(true);
    }
  }, [current, exercise, exercises, secondsLeft]);

  const next = () => { setCurrent((index) => index + 1); setSecondsLeft(exercises[current + 1]?.target ?? 0); setRunning(true); };
  if (isFinished) return <div className="grid min-h-screen place-items-center bg-[#f8f8f5] px-5 text-center text-[#1d2b21]"><div><div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#dbe8d9] text-[#2d5b3a]"><Check size={30}/></div><h1 className="mt-6 font-brand text-4xl tracking-normal">Workout complete</h1><p className="mt-3 text-[#6b776e]">Nice work showing up for yourself.</p><Link to="/workouts" className="mt-7 inline-flex rounded-md bg-[#2d5b3a] px-5 py-3 text-sm font-bold text-white">Back to workouts</Link></div></div>;
  if (!exercise) return null;

  return <div className="min-h-screen bg-[#f8f8f5] text-[#1d2b21]"><header className="border-b border-[#dfe6df] bg-[#f8f8f5] px-5 sm:px-8"><div className="mx-auto flex h-[76px] max-w-[900px] items-center justify-between"><Link to="/workouts" className="inline-flex items-center gap-2 text-sm font-bold text-[#526258]"><ArrowLeft size={16}/> Exit workout</Link><MinuteLogo compact/><span className="text-sm font-semibold text-[#718075]">{current + 1} / {exercises.length}</span></div></header><main className="mx-auto max-w-[700px] px-5 pb-12 pt-8 sm:pt-12"><p className="text-center text-xs font-bold uppercase tracking-[0.17em] text-[#7a8a7e]">Full Body Foundations</p><div className="mt-6 overflow-hidden rounded-[24px] border border-[#dfe6df] bg-white shadow-sm">{exercise.media ? <img src={exercise.media} alt={`${exercise.name} demonstration`} className="h-64 w-full object-cover sm:h-80"/> : <div className="grid h-64 place-items-center bg-[#dbe8d9] sm:h-80"><Play size={56} fill="currentColor" className="text-[#2d5b3a]"/></div>}<div className="p-6 text-center sm:p-8"><p className="text-sm font-semibold text-[#7a877e]">{exercise.focus} · {exercise.equipment}</p><h1 className="mt-2 font-brand text-4xl tracking-normal sm:text-5xl">{exercise.name}</h1><div className="mt-7">{exercise.mode === "time" ? <><p className="font-mono text-6xl font-semibold tracking-normal text-[#2d5b3a]">{Math.max(0, secondsLeft)}<span className="ml-2 text-xl font-sans font-semibold">sec</span></p><button onClick={() => setRunning(!running)} className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#cbd8cc] px-4 py-2 text-sm font-bold text-[#3d5945]">{running ? <Pause size={16}/> : <Play size={16}/>} {running ? "Pause" : "Resume"}</button></> : <><p className="text-6xl font-semibold tracking-normal text-[#2d5b3a]">{exercise.target}<span className="ml-2 text-xl font-semibold">reps</span></p><button onClick={next} className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#2d5b3a] px-6 py-3 text-sm font-bold text-white">Next exercise <SkipForward size={16}/></button></>}</div></div></div><div className="mt-5 flex justify-center gap-2">{exercises.map((item, index) => <span key={item.id} className={`h-2 rounded-full transition-all ${index === current ? "w-8 bg-[#2d5b3a]" : index < current ? "w-2 bg-[#9bb29d]" : "w-2 bg-[#d6dfd6]"}`}/>)}</div></main></div>;
}
