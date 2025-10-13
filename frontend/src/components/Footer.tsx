const Footer = ({
  completedTaskCount = 0,
  activeTaskCount = 0,
}: {
  completedTaskCount: number;
  activeTaskCount: number;
}) => {
  return (
    <>
      {completedTaskCount + activeTaskCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTaskCount > 0 && (
              <span>
                🎉 Wonderful! You have completed {completedTaskCount}{" "}
                {completedTaskCount > 0 ? "tasks" : "task"}.{" "}
              </span>
            )}
            {activeTaskCount > 0 &&
              `You have ${activeTaskCount} ${
                activeTaskCount > 1 ? "tasks" : "task"
              } remaining. Keep going! 🚀`}

            {completedTaskCount === 0 && activeTaskCount > 0 && (
              <>
                Let's start doing {activeTaskCount}{" "}
                {activeTaskCount > 1 ? "tasks" : "task"}!{" "}
              </>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
