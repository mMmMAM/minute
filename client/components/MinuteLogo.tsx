import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";

export default function MinuteLogo({ compact = false }: { compact?: boolean }) {
  return <Link to="/program" aria-label="Minute home" className="inline-flex items-center gap-2.5"><span className={`grid place-items-center rounded-md bg-[#7f211b] text-white ${compact ? "h-9 w-9" : "h-10 w-10"}`}><Dumbbell size={compact ? 18 : 20} strokeWidth={2.2}/></span>{!compact && <span className="font-brand text-[29px] font-semibold tracking-[-0.08em] text-[#1d2b21]">minute<span className="text-[#7f211b]">.</span></span>}</Link>;
}
