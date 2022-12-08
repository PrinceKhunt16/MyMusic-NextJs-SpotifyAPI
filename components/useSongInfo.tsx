import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { currentTrackedIdState, isPlayingState } from '../atoms/songAtom'
import UseSpotify from './UseSpotify'

export default function UseSongInfo() {
  const spotifyApi = UseSpotify()
  const [currentIdTracked, setCurrentIdTracked] = useRecoilState(currentTrackedIdState)
  const [songInfo, setSongInfo] = useState(null)

  useEffect(() => {
    const fetchSongInfo = async () => {
      if(currentIdTracked){
        const trackInfo = await fetch(
          `https://api/spotify.com/v1/tracks/${currentIdTracked}`,
          {
            headers: {
              Authorization: `Bearer ${spotifyApi.getAccessToken()}`
            }
          }
        ).then((res) => {
          return res.json()
        })
        .catch((e) => {
          console.log(e)
        }) 

        setSongInfo(trackInfo)
        console.log(trackInfo)
      }
    }

    fetchSongInfo()
  }, [currentIdTracked, spotifyApi])
  
  return songInfo
}
