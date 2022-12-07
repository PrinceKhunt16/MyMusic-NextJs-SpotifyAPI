import { useEffect, useState } from "react";

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
  'from-slate-500',                 
  'from-fuchsia-500', 
  'from-gray-500',
  'from-sky-500',  
  'from-lime-500',
  'from-violet-500',               
  'from-neutral-500',              
]                                          

export default function Center() {
  const [color, setColor] = useState(null)

  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * 21)])
  }, []) 

  return (
    <div className="flex flex-col flex-grow relative w-full">
      <section className={`w-full bg-gradient-to-b to-black ${color} h-80 text-gray-400`}>
      </section>
    </div>
  );
}
