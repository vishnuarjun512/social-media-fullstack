const Stories = () => {
  return (
    <div className="min-h-[220px] flex items-center gap-3 overflow-x-scroll overflow-y-hidden">
      {[
        {
          username: "John doe",
          user: "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
          story:
            "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          username: "John doe",
          user: "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
          story:
            "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          username: "John doe",
          user: "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
          story:
            "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          username: "John doe",
          user: "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
          story:
            "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          username: "John doe",
          user: "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
          story:
            "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          username: "John doe",
          user: "https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
          story:
            "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        },
      ].map((item, i) => (
        <div
          key={i}
          style={{ backgroundImage: `url(${item.story})` }}
          className="inset-0 h-full w-full bg-cover bg-center cursor-pointer rounded-[36px] relative min-w-[150px] hover:scale-105 transition-all duration-200 ease-in-out"
        >
          <img
            className="absolute rounded-lg top-4 left-4 border-2 border-white h-[40px] w-[40px]"
            src={item.user}
            alt={`Story of ${item.user}`}
          />
          <p className=" font-semibold absolute bottom-3 left-[50%] -translate-x-[50%]">
            {item.username}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
