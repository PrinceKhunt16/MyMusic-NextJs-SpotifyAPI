import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { currentTrackedIdState, isPlayingState } from '../atoms/songAtom'
import UseSongInfo from './useSongInfo'
import UseSpotify from './UseSpotify'

export default function Player() {
  const spotifyApi = UseSpotify()
  const { data: session } = useSession()
  const [currentIdTracked, setCurrentIdTracked] = useRecoilState(currentTrackedIdState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)
  const [volume, setVolume] = useState(50)

  const songInfo = UseSongInfo()

  const fetchCurrentSong = () => {
    if(!songInfo){
      spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        setCurrentIdTracked(data.body?.item.id)
        console.log(data.body?.item)
        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          setIsPlaying(data.body?.is_playing)
        })
      })
    }
  }

  useEffect(() => {
    if(spotifyApi.getAccessToken() && !currentIdTracked){
      fetchCurrentSong()
      setVolume(50)
    }
  }, [currentIdTracked, spotifyApi, session])

  return (
    <div className='text-white h-24 bg-gradient-to-b from-black to-neutral-900 grid grid-cols-3 text-xs md:text-base px-2 md:px-8'>      
      <div>
        <img className='hidden md:inline h-10 w-10' src={songInfo?.album.images?.[0]?.url} alt="" />
      </div>
      <div>
        <h3>{songInfo?.name}</h3>
        <h3>{songInfo?.artists?.[0]?.name}</h3>
      </div>
    </div>
  )
}
