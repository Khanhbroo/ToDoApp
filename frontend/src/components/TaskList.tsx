import TaskCard from "@/components/TaskCard";
import TaskEmptyState from "@/components/TaskEmptyState";
import type { Task } from "@/type/cardType";

const TaskList = ({ filteredTasks }: { filteredTasks: Task[] }) => {
  const filter = "all";

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
