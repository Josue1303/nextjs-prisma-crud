import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";

async function loadTasks() {
  // const res = await fetch("http://localhost:3000/api/task");
  // const data = await res.json();
  // console.log(data);
  return await prisma.task.findMany();
}

export default async function Home() {
  const tasks = await loadTasks();
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <TaskCard task={task} key={task.id} />
        ))}
      </div>
    </section>
  );
}
