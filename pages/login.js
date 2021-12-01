import Image from "next/image";
import { getProviders, signIn } from "next-auth/react";
import spotifyLogo from "../public/assets/spotify.png";

function Login({ providers }) {
  return (
    <div className="bg-black flex flex-col justify-center items-center h-screen p-10">
      <div className="flex max-w-xs h-24 items-center">
        <Image src={spotifyLogo} alt="spotify_logo" />
      </div>
      {Object.values(providers).map((provider) => (
        <div
          key={provider.name}
          className="bg-[#1ED860] text-white 
          p-5 mt-10 rounded-full shadow-lg hover:bg-[#1cb853] cursor-pointer"
        >
          <button
            className="text-white outline-none"
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
