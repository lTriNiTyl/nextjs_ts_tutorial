import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  // throw new Error("Error in Home");
  return (
    <div className="flex gap-100">
      <div className="flex-1">
        <h1 className="text-7xl font-bold leading-tight pr-10">Create Thoughts Agency.</h1>
        <p className="text-sm font-bold py-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex gap-5 pb-10">
          <button className="min-w-28 min-h-14 rounded-lg cursor-pointer border-none bg-blue-700 text-white">Learn More</button>
          <button className="min-w-28 min-h-14 rounded-lg cursor-pointer border-none bg-white text-blue-700">Contact</button>
        </div>
        <div className="relative w-96 h-10 grayscale flex-col gap-12">
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className="flex-1 relative uppercase hidden sm:inline">
        <Image src="https://images.pexels.com/photos/20219544/pexels-photo-20219544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="" fill 
          className="h-auto mx-auto max-w-fit rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
}
