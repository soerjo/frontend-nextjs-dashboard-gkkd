import { NextPage } from "next";
import { Banner } from "../components";
import EventList from "../components/EventsList";
import News from "../components/News";

const Home: NextPage = () => {
  return (
    <>
      <main className="container px-8 mx-auto flex flex-wrap items-center justify-between bg-white">
        <div className="flex flex-wrap md:flex-nowrap  items-center w-full gap-2">
          <h1>Judul web</h1>
        </div>
      </main>
    </>
  );
};

export default Home;
