"use client";
import React, { useState } from "react";
import Imager from "next/image";
import Modal from "react-modal";
import useAutors from "@/Hooks/useAutors";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFFFFF",
    borderRadius: "10px",
    padding: "20px",
    width: "1440px",
    height: "auto",
  },
};

const Autor = () => {
  const autorsList = useAutors();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedAutor, setSelectedAutor] = useState(null);

  const openModal = (autor) => {
    setSelectedAutor(autor);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <section className="  w-full bg-gray-200 p-16">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-10 ">
          <h2 className="text-black text-[80px] font-regular font-literata text-center mt-[30px] mb-[35px]">
            Авторы
          </h2>
          <div className="grid gap-[0px] grid-cols-2 md:grid-cols-3 ">
            {autorsList.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" cheat rounded-md w-[416px] h-[436px]  bg-gol overflow-hidden mt-[20px]"
                >
                  <div className="flex flex-col justify-center items-center trans">
                    <div className="p-[20px]">
                      <Imager
                        alt=""
                        width={200}
                        height={300}
                        className="rounded-full min-w-[200px] min-h-[200px] max-w-[200px] max-h-[200px] border-[10px] border-bluee bg-cover bg-center bg-no-repeat object-cover"
                        src={
                          process.env.NEXT_PUBLIC_STRAPI_API_URL +
                          item.attributes?.img?.data.attributes?.url
                        }
                      ></Imager>
                    </div>
                    <p className="uppercase text-xl font-medium">
                      {item.attributes?.fio}
                    </p>
                    <p className="">{item.attributes?.dateRog}</p>
                    <p className="px-[74px] py-2 text-center">
                      {item.attributes?.descr.length > 60
                        ? item.attributes?.descr.slice(0, 60) + "..."
                        : item.attributes?.descr}
                    </p>
                    <button
                      className="mt-3 rounded-md text-xl font-regular bg-butgreen px-[14px] py-[7px]"
                      onClick={() => openModal(item)}
                    >
                      Узнать больше
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        {selectedAutor && (
          <div>
            <div className="flex items-center justify-between">
              <div className="text-black flex items-end gap-2 ">
                <h2 className="text-5xl font-inter font-normal ">{selectedAutor.attributes?.fio}</h2>
                <p className="text-2xl font-inter font-light">
                  {new Date(selectedAutor.attributes?.dateRog).getFullYear()} /{" "}
                  {selectedAutor.attributes?.Country}{" "}
                </p>
              </div>
              <button
                className="text-black border-none bg-transparent text-5xl font-light"
                onClick={closeModal}
              >
                x
              </button>
            </div>
            <div className="mt-8 flex items-start gap-4">
              <Imager
                alt=""
                className="rounded-md w-[400px] h-[500px] object-cover"
                src={
                  process.env.NEXT_PUBLIC_STRAPI_API_URL +
                  selectedAutor.attributes?.img?.data.attributes?.url
                }
                width={400}
                height={500}
              ></Imager>
              <div >
                <h3 className="text-[40px] text-black font-inter font-normal">Биография</h3>
                <p className="text-black text-xl">{selectedAutor.attributes?.descr}</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Autor;
