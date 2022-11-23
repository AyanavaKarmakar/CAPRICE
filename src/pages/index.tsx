import { type NextPage } from "next";
import Head from "next/head";
import { ExcelFileUploader } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CAPRICE</title>
        <meta property="og:title" content="CAPRICE" key="title_0" />
      </Head>
      <div className="h-screen bg-gradient-to-r from-slate-900/10 via-cyan-900/40 to-zinc-900/10">
        <ExcelFileUploader />
      </div>
    </>
  );
};

export default Home;
