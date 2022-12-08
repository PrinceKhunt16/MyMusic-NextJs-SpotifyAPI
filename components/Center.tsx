import { useEffect, useState } from "react";
import { playlistState, playlistIdState } from "../atoms/playlistAtom";
import { useRecoilValue, useRecoilState } from "recoil"
import { useSession } from "next-auth/react";
import UseSpotify from "./UseSpotify";

const colors = [
  'from-zinc-500',
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
  'from-neutral-500',              
]                                          

export default function Center() {
  const spotifyApi = UseSpotify()
  const { data: session } = useSession()
  const [color, setColor] = useState(null)
  const playlistId = useRecoilValue(playlistIdState)
  const [playlist, setPlaylist] = useRecoilState(playlistState)

  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * 19)])
  }, [playlist]) 

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
    <div className="flex flex-col flex-grow relative w-full">
      <section className={`w-full bg-gradient-to-b transition-all to-black ${color} h-80 text-gray-400`}>
        <div className="mt-40 ml-20">
          <img className="h-44 w-44 shadow-2xl" src={playlist?.images?.[0]?.url} alt="" />
        </div>
      </section>
    </div> 
  );
}
