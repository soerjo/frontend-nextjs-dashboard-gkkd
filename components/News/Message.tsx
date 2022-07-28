import React, { FunctionComponent } from "react";

type Message = {
  id: string;
  content: string;
  user: string;
  title: string;
  text: string;
};

const messages: Message[] = [
  {
    id: "01",
    content: "renungan",
    user: "admin",
    title: "Renungan Harian 10 Maret '22",
    text: "seorang kritikus seperti biasa nya mengunjungi galeri lukisan. Dia mencoba melihat-lihat lukisan yang ada namun kali ini dia menemukan kejangglan yang menarik",
  },
  {
    id: "01",
    content: "news",
    user: "admin",
    title: "Pendaftaran Baptis Selam",
    text: "seorang kritikus seperti biasa nya mengunjungi galeri lukisan. Dia mencoba melihat-lihat lukisan yang ada namun kali ini dia menemukan kejangglan yang menarik",
  },
  {
    id: "02",
    content: "news",
    user: "admin",
    title: "Doa Revival 18 Maret '22",
    text: "seorang kritikus seperti biasa nya mengunjungi galeri lukisan. Dia mencoba melihat-lihat lukisan yang ada namun kali ini dia menemukan kejangglan yang menarik",
  },
  {
    id: "03",
    content: "renungan",
    user: "admin",
    title: "Renungan Harian 10 Maret '22",
    text: "seorang kritikus seperti biasa nya mengunjungi galeri lukisan. Dia mencoba melihat-lihat lukisan yang ada namun kali ini dia menemukan kejangglan yang menarik",
  },
  {
    id: "04",
    content: "renungan",
    user: "blesscomn",
    title: "Renungan Harian 10 Maret '22",
    text: "seorang kritikus seperti biasa nya mengunjungi galeri lukisan. Dia mencoba melihat-lihat lukisan yang ada namun kali ini dia menemukan kejangglan yang menarik",
  },
  {
    id: "04",
    content: "renungan",
    user: "blesscomn",
    title: "Renungan Harian 10 Maret '22",
    text: "seorang kritikus seperti biasa nya mengunjungi galeri lukisan. Dia mencoba melihat-lihat lukisan yang ada namun kali ini dia menemukan kejangglan yang menarik",
  },
  {
    id: "04",
    content: "renungan",
    user: "blesscomn",
    title: "Renungan Harian 10 Maret '22",
    text: "seorang kritikus seperti biasa nya mengunjungi galeri lukisan. Dia mencoba melihat-lihat lukisan yang ada namun kali ini dia menemukan kejangglan yang menarik",
  },
  {
    id: "04",
    content: "renungan",
    user: "blesscomn",
    title: "Renungan Harian 10 Maret '22",
    text: "seorang kritikus seperti biasa nya mengunjungi galeri lukisan. Dia mencoba melihat-lihat lukisan yang ada namun kali ini dia menemukan kejangglan yang menarik",
  },
  {
    id: "04",
    content: "renungan",
    user: "blesscomn",
    title: "Renungan Harian 10 Maret '22",
    text: "seorang kritikus seperti biasa nya mengunjungi galeri lukisan. Dia mencoba melihat-lihat lukisan yang ada namun kali ini dia menemukan kejangglan yang menarik",
  },
  {
    id: "04",
    content: "renungan",
    user: "blesscomn",
    title: "Renungan Harian 10 Maret '22",
    text: "seorang kritikus seperti biasa nya mengunjungi galeri lukisan. Dia mencoba melihat-lihat lukisan yang ada namun kali ini dia menemukan kejangglan yang menarik",
  },
];

const ContentComp: FunctionComponent<{ message: Message }> = ({ message }) => {
  return (
    <div className="w-full hover:bg-slate-200 rounded-md">
      <a href={`#${message.id}`}>
        <div className="flex flex-row items-center py-2">
          <div className=" w-2 h-10 mr-3 basis-1/6 ">
            <div className="bg-fuchsia-500 rounded-full w-12 h-12 mx-auto">
              <img
                src="/icons/blesscomn.svg"
                alt="logo"
                className="p-1 translate-y-1"
              />
            </div>
          </div>
          <div className="flex flex-col basis-5/6">
            <h4 className="font-bold text-slate-700">{message.title}</h4>
            <p className="text-slate-400 font-light text-sm line-clamp-2  ">
              {message.text}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export const Message = () => {
  return (
    <div className="h-[30rem] overflow-y-scroll">
      <div className="continer">
        {messages.map((msg, index) => (
          <div key={index} className="border-slate-100 border-b-2">
            <ContentComp message={msg} />
          </div>
        ))}
      </div>
    </div>
  );
};
