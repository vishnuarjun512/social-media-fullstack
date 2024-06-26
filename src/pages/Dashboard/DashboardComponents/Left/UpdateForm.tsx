import { Label } from "@/@/components/ui/label";
import { Input } from "@/@/components/ui/input";
import { useUserStore } from "@/src/states/user.state";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  username: z.string().min(3).max(20).nonempty(),
  email: z.string().email(),
  bio: z.string().max(100),
  hikeHandle: z.string().min(3).max(20),
});

const UpdateForm = () => {
  const { user } = useUserStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      hikeHandle: user.hikeHandle,
    },
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
      <div className="grid gap-4 py-4">
        <div className="flex flex-col justify-center">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right text-gray-200">
              Username
            </Label>
            <Input
              id="username"
              className="col-span-3"
              {...register("username")}
            />
          </div>
          {errors.username && (
            <span className="text-right pr-2 pt-1 max-w-full text-red-300 font-semibold text-xs">
              {/* @ts-ignore */}
              {errors.username.message}
            </span>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right text-gray-200">
              Email
            </Label>
            <Input id="email" {...register("email")} className="col-span-3" />
          </div>
          {errors.username && (
            <span className="text-right pr-2 pt-1 max-w-full text-red-300 font-semibold text-xs">
              {/* @ts-ignore */}
              {errors.email?.message}
            </span>
          )}
        </div>
      </div>
      <button
        className="text-white bg-blue-950/90 p-3 rounded-xl hover:bg-blue-900"
        type="submit"
      >
        Save changes
      </button>
    </form>
  );
};

export default UpdateForm;
