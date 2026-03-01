import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <main className="mx-auto max-w-xl px-4 py-12">
      <h1 className="mb-8 text-2xl font-bold">Task Manager</h1>
      <TaskList />
    </main>
  );
}
