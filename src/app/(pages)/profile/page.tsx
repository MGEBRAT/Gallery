"use client";

import useFavorites from "@/Hooks/useFavorites";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";

export default function page() {



  const { user } = useKindeBrowserClient();
  const favoritesList = useFavorites();



  
  return (
    <section className="w-full py-16 min-h-[700px]">
      <div className="container mx-auto">
        <div className="w-full flex flex-col items-start">
          {user?.picture && (
            <Image
              className="w-[150px] h-[150px] rounded-full object-cover object-center "
              src={user.picture}
              alt={"Изображение профиля"}
              width={150}
              height={150}
            />
          )}
          <h2 className="font-medium text-black uppercase text-2xl mt-12">
            Логин: {user?.email}
          </h2>
          <h3 className="font-medium text-black  text-2xl mt-2">
            Ник: {user?.family_name} {user?.given_name}
          </h3>
        </div>
        <div className="">
          <div className="flex items-center justify-center mt-4">
            <h2 className="text-3xl font-literata  text-black">Избранное</h2>
          </div>
          <div className="grid gap-[0px] grid-cols-2 md:grid-cols-3 mt-10">
          {favoritesList.filter(
                    (favoritesList) =>
                    favoritesList.attributes?.gmail === user?.email 
                  ).map((item, index) => {
              return (
                <div
                  key={index}
                  className="relative  w-[414px] h-[576px] mb-[50px]"
                >
                  <Image
                    alt="картина"
                    width={200}
                    height={200}
                    className="absolute object-cover rounded-md bg-cover bg-center bg-no-repeat z-[-3] top-0 min-w-[414px] h-[577px]"
                    src={
                      process.env.NEXT_PUBLIC_STRAPI_API_URL +
                      item.attributes.pictures.data[0].attributes.img.data
                        .attributes.url
                    }
                  ></Image>
                </div>
              );
            })
          }
          </div>
        </div>
      </div>
    </section>
  );
}
