import api from "@/lib/axios";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const AddTask = ({
  handleNewTaskAdded,
}: {
  handleNewTaskAdded: () => void;
}) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const addTask = async () => {
    if (newTaskTitle.trim()) {
      try {
        await api.post("/tasks", {
          title: newTaskTitle,
        });
        toast.success(`Task "${newTaskTitle}" added successfully.`);
        handleNewTaskAdded();
      } catch (error) {
        console.log("Error adding task:", error);
        toast.error("Failed to add a new task. Please try again.");
      }

      setNewTaskTitle("");
    } else {
      toast.error("Task title cannot be empty.");
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTask();
    }
  };

  return (
    <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
      <div className="flex flex-col gap-3 sm:flex-row items-center">
        <Input
          type="text"
          placeholder="Wanna do something?"
          className="h-12 text-base bg-slate-50 sm:flex-1 border-boder/50 focus:border-primary/50 focus:ring-primary/20"
          value={newTaskTitle}
          onChange={(event) => setNewTaskTitle(event.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button
          variant="gradient"
          size="xl"
          className="px-6 max-sm:w-full"
          onClick={addTask}
          disabled={!newTaskTitle.trim()}
        >
          <Plus size={5} />
          Thêm
        </Button>
      </div>
    </Card>
  );
};

export default AddTask;
