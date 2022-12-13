import { useEffect, useState } from "react";
import { playlistState, playlistIdState } from "../atoms/playlistAtom";
import { useRecoilValue, useRecoilState } from "recoil"
import { useSession } from "next-auth/react";
import UseSpotify from "./UseSpotify";
import Songs from "./Songs";

const colors = [
  'from-indigo-500',
  'from-blue-500',
  'from-green-500',
  'from-red-500',
  'from-yellow-500',
  'from-pink-500',
  'from-purple-500',
  'from-cyan-500', 
  'from-rose-500',
  'from-amber-500', 
  'from-emerald-500',
  'from-teal-500',
  'from-orange-500',                
  'from-fuchsia-500',
  'from-sky-500',  
  'from-lime-500',
  'from-violet-500',               
]                                          

export default function Center() {
  const spotifyApi = UseSpotify()
  const { data: session } = useSession()
  const [color, setColor] = useState(null)
  const playlistId = useRecoilValue(playlistIdState)
  const [playlist, setPlaylist] = useRecoilState(playlistState)

  useEffect(() => {
    setTimeout(() => {
      setColor(colors[Math.floor(Math.random() * 17)])
    }, 300)
  }, [playlistId]) 

  useEffect(() => {
    if(spotifyApi.getAccessToken()){
      spotifyApi.getPlaylist(playlistId)
        .then((data) => {
          setPlaylist(data.body)
        }) 
        .catch((e) => {
          console.log(e)
        }) 
    } 
  }, [session, playlistId])

  return (
    <div className="h-screen overflow-y-scroll flex flex-col flex-grow relative w-full">
      <section className={`pl-10 w-full bg-gradient-to-b transition-all to-black ${color} h-80 text-neutral-400`}>
        <div className="mt-10 md:mt-40 flex flex-col md:flex-row items-start md:items-end gap-6 md:gap-10">
          <img className="h-44 w-44 shadow-sm" src={playlist?.images?.[0]?.url} alt="" />
          <div className="font-noto">
            <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold">{playlist?.name}</h1>
          </div>
        </div>
        <div className="mr-10 mt-8">
          <Songs />
        </div>
      </section>
    </div> 
  );
}
