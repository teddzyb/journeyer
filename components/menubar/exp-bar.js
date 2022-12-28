import { useState, useEffect } from "react";

const ExpBar = ({ status }) => {
  const { level, xp, xpToNextLevel } = status || {};
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (xp && xpToNextLevel) setProgress((xp / xpToNextLevel) * 100);
  }, [xp, xpToNextLevel]);

  return (
    <div className="flex items-center text-sm leading-none gap-3">
      <div className="rounded-sm bg-translucent outline outline-1 outline-translucent w-full h-4">
        <div
          style={{ width: `${progress}%` }}
          className={`rounded-l-sm bg-malachite h-full transition-all ease-in-out duration-500`}
        />
      </div>
      {level ?? 1}
    </div>
  );
};

export default ExpBar;
