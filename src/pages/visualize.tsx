import Head from "next/head";
import { type NextPage } from "next/types";
import { SheetVisualization } from "../components";

const Visualize: NextPage = () => {
  return (
    <>
      <Head>
        <title>CAPRICE | Visualize</title>
        <meta property="og:title" content="CAPRICE | Visualize" key="title_1" />
      </Head>
      <div className="h-screen bg-gradient-to-r from-slate-900/10 via-indigo-900/40 to-zinc-900/10">
        <SheetVisualization />
      </div>
    </>
  );
};

export default Visualize;
