import { ArrowLeft, Construction } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Placeholder() {
  const location = useLocation();
  const name = location.pathname.slice(1).replace(/-/g, " ") || "page";
  return <div className="min-h-screen bg-[#f7f7f5] px-5 py-8 text-[#142117]"><Link to="/" className="inline-flex items-center gap-1 text-sm font-bold text-[#547538]"><ArrowLeft size={16}/> Back to overview</Link><div className="mx-auto mt-24 max-w-lg rounded-[28px] border border-[#e1e5de] bg-white p-9 text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#edf4e7] text-[#547538]"><Construction size={25}/></span><h1 className="mt-5 font-display text-3xl font-semibold capitalize tracking-[-0.05em]">{name}</h1><p className="mt-3 text-[#6e7a71]">This workspace is ready for its next chapter. Continue prompting to shape it to your workflow.</p></div></div>;
}
