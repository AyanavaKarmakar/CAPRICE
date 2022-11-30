import { type NextPage } from "next";
import Head from "next/head";
import { ExcelFileUploader, SheetVisualization } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CAPRICE</title>
        <meta property="og:title" content="CAPRICE" key="title_0" />
      </Head>
      <div className="bg-gradient-to-r from-indigo-900/10 via-cyan-900/40 to-violet-900/10">
        <ExcelFileUploader />
        <SheetVisualization />
        <footer className="p-5 text-center text-xl tracking-wider">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://github.com/AyanavaKarmakar"
            target="_blank"
            rel="noreferrer"
            className="capitalize text-cyan-100 hover:underline"
          >
            Ayanava Karmakar
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
