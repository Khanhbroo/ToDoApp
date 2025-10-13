import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import api from "@/lib/axios";
import { cn } from "@/lib/utils";
import type { Task } from "@/type/cardType";
import {
  Calendar,
  CheckCircle2,
  Circle,
  SquarePen,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const TaskCard = ({
  task,
  index,
  handleTaskChanged,
}: {
  task: Task;
  index: number;
  handleTaskChanged: () => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updateTaskTitle, setUpdateTaskTitle] = useState(task.title || "");

  const deleteTask = async (taskId: string) => {
    try {
      if (window.confirm("Are you sure you want to delete this task?")) {
        await api.delete(`/tasks/${taskId}`);
        toast.success("Task deleted successfully!");
        handleTaskChanged();
      }
    } catch (error) {
      console.log("Error deleting task:", error);
      toast.error("Failed to delete the task. Please try again.");
    }
  };

  const updateTask = async () => {
    try {
      if (updateTaskTitle.trim()) {
        setIsEditing(false);
        await api.put(`/tasks/${task._id}`, { title: updateTaskTitle });
        handleTaskChanged();
        toast.success("Task updated to " + updateTaskTitle + " successfully!");
      } else {
        toast.error("Task title cannot be empty.");
      }
    } catch (error) {
      console.log("Error updating task:", error);
      toast.error("Failed to update the task. Please try again.");
    }
  };

  const toggleCardButton = async () => {
    try {
      if (task.status === "active") {
        await api.put(`/tasks/${task._id}`, {
          status: "completed",
          completedAt: new Date().toISOString(),
        });
        toast.success(`Task "${task.title}" marked as completed!`);
      } else {
        await api.put(`/tasks/${task._id}`, {
          status: "active",
          completedAt: null,
        });
        toast.success(`Task "${task.title}" marked as active!`);
      }
      handleTaskChanged();
    } catch (error) {
      console.log("Error toggling task status:", error);
      toast.error("Failed to toggle task status. Please try again.");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      updateTask();
    }
  };

  return (
    <Card
      className={cn(
        "p-4 bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-200 animate-fade-in group",
        task.status === "completed" && "opacity-70"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center gap-4">
        {/* Round circle button */}
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "flex-shrink-0 size-8 rounded-full transition-all duration-200",
            task.status === "completed"
              ? "text-success hover:text-success/80"
              : "text-muted-foreground hover:text-primary"
          )}
          onClick={toggleCardButton}
        >
          {task.status === "completed" ? (
            <CheckCircle2 className="size-5" />
          ) : (
            <Circle className="size-5" />
          )}
        </Button>

        {/* Appear or edit the title */}
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <Input
              placeholder="Need to do anything?"
              className="flex-1 h-12 text-base border-border/50 focus:border-primary/50 focus:ring-primary/20"
              value={updateTaskTitle}
              onChange={(e) => setUpdateTaskTitle(e.target.value)}
              onKeyDown={handleKeyPress}
              onBlur={() => {
                setIsEditing(false);
                setUpdateTaskTitle(task.title || "");
              }}
            />
          ) : (
            <p
              className={cn(
                "text-base transition-all duration-200",
                task.status === "completed"
                  ? "line-through text-muted-foreground"
                  : "text-foreground"
              )}
            >
              {task.title}
            </p>
          )}

          {/* Date create & date completed */}
          <div className="flex items-center gap-2 mt-1">
            <Calendar className="size-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {new Date(task.createdAt).toLocaleDateString("vi-VN")}
            </span>
            {task.completedAt && (
              <>
                <span className="text-xs text-muted-foreground"> - </span>
                <Calendar className="size-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {new Date(task.completedAt).toLocaleString("vi-VN")}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Edit and delete button */}
        <div
          className={cn(
            "gap-2 group-hover:inline-flex animate-slide-up",
            isEditing ? "inline-flex" : "hidden"
          )}
        >
          {/* Edit button */}
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 transition-colors size-8 text-muted-foreground hover:text-info"
            onClick={() => {
              setIsEditing((prev) => !prev);
              setUpdateTaskTitle(task.title || "");
            }}
          >
            <SquarePen className="size-4 " />
          </Button>

          {/* Delete button */}
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 transition-colors size-8 text-muted-foreground hover:text-destructive"
            onClick={() => deleteTask(task._id || "")}
          >
            <Trash2 className="size-4 " />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
