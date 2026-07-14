export type LibraryExercise = { id: number; name: string; focus: string; equipment: string; detail: string; media?: string };

export const starterExercises: LibraryExercise[] = [
  { id: 1, name: "World's Greatest Stretch", focus: "Mobility", equipment: "Bodyweight", detail: "Alternating sides" },
  { id: 2, name: "Goblet Squat", focus: "Legs", equipment: "Dumbbell", detail: "Keep chest tall" },
  { id: 3, name: "Dumbbell Row", focus: "Arms & back", equipment: "Dumbbells", detail: "Each side" },
  { id: 4, name: "Dead Bug", focus: "Core", equipment: "Bodyweight", detail: "Move with control" },
];

const storageKey = "minute.exercise-library";

export function loadExercises() {
  if (typeof window === "undefined") return starterExercises;
  const stored = window.localStorage.getItem(storageKey);
  if (!stored) {
    window.localStorage.setItem(storageKey, JSON.stringify(starterExercises));
    return starterExercises;
  }
  return JSON.parse(stored) as LibraryExercise[];
}

export function saveExercises(exercises: LibraryExercise[]) {
  window.localStorage.setItem(storageKey, JSON.stringify(exercises));
}
