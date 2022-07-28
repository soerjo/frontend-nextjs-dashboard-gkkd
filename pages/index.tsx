import { NextPage } from "next";
import { Banner } from "../components";
import EventList from "../components/EventsList";
import News from "../components/News";

const Home: NextPage = () => {
  return (
    <>
      <main className="container px-8 mx-auto flex flex-wrap items-center justify-between bg-white">
        <div className="flex flex-wrap md:flex-nowrap  items-center w-full gap-2">
          <div className=" w-full lg:basis-2/3">
            <Banner />
          </div>
          <div className="drop-shadow-lg w-full lg:basis-1/3">
            <News />
          </div>
        </div>

        <div className="flex pt-2 p-2 w-full ">
          <div className="w-full">
            <EventList />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
