import { timelineEvents } from "../_lib/constants";

function Timeline() {
  return (
    <section className="px-4 md:px-[5rem] pb-6 py-[5rem]">
      <h2 className="text-indigo-400 text-[30px] md:text-3xl font-title-big font-bold mb-8">
        About Me
      </h2>
      <div className="relative">
        <div className="absolute md:left-1/2 left-0 transform -translate-x-1/2 w-0.5 bg-indigo-500 h-full"></div>
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`mb-10 flex w-full justify-start ${
              index % 2 === 0 ? "md:justify-start " : "md:justify-end"
            }`}
          >
            <div
              className={`relative md:w-1/2 w-full pl-6 text-right${
                index % 2 === 0
                  ? "md:pr-6 md:text-right"
                  : "md:pl-6 md:text-left"
              }`}
            >
              <div
                className={`rounded-md shadow-sm shadow-indigo-700 pb-1 pl-2${
                  index % 2 === 0
                    ? "border-indigo-600 md:border-l md:pr-4 md:mr-6 md:mt-2 "
                    : "border-indigo-600 md:border-r md:pl-4 md:ml-2"
                }`}
              >
                <h3 className="text-white text-sm font-body-1 md:text-sm font-bold mb-1">
                  <span className="md:text-lg text-indigo-400">
                    {event.Title}&nbsp;&nbsp;
                  </span>
                  ({event.date})
                </h3>
                <p className="text-primary-200 text-sm md:text-base font-body-1">
                  {event.description}
                </p>
              </div>
            </div>
            {/* Circle */}
            <span className="flex absolute md:left-1/2 left-0 transform -translate-x-1/2 justify-center items-center w-6 h-6 bg-slate-900 border-2 border-indigo-500 rounded-full">
              <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
