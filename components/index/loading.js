import { Icon } from "@iconify/react";
import loadingLoop from "@iconify/icons-line-md/loading-loop";

const Loading = () => {
  return (
    <main className="abaolute flex flex-col items-center justify-center h-screen">
      <Icon icon={loadingLoop} className="w-10 h-10 animate-spin" />
    </main>
  );
};

export default Loading;
