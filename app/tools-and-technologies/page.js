import Image from "next/image";
import { tools } from "../_lib/constants";

function page() {
  return (
    <section className="px-4 md:px-[5rem] pb-6 py-[7rem] ">
      <h2 className="text-indigo-400 text-[30px] md:text-3xl font-bold mb-8">
        Tools and Technologies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="relative group flex justify-center items-center rounded-full bg-transparent border border-lGreen mb-4 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto p-2"
          >
            <Image
              src={tool.src}
              alt={tool.alt}
              className="w-full h-full object-contain p-4"
            />
            <span className="absolute bottom-0 transform translate-y-full font-body-1 bg-primary-800 text-white-1 text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {tool.alt}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default page;
