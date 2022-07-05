import { NextPage } from "next";
import Image from "next/image";
import { Map } from "../components/Map";

const AboutUs: NextPage = () => {
  return (
    <>
      <main className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
        {/* banner */}
        <div
          className="w-full bg-cover bg-center lg:h-[24rem] h-[16rem]"
          style={{
            backgroundImage: "url(/images/banner.png)",
          }}
        />
        {/* visi-misi */}
        <div className="flex flex-col lg:flex-row  w-full bg-white py-16">
          <div className="flex flex-col items-center lg:px-8 py-4 px-16 basis-1/3">
            <h3 className="uppercase font-bold text-neutral-700 mb-3">visi</h3>
            <p className="text-center font-light text-neutral-700">
              Menjadi Gereja yang senantiasa antusias untuk Indonesia dan
              bangsa-bangsa penuh kemuliaan-Nya
            </p>
          </div>
          <div className="flex flex-col border-neutral-500 lg:border-l-2 lg:border-r-2  p-4 items-center basis-1/3">
            <h3 className="uppercase font-bold text-neutral-700 mb-3">misi</h3>
            <div className="font-light text-neutral-700 px-4">
              <ol className="list-decimal ml-4">
                <li>Mengabarkan injil dengan penuh kuasa</li>
                <li>Memeuridkan dengan diperlengkapi lima jawatan</li>
                <li>
                  Membangun gereja lokal yang dewasa serta melahirkan
                  gereja-gereja baru
                </li>
                <li>mengembangkan dan mengobarkan karunia-karunia rohani</li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col lg:px-8 py-4 px-16 items-center basis-1/3">
            <h3 className="uppercase font-bold text-neutral-700 mb-3">
              nilai-nilai
            </h3>
            <p className="text-center font-light text-neutral-700">
              Alkitabiah, kekeluargaan, hubungan, kekudusan, tidak dapat
              dihentikan
            </p>
          </div>
        </div>
        {/* location */}
        <div className="flex flex-col lg:flex-row  w-full bg-teal-500">
          <div className=" bg-slate-500 basis-2/3 ">
            <Map />
          </div>
          <div className=" basis-1/3 p-9 ">
            <div>
              <h3 className="uppercase mb-4 font-bold text-2xl text-slate-100">
                lokasi ibadah
              </h3>
              <p className="font-normal text-slate-100">
                Jl. Taman Alfa Indah A18 No.11, RT.3/RW.7, Joglo, Kec.
                Kembangan, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta
                11640
              </p>
            </div>
            <div>
              <h3 className="uppercase mb-4 font-bold text-2xl text-slate-100">
                kontak
              </h3>
              <p className="font-normal text-slate-100">
                <ul>
                  <li>Telepon: 0878 - 08295838</li>
                  <li>WhatsApp: 0878 - 08295838</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;
