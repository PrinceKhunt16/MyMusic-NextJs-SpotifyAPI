import "../styles/globals.css";
import type { AppProps } from "next/app";
import { getSession, SessionProvider } from "next-auth/react";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  )
}

export default MyApp;

export async function getServerSideProps(context){
  const session = await getSession(context)

  return {
    props: {
      session
    }
  }
}