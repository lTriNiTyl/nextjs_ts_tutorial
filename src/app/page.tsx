import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  // throw new Error("Error in Home");
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
        <div className="col-span-1 lg:col-span-1 place-self-center text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-6xl lg:text-7xl font-bold mt-6 lg:mt-0 mb-6 lg:mb-10 leading-tight">Create Thoughts Agency.</h1>
          <p className="text-sm font-bold mb-10 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vero
            blanditiis adipisci minima reiciendis a autem assumenda dolore.
          </p>
          <div className="flex relative gap-5 pb-10 max-[1024px]:justify-center">
            <button className="min-w-28 min-h-14 rounded-lg cursor-pointer border-none bg-blue-700 text-white">Learn More</button>
            <button className="min-w-28 min-h-14 rounded-lg cursor-pointer border-none bg-white text-blue-700">Contact</button>
          </div>
          <div className="flex w-full justify-center items-center lg:justify-normal lg:items-baseline pb-10">
            <div className="relative w-96 min-h-10 grayscale">
              <Image
                src="/brands.png"
                alt="brands image"
                fill
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 30vw"
                className="ml-8 lg:ml-0"/>
            </div>
          </div>
        </div>
        {/* 이미지가 수직으로 중앙에 오지 않아서 애먹음.
          flex items-center(수직 중앙) justify-center(수평 중앙) 추가로 수정.
        */}
        <div className="flex items-center lg:col-span-1 col-span-1 place-self-center order-1 lg:order-2 w-full h-full">
          <div className="relative w-full h-[30lvh] sm:h-[45lvh] lg:h-[55lvh]">
            <Image src="https://images.pexels.com/photos/13895589/pexels-photo-13895589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="home image"
              fill
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 30vw"
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
