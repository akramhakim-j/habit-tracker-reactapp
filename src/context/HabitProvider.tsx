import { isSameDay } from "date-fns";
import { type ReactNode } from "react";
import { HabitContext, type Habit } from "./useHabit";
import { useLocalStorage } from "../hooks/useLocalStorage";

type HabitProviderProps = {
  children: ReactNode;
};

export function HabitProvider({ children }: HabitProviderProps) {
  const [habits, setHabits] = useLocalStorage<Habit[]>("Habits", []);

  function addHabit(habit: string) {
    setHabits((habits) => [
      ...habits,
      { id: habits.length + 1, name: habit, completions: [new Date()] },
    ]);
  }

  function deleteHabit(id: number) {
    setHabits((habits) => habits.filter((habit) => habit.id !== id));
  }

  function toggleHabit(id: number, date: Date) {
    setHabits((habits) =>
      habits.map((habit) => {
        if (habit.id !== id) return habit;

        const alreadyDone = habit.completions.some((d) => isSameDay(d, date));
        const completions = alreadyDone
          ? habit.completions.filter((d) => !isSameDay(d, date))
          : [...habit.completions, date];

        return { ...habit, completions };
      }),
    );
  }

  return (
    <HabitContext value={{ habits, addHabit, deleteHabit, toggleHabit }}>
      {children}
    </HabitContext>
  );
}
