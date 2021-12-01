import Head from "next/head";
import Sidebar from "../components/Sidebar";

function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />
      </main>
    </div>
  );
}

export default Home;
