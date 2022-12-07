import { signOut } from "next-auth/react"

export default function Sidebar() {
  return (
    <div className="text-gray-400 w-60 font-caveat text-[22px] tracking-wide py-5 border-r border-gray-900 space-y-2 h-screen overflow-y-scroll">
      <button className="flex items-center gap-2 hover:text-gray-400 px-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        <p>Home</p>
      </button>
      <button className="flex items-center gap-2 hover:text-gray-400 px-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <p>Search</p>
      </button>
      <button className="flex items-center gap-2 hover:text-gray-400 px-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
          />
        </svg>
        <p>Your Library</p>
      </button>
      <hr className="border-t-[0.1px] border-gray-900" />
      <button className="flex items-center gap-2 hover:text-gray-400 px-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>Create Playlist</p>
      </button>
      <button className="flex items-center gap-2 hover:text-gray-400 px-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
        <p>Songs</p>
      </button>
      <button className="flex items-center gap-2 hover:text-gray-400 px-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <p>Your Episodes</p>
      </button>
      <button 
        className="flex items-center gap-2 hover:text-gray-400 px-5"
        onClick={() => signOut()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
        <p>Log out</p>
      </button>
      <hr className="border-t-[0.1px] border-gray-900" />
      <p className="cursor-pointer hover:text-gray-400 px-5">Airplane Mode</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Astral traveling</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Driving vocals</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Nostalgic Journeys</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Music that Heals</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Every Shade of Blue</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">All Time Low Playlist</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">No more of you</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Making onions cry</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Lonely daydreams</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Crying favorites</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Airplane Mode</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Astral traveling</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Driving vocals</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Nostalgic Journeys</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Music that Heals</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Every Shade of Blue</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">All Time Low Playlist</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">No more of you</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Making onions cry</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Lonely daydreams</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Crying favorites</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Airplane Mode</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Astral traveling</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Driving vocals</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Nostalgic Journeys</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Music that Heals</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Every Shade of Blue</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">All Time Low Playlist</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">No more of you</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Making onions cry</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Lonely daydreams</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Crying favorites</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Airplane Mode</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Astral traveling</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Driving vocals</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Nostalgic Journeys</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Music that Heals</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Every Shade of Blue</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">All Time Low Playlist</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">No more of you</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Making onions cry</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Lonely daydreams</p>
      <p className="cursor-pointer hover:text-gray-400 px-5">Crying favorites</p>
    </div>
  );
}
