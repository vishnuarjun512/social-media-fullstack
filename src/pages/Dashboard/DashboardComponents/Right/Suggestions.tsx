import { toast } from "@/@/components/ui/use-toast";
import { useUserStore } from "@/src/states/user.state";
import axios from "axios";
import { useEffect, useState } from "react";

type User = {
  _id: string;
  username: string;
  userId: string;
  bio: string;
  profilePicture: string;
};

const Suggestions = () => {
  const { user } = useUserStore();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchSuggestedUsers = async () => {
      const res = await axios.get(`/api/user/getUsers/${user._id}?limit=3`);
      setUsers(res.data.data);
    };
    fetchSuggestedUsers();
  }, []);

  const followUser = async (id: string) => {
    const res = await axios.post(`/api/follower/follow/${user._id}`, {
      toFollow: id,
    });
    if (res.data.error == false)
      toast({
        title: res.data.message,
        description: `Following ${res.data.followedUser.username}`,
      });
    else {
      toast({
        title: `Oops Cant Follow this Person`,
        description: res.data.message,
      });
    }
  };

  return (
    <div className="flex flex-col w-full pr-1">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-xl font-bold">Suggestions</h1>
        <a className="text-base font-semibold text-gray-500 hover:underline">
          See all
        </a>
      </div>
      <div className="flex flex-col gap-3">
        {users.length == 0 ? (
          <div className="flex items-center justify-center py-5 font-bold">
            No Suggestions ...
          </div>
        ) : (
          users.map((item, i) => (
            <div
              key={i}
              className="p-3 rounded-lg gap-2 bg-gray-800 flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <img
                  src={item.profilePicture}
                  alt={`${item.username}'s image`}
                  className="h-7 w-6 rounded-lg"
                />
                <div className="flex flex-col items-start justify-center h-full">
                  <p className="font-bold text-[14px] whitespace-nowrap leading-none ">
                    {item.username}
                  </p>
                  <p className="font-semibold text-[13px] text-gray-500">
                    {item.userId}
                  </p>
                </div>
              </div>
              <button
                onClick={() => {
                  followUser(item._id);
                }}
                className="bg-violet-400 hover:bg-purple-400 px-4 py-2 rounded-3xl"
              >
                Follow
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Suggestions;
