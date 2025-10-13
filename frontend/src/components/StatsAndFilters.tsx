import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FilterType } from "@/lib/data";
import { Filter } from "lucide-react";

const StatsAndFilters = ({
  completedTaskCount = 0,
  activeTaskCount = 0,
  filter = "all",
  setFilter,
}: {
  completedTaskCount: number;
  activeTaskCount: number;
  filter: string;
  setFilter: (filter: string) => void;
}) => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      {/* Stats */}
      <div className="flex gap-3">
        <Badge
          variant="secondary"
          className="bg-white/50 text-accent-foreground border-info/20"
          onClick={() => setFilter("active")}
        >
          {activeTaskCount} {FilterType.active}
        </Badge>
        <Badge
          variant="secondary"
          className="bg-white/50 text-success border-success/20"
          onClick={() => setFilter("completed")}
        >
          {completedTaskCount} {FilterType.completed}
        </Badge>
      </div>

      {/* Filter */}
      <div className="flex flex-col gap-2 sm:flex-row">
        {Object.keys(FilterType).map((type) => (
          <Button
            className="capitalize max-sm:justify-start"
            key={type}
            variant={filter === type ? "gradient" : "ghost"}
            size="sm"
            onClick={() => setFilter(type)}
          >
            <Filter className="size-4" />
            {FilterType[type as keyof typeof FilterType]}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default StatsAndFilters;
