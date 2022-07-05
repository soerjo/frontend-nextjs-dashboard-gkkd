import { Message } from "./Message";
import React from "react";

const News = () => {
  return (
    <div className="bg-white w-full rounded-lg p-4">
      <div className="flex flex-row items-center mb-4 ">
        <h3 className="text-xl font-bold text-slate-700 basis-2/3 ">News</h3>
        <div className="basis-1/3">
          <ul className="flex flex-row">
            <li className="text-sm font-light px-1 hover:bg-slate-100 hover:cursor-pointer">
              Renungan
            </li>
            <li className="text-sm font-light px-1 border-stone-400 border-l-2 border-r-2 hover:bg-slate-100 hover:cursor-pointer">
              News
            </li>
            <li className="text-sm font-light px-1 hover:bg-slate-100 hover:cursor-pointer">
              All
            </li>
          </ul>
        </div>
      </div>
      <Message />
    </div>
  );
};

export default News;
