import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  // throw new Error("Error in Home");
  return (
    <div className="flex gap-32 max-md:flex-col max-md:text-center">
      <div className="flex-1 gap-20">
        <h1 className="text-7xl max-md:text-[64px] font-bold leading-tight pr-10">Create Thoughts Agency.</h1>
        <p className="text-sm font-bold py-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex gap-5 pb-10 max-xl:justify-center">
          <button className="min-w-28 min-h-14 rounded-lg cursor-pointer border-none bg-blue-700 text-white">Learn More</button>
          <button className="min-w-28 min-h-14 rounded-lg cursor-pointer border-none bg-white text-blue-700">Contact</button>
        </div>
        <div className="relative w-96 h-10 grayscale flex-col gap-12 max-md:w-[100%]">
          <Image
            src="/brands.png"
            alt=""
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 30vw"
            className={styles.brandImg} />
        </div>
      </div>
      <div className="flex-1 relative overflow-hidden">
        <Image src="https://images.pexels.com/photos/13895589/pexels-photo-13895589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 30vw"
          className="h-full w-full max-w-fit object-cover rounded-xl shadow-xl object-center"
        />
      </div>
    </div>
  );
}
