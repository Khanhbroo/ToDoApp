import AddTask from "@/components/AddTask";
import DateTimeFilter from "@/components/DateTimeFilter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StatsAndFilters from "@/components/StatsAndFilters";
import TaskList from "@/components/TaskList";
import TaskListPagination from "@/components/TaskListPagination";

const HomePage = () => {
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
          <AddTask />

          {/* Statistic and Filter */}
          <StatsAndFilters />

          {/* Task List */}
          <TaskList />

          {/* Home Page Pagination */}
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <TaskListPagination />
            <DateTimeFilter />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
