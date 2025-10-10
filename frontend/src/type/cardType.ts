export type Task = {
  _id?: string;
  title: string;
  status: "active" | "completed";
  completedAt: number | null;
  createdAt: Date;
};
