import { useSession } from "next-auth/react";

export default function Center() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col flex-grow py-5 w-full space-y-5">
      <header className="w-full px-5">
        <div className="flex">
          <h1 className="text-gray-400 ml-auto font-caveat text-[22px]">{session?.user.name}</h1>
        </div>
      </header>
      <div className="text-gray-400 p-5 border-t-[0.1px] border-gray-900">
        Song
      </div>
    </div>
  );
}
