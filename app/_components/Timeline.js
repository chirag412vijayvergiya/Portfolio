import { timelineEvents } from "../_lib/constants";

function Timeline() {
  return (
    <section className="px-4 md:px-[5rem] pb-6 py-[5rem]">
      <h2 className="text-indigo-400 text-[30px] md:text-3xl font-title-big font-bold mb-8">
        About Me
      </h2>
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-indigo-500 h-full"></div>
        {timelineEvents.map((event, index) => (
          <div
            key={index}
            className={`mb-10 flex w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`relative w-1/2 ${
                index % 2 === 0 ? "pr-6 text-right" : "pl-6 text-left"
              }`}
            >
              <div
                className={`rounded-md shadow-sm shadow-indigo-700 pb-1${
                  index % 2 === 0
                    ? "border-indigo-600  border-l pr-4"
                    : "border-indigo-600 border-r pl-4 ml-6"
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
            <span className="flex absolute left-1/2 transform -translate-x-1/2 justify-center items-center w-6 h-6 bg-slate-900 border-2 border-indigo-500 rounded-full">
              <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
