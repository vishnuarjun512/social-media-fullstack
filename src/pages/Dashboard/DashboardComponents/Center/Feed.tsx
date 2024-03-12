import { IconFileLike, IconMessage } from "@tabler/icons-react";
import { useState } from "react";

const Feed = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center overflow-y-scroll">
      <div className="flex items-center justify-between w-full px-4 pb-3">
        <h1 className="text-xl font-bold">Feeds</h1>
        <div className="flex gap-4 items-center">
          {["All", "Following", "Popular", "Newest"].map((item, i) => (
            <div
              onClick={() => setSelected(i)}
              key={i}
              className={`text-gray-500 ${
                selected == i && "text-white underline"
              }  font-bold hover:scale-105 transition-all duration-100 ease-in-out cursor-pointer`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-2 overflow-y-auto gap-x-2 gap-y-3">
        {[
          {
            user: "Lebron James",
            userImage:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
            img: "https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            likes: 123,
            comments: 123,
          },
          {
            user: "Lebron James",
            userImage:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
            img: "https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            likes: 123,
            comments: 123,
          },
          {
            user: "Lebron James",
            userImage:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
            img: "https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            likes: 123,
            comments: 123,
          },
          {
            user: "Lebron James",
            userImage:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
            img: "https://images.unsplash.com/photo-1423479185712-25d4a4fe1006?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
            likes: 123,
            comments: 123,
          },
        ].map((post, i) => (
          <div
            className="flex flex-col items-center gap-1 p-1 bg-gray-600 rounded-xl hover:scale-[1.02] duration-200 ease-out transition-all"
            key={i}
          >
            <img
              className="min-h-[300px] rounded-xl"
              src={post.img}
              alt={`${post.user}'s post`}
            />
            <div className="w-full px-3 py-1 flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <img
                  className="h-5 w-5 rounded-full"
                  src={post.userImage}
                  alt={post.user}
                />
                <p>{post.user}</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 items-center">
                  <IconFileLike />
                  {post.likes}
                </div>
                <div className="flex gap-1 items-center">
                  <IconMessage />
                  {post.comments}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
