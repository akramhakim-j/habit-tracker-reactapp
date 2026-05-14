import { useState, type SubmitEvent } from "react";
import { Button } from "./Button";
import { useHabits } from "../context/useHabit";

export function HabitForm() {
  const [habit, setHabit] = useState("");
  const { addHabit } = useHabits();

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    if (!habit) return;
    setHabit("");
    addHabit(habit);
  }

  return (
    <form className="flex gap-2" onSubmit={handleSubmit}>
      <input
        value={habit}
        onChange={(e) => setHabit(e.target.value)}
        className="flex-1 rounded-lg bg-zinc-800 px-4 py-2 outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
        placeholder="New habit..."
      />
      <Button disabled={!habit} className="rounded-lg px-4 py-2 font-medium">
        Add Habit
      </Button>
    </form>
  );
}
