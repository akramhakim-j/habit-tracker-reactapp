import { createContext, useContext } from "react";

export type Habit = {
  id: number;
  name: string;
  completions: Date[];
};

type Context = {
  habits: Habit[];
  addHabit: (habit: string) => void;
  deleteHabit: (id: number) => void;
  toggleHabit: (id: number, date: Date) => void;
};

export const HabitContext = createContext<null | Context>(null);

export function useHabits() {
  const habitContext = useContext(HabitContext);
  if (!habitContext) {
    throw new Error("useHabit must be used within a HabitProvider");
  }

  return habitContext;
}
