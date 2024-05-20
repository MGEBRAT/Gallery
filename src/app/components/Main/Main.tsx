import React from 'react';


const Main = () => {
  return (
    <section className='  w-full  h-[890px]  ' id='hero'>
      <div className='absolute w-full  h-[890px] top-0 z-[-1] bg-hero bg-cover bg-center bg-no-repeat'></div>
      <div className="container mx-auto flex items-end h-full ">
        <div className="w-full pb-[130px]  flex flex-col gap-8 ">
          <h1 className="font-literata font-regular text-9xl">MyGallery</h1>
          <div className='flex justify-left items-center max-w-[1320px] gap-[60px]'>
            <p className=" font-medium text-2xl  ">Погрузитесь в мир мастерства и красок, откройте новые горизонты восприятия и вдохновения, узнайте больше об истории искусства и их авторов</p>
            <p className=" font-medium text-2xl ">Здесь вы найдете произведения от классиков до авангардистов, каждая картина покажет вам историю, характер, чувства и многое другое</p>
          </div>
        </div>
      </div>
      <div className=''></div>
    </section>
  )
}

export default Main;