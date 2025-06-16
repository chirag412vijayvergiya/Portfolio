import Image from "next/image";
import Link from "next/link";
import Button from "./_components/Button";
import CustomTypewriter from "./_components/CustomeTypewriter";

export default function Home() {
  return (
    <main className="md:mt-20 mx-auto px-8 pt-12 pb-0 md:mb-[-126px] min-h-screen md:px-16">
      <div className="container mx-auto flex flex-col py-12">
        <div className="w-full flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="flex flex-col justify-center text-center lg:text-left lg:w-1/2">
            <h3 className="mb-6 text-xl sm:text-xl font-bold font-title-big leading-tight lg:text-3xl">
              <span className="text-indigo-400 flex">
                Hi, I&#39;m&nbsp;
                <CustomTypewriter />
              </span>
            </h3>
            <p className="mb-6 text-base sm:text-lg md:text-md font-body-1 font-medium leading-7 text-primary-200">
              I am a passionate and enthusiastic individual who loves to explore
              new technologies and frameworks. I am a quick learner and always
              ready to learn new things. I have a keen interest in software
              development and have a good understanding of data structures and
              algorithms. I am always ready to take on new challenges and solve
              them with my skills.
            </p>
            <div className="flex flex-col items-center lg:flex-row">
              <Link href="https://drive.google.com/file/d/1d1hUPUHqB12re19u3qi56gWzZcqu8Vj1/view?usp=sharing">
                <Button label="My Resume" />
              </Link>
              {/* x */}
            </div>
          </div>
          <div className="flex justify-center lg:w-1/2 lg:justify-end mt-8 lg:mt-0">
            <Image
              src="/chirag.jpg"
              alt="Profile picture"
              width={300}
              height={300}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
