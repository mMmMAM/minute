import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";
import Placeholder from "./pages/Placeholder";
import Program from "./pages/Program";
import WorkoutBuilder from "./pages/WorkoutBuilder";
import Workouts from "./pages/Workouts";
import ExerciseLibrary from "./pages/ExerciseLibrary";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/program" element={<Program />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/workouts/new" element={<WorkoutBuilder />} />
          <Route path="/exercise-library" element={<ExerciseLibrary />} />
          <Route path="/:section" element={<Placeholder />} />
          <Route path="*" element={<Placeholder />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
