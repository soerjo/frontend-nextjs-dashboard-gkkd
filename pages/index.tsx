import { NextPage } from "next";
import { Banner } from "../components";
import EventList from "../components/EventsList";
import News from "../components/News";

const Home: NextPage = () => {
  return (
    <>
      <main className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
        <div className="flex flex-wrap bg-white w-full">
          <div className=" w-full lg:basis-2/3 p-2">
            <Banner />
          </div>
          <div className="drop-shadow-lg w-full lg:basis-1/3  p-2 pr-4">
            <News />
          </div>
        </div>

        <div className="flex pt-2 p-2 w-full bg-white ">
          <div className="drop-shadow-lg w-full bg-white  rounded-sm">
            <EventList />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
