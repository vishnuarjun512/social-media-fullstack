import { create } from "zustand";
type UserInfo = {
  user: any;
  userId: any;
  userInfo: any;
  logUser: () => void;
  logUserInfo: () => void;
  getUserId:()=> void;
  setUser: (value: any) => void;
  setUserInfo: (value: any) => void;
};

export const useUserStore = create<UserInfo>((set, get) => ({
  user: {},
  userInfo: {},
  userId: "",
  logUser: () => {
    console.log("User name is ", get().user);
  },
  logUserInfo: () => {
    console.log("User Info is ", get().userInfo);
  },
  getUserId:() => {
    return localStorage.getItem("userId");
  },
  setUser: (value: any) => {
    localStorage.setItem("userId",value._id)
    set({ user: value });
  }, // Update the user state
  setUserInfo: (value:any) => { 
    set({userInfo:value})
  }
}));