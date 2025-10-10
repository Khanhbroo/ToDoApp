import TaskCard from "@/components/TaskCard";
import TaskEmptyState from "@/components/TaskEmptyState";
import type { Task } from "@/type/cardType";

const TaskList = () => {
  const filter = "all";
  const filteredTasks = [
    {
      _id: "1",
      title: "Learning React",
      status: "active",
      completedAt: null,
      createdAt: new Date(),
    },
    {
      _id: "2",
      title: "Learning TypeScript",
      status: "completed",
      completedAt: new Date().setDate(new Date().getDate() - 10),
      createdAt: new Date(),
    },
  ] as Task[];

  if (!filteredTasks || filteredTasks.length === 0) {
    return <TaskEmptyState filter={filter} />;
  }

  return (
    <div className="space-y-3">
      {filteredTasks.map((task, index) => (
        <TaskCard key={task._id ?? index} task={task} index={index} />
      ))}
    </div>
  );
};

export default TaskList;
