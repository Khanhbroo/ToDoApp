import { useCallback, useEffect, useState } from "react";
import api from "@/lib/axios";
import { visibleTaskLimit } from "@/lib/data";

import { toast } from "sonner";
import type { Task } from "@/type/cardType";

import AddTask from "@/components/AddTask";
import DateTimeFilter from "@/components/DateTimeFilter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StatsAndFilters from "@/components/StatsAndFilters";
import TaskList from "@/components/TaskList";
import TaskListPagination from "@/components/TaskListPagination";

const HomePage = () => {
  const [taskBuffer, setTaskBuffer] = useState<Task[]>([]);
  const [activeTaskCount, setActiveTaskCount] = useState(0);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [filter, setFilter] = useState("all");
  const [dateQuery, setDateQuery] = useState("month");
  const [page, setPage] = useState<number>(1);

  // Logic to fetch tasks from the backend
  const fetchTasks = useCallback(async () => {
    try {
      const res = await api.get(`/tasks?filter=${dateQuery}`);
      setTaskBuffer(res.data.tasks || []);
      setActiveTaskCount(res.data.activeCount || 0);
      setCompletedTaskCount(res.data.completedCount || 0);
    } catch (error) {
      console.log("Error fetching tasks:", error);
      toast.error("Failed to fetch tasks. Please try again.");
    }
  }, [dateQuery]);

  useEffect(() => {
    fetchTasks();
  }, [dateQuery, fetchTasks]);

  useEffect(() => {
    setPage(1);
  }, [filter, dateQuery]);

  //Variable to control the filtered tasks
  const filteredTasks = taskBuffer.filter((task) => {
    switch (filter) {
      case "active":
        return task.status === "active";
      case "completed":
        return task.status === "completed";
      default:
        return true;
    }
  });

  const handleTaskChanged = () => {
    fetchTasks();
  };

  const visibleTasks = filteredTasks.slice(
    (page - 1) * visibleTaskLimit,
    page * visibleTaskLimit
  );

  const totalPages = Math.ceil(filteredTasks.length / visibleTaskLimit);

  const handleNext = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  // Go back 1 page if users delete the final task of 1 page
  if (visibleTasks.length === 0) {
    handlePrev();
  }

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* Soft Lavender Center Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
       radial-gradient(circle at center, #c4b5fd, transparent)
     `,
        }}
      />

      <div className="container pt-8 mx-auto relative z-10">
        <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
          {/* Header of the page */}
          <Header />

          {/* Adding Tasks */}
          <AddTask handleNewTaskAdded={handleTaskChanged} />

          {/* Statistic and Filter */}
          <StatsAndFilters
            activeTaskCount={activeTaskCount}
            completedTaskCount={completedTaskCount}
            filter={filter}
            setFilter={setFilter}
          />

          {/* Task List */}
          <TaskList
            filteredTasks={visibleTasks}
            filter={filter}
            handleTaskChanged={handleTaskChanged}
          />

          {/* Home Page Pagination */}
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <TaskListPagination
              handleNext={handleNext}
              handlePrev={handlePrev}
              handlePageChange={handlePageChange}
              page={page}
              totalPages={totalPages}
            />
            <DateTimeFilter dateQuery={dateQuery} setDateQuery={setDateQuery} />
          </div>

          {/* Footer */}
          <Footer
            activeTaskCount={activeTaskCount}
            completedTaskCount={completedTaskCount}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
