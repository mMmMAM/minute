import { Eye, EyeOff, Github, HelpCircle, LockKeyhole, Mail, Chrome } from "lucide-react";
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Index() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate("/workouts/new");
  };

  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#202124]">
      <div className="grid min-h-screen md:grid-cols-2">
        <section className="flex min-h-screen flex-col bg-[#fafafa] px-6 py-3 sm:px-10 md:px-12 lg:px-16">
          <header className="flex h-10 items-center">
            <Link to="/" aria-label="Pace home" className="font-brand text-[25px] font-semibold tracking-[-0.07em] text-[#222326]">
              pace<span className="text-[#ec4e02]">.</span>
            </Link>
          </header>

          <div className="flex w-full flex-1 flex-col justify-center py-16">
            <div className="mx-auto w-full max-w-[470px]">
              <div className="mb-8 text-center">
                <h1 className="font-brand text-[25px] font-medium leading-[1.34] tracking-[-0.025em] text-[#202124]">Log in to access your workouts</h1>
                <p className="mt-3 text-[14px] leading-5 text-[#6d7075]">Build, share, and train smarter with Pace.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <label className="block text-left">
                  <span className="mb-2 block text-xs font-medium text-[#4e5156]">Email or username</span>
                  <span className="relative block">
                    <Mail size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8c9095]" />
                    <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder="you@example.com" className="h-11 w-full rounded-lg border border-[#dfe1e3] bg-white pl-10 pr-4 text-sm outline-none transition placeholder:text-[#9b9ea3] focus:border-[#ec4e02] focus:ring-2 focus:ring-[#ec4e02]/15" />
                  </span>
                </label>
                <label className="block text-left">
                  <span className="mb-2 block text-xs font-medium text-[#4e5156]">Password</span>
                  <span className="relative block">
                    <LockKeyhole size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8c9095]" />
                    <input value={password} onChange={(event) => setPassword(event.target.value)} type={showPassword ? "text" : "password"} placeholder="Enter your password" className="h-11 w-full rounded-lg border border-[#dfe1e3] bg-white pl-10 pr-11 text-sm outline-none transition placeholder:text-[#9b9ea3] focus:border-[#ec4e02] focus:ring-2 focus:ring-[#ec4e02]/15" />
                    <button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-[#777b80] hover:text-[#222326]">{showPassword ? <EyeOff size={17} /> : <Eye size={17} />}</button>
                  </span>
                </label>
                <button type="submit" className="h-10 w-full rounded-lg bg-[#ec4e02] text-sm font-medium text-white shadow-sm transition hover:bg-[#d94600] focus:outline-none focus:ring-2 focus:ring-[#ec4e02]/30 focus:ring-offset-2">Log in</button>
              </form>

              <button type="button" className="mt-5 w-full text-center text-sm font-medium text-[#575a60] transition hover:text-[#ec4e02]">Forgot password?</button>

              <div className="my-7 flex items-center gap-3 text-xs text-[#96999e]"><span className="h-px flex-1 bg-[#e1e2e4]"/><span>or continue with</span><span className="h-px flex-1 bg-[#e1e2e4]"/></div>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="flex h-10 items-center justify-center gap-2 rounded-lg border border-[#dedfe1] bg-white text-sm font-medium text-[#45484d] transition hover:bg-[#f2f2f2]"><Chrome size={17}/> Google</button>
                <button type="button" className="flex h-10 items-center justify-center gap-2 rounded-lg border border-[#dedfe1] bg-white text-sm font-medium text-[#45484d] transition hover:bg-[#f2f2f2]"><Github size={17}/> GitHub</button>
              </div>
            </div>
          </div>

          <footer className="mx-auto w-full max-w-[470px] border-t border-[#e1e2e4] py-5 text-center text-xs leading-4 text-[#7e8186] sm:flex sm:items-center sm:justify-between sm:text-left"><span>New to Pace? <button className="font-medium text-[#bb3e02] hover:text-[#ec4e02]">Sign up</button></span><a href="mailto:support@pace.fit" className="mt-2 inline-flex items-center justify-center gap-1.5 hover:text-[#ec4e02] sm:mt-0"><HelpCircle size={14}/> Get help</a></footer>
        </section>

        <aside className="relative hidden min-h-screen overflow-hidden bg-[#0f1017] md:block">
          <img src="https://replit.com/cdn-cgi/image/width=3840,quality=80,format=auto/public/images/auth/LoginImage.jpg" alt="A creative training environment" className="absolute inset-0 h-full w-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1017]/15 via-transparent to-[#0f1017]/70" />
          <div className="absolute inset-0 flex items-center justify-center p-12 lg:p-20"><div className="max-w-[520px] text-center text-white"><p className="font-brand text-4xl font-light leading-[1.05] tracking-[-0.045em] lg:text-5xl">Movement is a practice.<br/><span className="text-[#ff7540]">Make it yours.</span></p><p className="mx-auto mt-6 max-w-sm text-sm leading-6 text-white/75">A calmer way to create meaningful workouts and keep your people moving forward.</p></div></div>
          <div className="absolute bottom-8 left-10 right-10 flex items-center justify-between text-xs text-white/60"><span>pace / workout studio</span><span>01 — 04</span></div>
        </aside>
      </div>
    </main>
  );
}
