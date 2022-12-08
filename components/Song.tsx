import React from 'react'
import { useRecoilState } from 'recoil'
import SpotifyWebApi from 'spotify-web-api-node'
import { currentTrackedIdState, isPlayingState } from '../atoms/songAtom'
import UseSpotify from './UseSpotify'

const Song = ({order, track}) => {
  const spotifyApi = UseSpotify()
  const [currentIdTracked, setCurrentIdTracked] = useRecoilState(currentTrackedIdState)
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState)

  const playSong = async () => {
    setCurrentIdTracked(track.track.id)
    setIsPlaying(true)

    spotifyApi.play({
      uris: [track.track.url]
    })

    // const d = spotifyApi.getTrack(track.track.id)
    // console.log(d)
  }
  
  const msToMin = (ms) => {
    let min = Math.floor((ms / 1000 / 60) << 0)
    let sec = Math.floor((ms / 1000) % 60);    
    return [min, sec]
  }

  function msConversion(millis) {
    let sec = Math.floor(millis / 1000);
    let hrs = Math.floor(sec / 3600);
    sec -= hrs * 3600;
    let min = Math.floor(sec / 60);
    sec -= min * 60;
  
    sec = '' + sec;
    sec = ('00' + sec).substring(sec.length);
  
    if (hrs > 0) {
      min = '' + min;
      min = ('00' + min).substring(min.length);
      return hrs + " : " + min + " : " + sec;
    }
    else {
      return min + " : " + sec;
    }
  }

  return (
    <div onClick={playSong} className='grid grid-cols-2 p-3 hover:bg-[#ffffff4d] hover:text-neutral-300 text-neutral-400 font-sans tracking-wide'>
      <div className='flex item-center space-x-4'>
        <img className='h-12 w-12 object-cover' src={track.track.album.images[0].url} alt="" />
        <div>
          <p className='truncate'>{track.track.name}</p>
          <p>{track.track.artists[0].name}</p>
        </div>
      </div>
      <div className='flex item-center justify-between ml-auto xl:ml-0'>
        <p className='hidden xl:inline'>{track.track.album.name}</p>
        {/* <p>{msToMin(track.track.duration_ms)[0]}{" : "}{msToMin(track.track.duration_ms)[1] < 10 ? "0" + msToMin(track.track.duration_ms)[1] : msToMin(track.track.duration_ms)[1]}</p> */}
        <p>{msConversion(track.track.duration_ms)}</p>
      </div>
    </div>
  )
}

export default Song