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
      <ExcelFileUploader />
    </>
  );
};

export default Home;
