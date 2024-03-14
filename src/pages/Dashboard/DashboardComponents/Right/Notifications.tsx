const Notifications = () => {
  return (
    <div className="flex flex-col w-full pr-1">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-bold">Notifications</h1>
        <a className="text-base font-semibold text-gray-500 hover:underline">
          See all
        </a>
      </div>
      <div className="flex flex-col gap-3">
        {[
          {
            type: "request",
            user: "mike",
            userImg:
              "https://plus.unsplash.com/premium_photo-1664453547090-0e8a92a6ed4c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
          },
          {
            type: "like",
            user: "ali",
            userImg:
              "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
            likedImg:
              "https://plus.unsplash.com/premium_photo-1664453547090-0e8a92a6ed4c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
          },
        ].map((notification, i) => {
          if (notification.type == "request") {
            return (
              <div
                key={i}
                className="flex flex-col gap-3 bg-gray-700 p-2 rounded-lg"
              >
                <div className="flex gap-2 items-center">
                  <img
                    className="h-7 w-6 rounded-lg"
                    src={notification.userImg}
                    alt={`Notification from ${notification.user}`}
                  />
                  <p className="text-sm">
                    <span className="font-bold">{notification.user}</span> wants
                    to add you to friends.
                  </p>
                </div>
                <div className="flex items-center justify-around">
                  <button className="bg-blue-400 hover:bg-green-400 px-4 py-2 rounded-xl">
                    Accept
                  </button>
                  <button className="bg-gray-400 hover:bg-red-400 px-4 py-2 rounded-xl">
                    Decline
                  </button>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={i}
                className="flex items-center justify-around gap-2 bg-gray-700 p-2 rounded-lg"
              >
                <img
                  className="h-7 rounded-lg"
                  src={notification.userImg}
                  alt={`Notification from ${notification.user}`}
                />
                <p className="text-sm">
                  <span className="font-bold">{notification.user}</span> likes
                  your photo
                </p>
                <img
                  className="h-7 w-6 rounded-lg"
                  src={notification.likedImg}
                  alt={`Liked your photo`}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Notifications;
