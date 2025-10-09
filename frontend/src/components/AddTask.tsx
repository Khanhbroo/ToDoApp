import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

const AddTask = () => {
  return (
    <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
      <div className="flex flex-col gap-3 sm:flex-row items-center">
        <Input
          type="text"
          placeholder="Wanna do something?"
          className="h-12 text-base bg-slate-50 sm:flex-1 border-boder/50 focus:border-primary/50 focus:ring-primary/20"
        />
        <Button variant="gradient" size="xl" className="px-6 max-sm:w-full">
          <Plus size={5} />
          Thêm
        </Button>
      </div>
    </Card>
  );
};

export default AddTask;
