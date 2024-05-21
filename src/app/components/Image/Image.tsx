import React, { useEffect, useState } from "react";
import Imager from "next/image";
import usePicture from "@/Hooks/usePicture";
import useReviews from "@/Hooks/useReviews";
import useAutors from "@/Hooks/useAutors";
import GlobalApi from "@/utils/GlobalApi";
import Modal from "react-modal";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Image = () => {
  const pictureList = usePicture();
  const reviewsList = useReviews();
  const autorsList = useAutors();

  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedAuthor, setSelectedAuthor] = useState<string>("");

  const [nameUser, setNameUser] = useState();
  const [text, setText] = useState();
  const [date, setDate] = useState();
  const [picture, setPicture] = useState();
  const [formField, setFormField] = useState(false);

  const { user } = useKindeBrowserClient();
  useEffect(() => {
    console.log(user)
  }, [user])

  useEffect(() => {
    if (nameUser && text && date && picture) {
      setFormField(true);
    } else {
      setFormField(false);
    }
  }, [nameUser, text, date, picture]);

  const saveFields = () => {
    const currentDate = new Date().toISOString(); 
    const data = {
      data: {
        nameUser: (user?.given_name || "") + " " + (user?.family_name || ""), 
        text: text,
        date: currentDate,
        picture: selectedAutor.id, 
      },
    };
    GlobalApi.createReview(data).then((resp) => {
      console.log(resp);
      if (resp) {
        alert("Данные успешно отправлены!");
      }
    });
  };

  const filteredPictures = pictureList.filter(
    (picture) =>
      (selectedDate === "" ||
        new Date(picture.attributes?.dateCreate).getFullYear() ===
          parseInt(selectedDate)) &&
      (selectedAuthor === "" ||
        picture.attributes?.autor_id?.data?.attributes?.fio === selectedAuthor)
  );

  const imgList = useAutors();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedAutor, setSelectedAutor] = useState(null);

  const openModal = (autor) => {
    setSelectedAutor(autor);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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

  return (
    <section className="  w-full  ">
      <div className="container mx-auto">
        <div className="w-full flex flex-col gap-10 ">
          <h2 className="text-black text-[80px] font-regular font-literata text-center mt-[30px] mb-[35px]">
            Картины
          </h2>
          <div className="flex gap-10">
            <select
              className=" border-[3px] pl-2 pr-10 w-[auto] h-[56px] font-medium text-black text-xl border-korich rounded-md custom-select"
              name=""
              id=""
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              <option value="">Все даты</option>
              {pictureList.map((picture, index) => (
                <option
                  key={index}
                  value={new Date(picture.attributes?.dateCreate).getFullYear()}
                >
                  {new Date(picture.attributes?.dateCreate).getFullYear()}
                </option>
              ))}
            </select>
            <select
              className="border-[3px] pr-10 pl-2 w-[auto] h-[56px] font-medium text-black text-xl border-korich rounded-md custom-select"
              name=""
              id=""
              value={selectedAuthor}
              onChange={(e) => setSelectedAuthor(e.target.value)}
            >
              <option value="">Все авторы</option>
              {autorsList.map((autor, index) => (
                <option key={index} value={autor.attributes?.fio}>
                  {autor.attributes?.fio}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-[0px] grid-cols-2 md:grid-cols-3 ">
            {filteredPictures.length === 0 ? (
              <div className="col-start-1 col-end-4 flex items-center justify-center start-cols-2 h-[576px]">
                <p className="text-center text-5xl text-black font-literata font-medium">
                  Ничего нет
                </p>
              </div>
            ) : (
              filteredPictures.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="relative  w-[414px] h-[576px] mb-[50px]"
                  >
                    <div className=" rounded-md absolute top-0 right-[0px] bg-greeen w-[60px] h-[190px] flex justify-center items-center focus-pocus">
                      <p className="transform rotate-180 font-medium mode text-center w-[190px] whitespace-nowrap ">
                        {item.attributes?.autor_id?.data?.attributes?.fio
                          ?.split(" ")
                          .slice(0, 2)
                          .join(" ")}
                      </p>
                    </div>
                    <div className=" absolute top-[390px] bg-korich w-[190px] h-[115px] rounded-md">
                      <p className="px-[11px] py-1 text-2xl font-inter font-light">
                        {item.attributes?.name.length > 20
                          ? item.attributes?.name.slice(0, 20) + "..."
                          : item.attributes?.name}
                      </p>
                      <p className="px-[11px]">
                        {new Date(item.attributes?.dateCreate).getFullYear()} /{" "}
                        {item.attributes?.Country}{" "}
                      </p>
                    </div>
                    <button
                      onClick={() => openModal(item)}
                      className="absolute top-[490px] right-[250px] rounded-md bg-butgreen px-[8px] py-[6px]"
                    >
                      Узнать больше
                    </button>
                    <div className="absolute top-[476px] z-[-2] rounded-md bg-bluee w-[112px] h-[100px]"></div>
                    <Imager
                      alt="картина"
                      width={200}
                      height={200}
                      className="absolute object-cover rounded-md bg-cover bg-center bg-no-repeat z-[-3] top-0 min-w-[414px] h-[577px]"
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_API_URL +
                        item.attributes?.img?.data.attributes?.url
                      }
                    ></Imager>
                  </div>
                );
              })
            )}
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
          <div className="overflow-y-scroll  max-h-[800px]">
            <div className="flex items-center justify-between ">
              <div className="text-black flex items-end gap-2 ">
                <h2 className="text-5xl font-inter font-normal ">
                  {selectedAutor.attributes?.name}
                </h2>
                <p className="text-2xl font-inter font-light">
                  {new Date(selectedAutor.attributes?.dateCreate).getFullYear()}{" "}
                  / {selectedAutor.attributes?.Country}{" "}
                </p>
              </div>
              <button
                className="text-black border-none bg-transparent text-5xl font-light"
                onClick={closeModal}
              >
                x
              </button>
            </div>
            <div className="mt-8 flex items-start gap-4 ">
              <Imager
                alt=""
                className="rounded-md max-w-[900px] max-h-[500px] object-contain"
                src={
                  process.env.NEXT_PUBLIC_STRAPI_API_URL +
                  selectedAutor.attributes?.img?.data.attributes?.url
                }
                width={650}
                height={850}
              ></Imager>
              <div>
                <h3 className="text-[40px] text-black font-inter font-normal">
                  Описание
                </h3>
                <p className="text-black text-xl">
                  {selectedAutor.attributes?.descr}
                </p>
              </div>
            </div>
            <div className="mt-10">
              <div>
                <div className="pb-1 w-full border-b-[2px] flex text-korich items-center    border-korich">
                  <Imager
                    alt=""
                    src={"/assets/svg/pencil.svg"}
                    width={30}
                    height={30}
                  ></Imager>
                  <input
                    className="w-full text-korich placeholder "
                    type="text"
                    onChange={(e) => setText(e.target.value)}
                    id="text"
                    placeholder="Написать коментарий"
                  />
                  <button
                    onClick={() => {
                      if (user) {
                        saveFields();
                      } else {
                        alert("Пожалуйста, зарегистрируйтесь, чтобы оставить комментарий.");
                      }
                    }}
                    className=" font-semibold"
                  >
                    Отправить
                  </button>
                </div>
                {/* коментарии вывод под опред пост */}
                {reviewsList
                  .filter(
                    (review) =>
                      review.attributes?.picture &&
                      review.attributes?.picture.data &&
                      review.attributes?.picture.data.id === selectedAutor?.id
                  )
                  .map((reviews, index) => {
                    return (
                      <div
                        key={index}
                        className="text-black italic w-full border-b-[2px] py-3  doted border-korich"
                      >
                        <p className="font-semibold">
                          {reviews.attributes?.nameUser}
                        </p>
                        <p className="">
                          {new Date(reviews.attributes?.date).toLocaleString(
                            "ru",
                            {
                              day: "2-digit",
                              month: "long",
                            }
                          )}
                        </p>
                        <p className="mt-1">“{reviews.attributes?.text}”</p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Image;
