import { getProviders, signIn } from "next-auth/react";

interface IProviderProps {
  name: string,
  id: string
}

export default function Login({ providers }) {
  return (
    <div className="bg-black h-screen flex flex-col items-center justify-center space-y-10">
      <h1 className="text-6xl text-neutral-400 font-caveat tracking-wide">My Music</h1>
      {Object.values(providers).map((provider: IProviderProps) => (
        <div key={provider.name}>
          <button 
            className="text-neutral-400 h-[32px] border-b border-black hover:border-neutral-500 tracking-wide font-caveat font-semibold text-[22px]"
            onClick={() => signIn(provider.id, {callbackUrl: '/'})}
          >Login with {provider.name}</button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
