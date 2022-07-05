/* eslint-disable @next/next/no-img-element */
import React, { FunctionComponent } from "react";

export type FlierType = {
  id: string;
  title: string;
  image?: string;
  date: number;
  user: string;
  userImage: string;
};

function datePatern(date: number) {
  const dateVal = new Date(date);
  const getDate = dateVal.getDate() + "";
  const getMonth = dateVal.getMonth() + "";
  const getYear = dateVal.getFullYear() + "";
  const getHour = dateVal.getHours() + "";
  const getMinutes = dateVal.getMinutes() + "";
  return `${getDate.length > 1 ? getDate : "0" + getDate}/${
    getMonth.length > 1 ? getDate : "0" + getMonth
  }/${getYear.length > 1 ? getDate : "0" + getYear} - ${
    getHour.length > 1 ? getDate : "0" + getHour
  }:${getMinutes.length > 1 ? getDate : "0" + getMinutes}`;
}

const Flier: FunctionComponent<{ flier: FlierType }> = ({ flier }) => {
  return (
    <>
      <div className="flex flex-col w-fit items-center  m-2 p-4 rounded-sm">
        <div className="w-[169px] h-[169px] bg-teal-300 overflow-hidden rounded-sm flex justify-center items-center">
          {flier.image ? (
            <img src={flier.image} alt={flier.title + "_flier"} />
          ) : (
            <img src="/icons/blesscomn.svg" alt="logo" className="p-4" />
          )}
        </div>
        <div className="flex flex-col justify-start  mt-2 w-full">
          <a key={flier.id} href={`#${flier.user}`}>
            <h3 className="text-base font-bold text-slate-800 ">
              {flier.title}
            </h3>
          </a>
          <p className="text-sm text-slate-600">{datePatern(flier.date)}</p>
        </div>
      </div>
    </>
  );
};

export default Flier;
