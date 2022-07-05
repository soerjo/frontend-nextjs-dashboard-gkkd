import React, { useState } from "react";
import Flier from "./Flier";
import { FlierType } from "./Flier";

const EventFliers: FlierType[] = [
  {
    id: "01",
    title: "YouthIgnite",
    image: "",
    date: 1655569706165,
    user: "blesscomn youth",
    userImage: "",
  },
  {
    id: "02",
    title: "WitnessRescue",
    image: "",
    date: 1655569706165,
    user: "blesscomn Witness",
    userImage: "",
  },
  {
    id: "03",
    title: "Retreat Way-Ex",
    image: "",
    date: 1655569706165,
    user: "gkkd",
    userImage: "",
  },
  {
    id: "04",
    title: "Seminar Karyawan",
    image: "",
    date: 1655569706165,
    user: "blesscomn Excellent",
    userImage: "",
  },
  {
    id: "05",
    title: "Ibadah Minggu GKKD-C",
    image: "/images/event01.png",
    date: new Date("2022-06-19T17:42:53.796Z").getTime(),
    user: "blesscomn Excellent",
    userImage: "",
  },
  {
    id: "06",
    title: "Seminar Karyawan",
    image: "",
    date: 1655569706165,
    user: "blesscomn Excellent",
    userImage: "",
  },
];

const EventList = () => {
  const [fliers, setFliers] = useState<FlierType[]>(EventFliers);

  return (
    <div className="  flex flex-col p-2 ">
      {/* header */}
      <div className="flex flex-row">
        <div className="basis-3/4">
          <h3>Events</h3>
        </div>
        <div className="basis-1/4">
          <ul className="flex flex-row">
            <li className="text-sm font-light px-1 hover:bg-slate-100 hover:cursor-pointer">
              Blesscomn
            </li>
            <li className="text-sm font-light px-1 border-stone-400 border-l-2 border-r-2 hover:bg-slate-100 hover:cursor-pointer">
              Event
            </li>
            <li className="text-sm font-light px-1 border-stone-400 border-l-2 border-r-2 hover:bg-slate-100 hover:cursor-pointer">
              Seminar
            </li>
            <li className="text-sm font-light px-1 hover:bg-slate-100 hover:cursor-pointer">
              All
            </li>
          </ul>
        </div>
      </div>

      {/* list */}
      <div className=" flex flex-row overflow-x-scroll">
        {fliers.map(flier => (
          <Flier key={flier.id} flier={flier} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
