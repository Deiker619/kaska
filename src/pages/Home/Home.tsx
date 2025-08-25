import { useAuthStore } from "@/store/session/useAuthStore";

export const Home = () => {
  const user = useAuthStore((store)=> store.user)
  return (
    <>
      <div className="">home {user?.email}</div>
    </>
  );
};
