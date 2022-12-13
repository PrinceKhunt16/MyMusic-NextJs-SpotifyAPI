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
    <>
    
    </>
  )
}
