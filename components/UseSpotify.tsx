import { signIn, useSession } from "next-auth/react"
import SpotifyWebApi from "spotify-web-api-node"
import { useEffect } from "react"

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
})

export default function UseSpotify() {
  const { data:session, status } = useSession()
  
  useEffect(() => {
    if(session){
      if(session.error === 'RefreshAccessTokenError') {
        signIn();
      }

      spotifyApi.setAccessToken(session.user.accessToken)
    }
  }, [session])  

  return spotifyApi
}