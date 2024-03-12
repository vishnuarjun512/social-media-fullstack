import Feed from "./Feed";
import Stories from "./Stories";

const Center = () => {
  return (
    <div className=" bg-gray-900/70 p-2 rounded-xl flex col-span-6 md:col-span-3 flex-col h-full overflow-hidden">
      <Stories />
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-5 h-[2px] w-full" />
      <Feed />
    </div>
  );
};

export default Center;
