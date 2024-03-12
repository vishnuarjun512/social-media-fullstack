const Suggestions = () => {
  return (
    <div className="flex flex-col w-full pr-1">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-bold">Suggestions</h1>
        <a className="text-base font-semibold text-gray-500 hover:underline">
          See all
        </a>
      </div>
      <div className="flex flex-col gap-3">
        {[
          {
            username: "Pari Paul",
            userImg:
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D",
            userId: "@plat_ori",
          },
          {
            username: "Sumant Hegde",
            userImg:
              "https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhY2V8ZW58MHx8MHx8fDA%3D",
            userId: "@sum_213",
          },
          {
            username: "Jake Tag",
            userImg:
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZhY2V8ZW58MHx8MHx8fDA%3D",
            userId: "@the_jake86",
          },
        ].map((user, i) => (
          <div
            key={i}
            className="p-3 rounded-lg gap-2 bg-gray-800 flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <img
                src={user.userImg}
                alt={`${user.username}'s image`}
                className="h-7 w-6 rounded-lg"
              />
              <div className="flex flex-col items-start justify-center h-full">
                <p className="font-bold text-[14px] whitespace-nowrap leading-none ">
                  {user.username}
                </p>
                <p className="font-semibold text-[13px] text-gray-500">
                  {user.userId}
                </p>
              </div>
            </div>
            <button className="bg-violet-400 hover:bg-purple-400 px-4 py-2 rounded-3xl">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
