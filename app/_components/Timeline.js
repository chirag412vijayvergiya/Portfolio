// "use client";
// import { useState } from "react";
// import { timelineEvents } from "../_lib/constants";

// function Timeline() {
//   const [transform, setTransform] = useState("");
//   const [gradientPosition, setGradientPosition] = useState(null);
//   const [activeBorders, setActiveBorders] = useState({
//     top: false,
//     right: false,
//     bottom: false,
//     left: false,
//   });

//   const handleMouseMove = (e) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     const threshold = 60; // Sensitivity for detecting edges

//     // 3D rotation effect
//     const rotateX = (y - rect.height / 2) / 30;
//     const rotateY = (rect.width / 2 - x) / 30;
//     setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);

//     // Update glow position
//     setGradientPosition({ x: `${x}px`, y: `${y}px` });

//     // Determine active borders based on proximity to edges
//     setActiveBorders({
//       top: y < threshold,
//       right: x > rect.width - threshold,
//       bottom: y > rect.height - threshold,
//       left: x < threshold,
//     });
//   };

//   const handleMouseLeave = () => {
//     // Reset effects
//     setTransform("rotateX(0deg) rotateY(0deg)");
//     setGradientPosition(null);
//     setActiveBorders({ top: false, right: false, bottom: false, left: false });
//   };

//   return (
//     <section className="px-4 md:px-[5rem] pb-6 py-[7rem]">
//       <h2 className="text-indigo-400 text-[30px] md:text-3xl font-title-big font-bold mb-8">
//         About Me
//       </h2>
//       <div className="relative">
//         <div className="absolute md:left-1/2 left-0 transform -translate-x-1/2 w-0.5 bg-indigo-500 h-full"></div>
//         {timelineEvents.map((event, index) => (
//           <div
//             key={index}
//             className={`mb-10 flex w-full justify-start ${
//               index % 2 === 0 ? "md:justify-start " : "md:justify-end"
//             }`}
//           >
//             <div
//               className={`relative md:w-1/2 w-full pl-8 text-right ${
//                 index % 2 === 0
//                   ? "md:pr-6 md:text-right"
//                   : "md:pl-6 md:text-left"
//               }`}
//               style={{ perspective: "1000px" }}
//             >
//               <div
//                 onMouseMove={handleMouseMove}
//                 onMouseLeave={handleMouseLeave}
//                 className={`rounded-md shadow-sm shadow-indigo-700 pb-3 pl-4
//       relative overflow-hidden cursor-pointer
//       transition-transform duration-[500ms] ease-out
//       [transform-style:preserve-3d]
//       bg-neutral-900 border-2
//       ${activeBorders.top ? "border-t-indigo-600" : "border-t-transparent"}
//       ${activeBorders.right ? "border-r-indigo-600" : "border-r-transparent"}
//       ${activeBorders.bottom ? "border-b-indigo-600" : "border-b-transparent"}
//       ${activeBorders.left ? "border-l-indigo-600" : "border-l-transparent"}
//       ${
//         index % 2 === 0
//           ? "border-indigo-600 md:border-l md:pr-4 md:mr-1 md:mt-2"
//           : "border-indigo-600 md:border-r md:pl-4 md:ml-2"
//       }`}
//                 style={{
//                   transform,
//                   background: gradientPosition
//                     ? `radial-gradient(circle at ${gradientPosition.x} ${gradientPosition.y},
//              rgba(33,23,92,0.8), rgb(17 24 39) 20%)`
//                     : "rgb(17 24 39)", // Solid background when not hovering
//                 }}
//               >
//                 <h3 className="text-white text-sm font-body-1 md:text-sm font-bold mb-2 mt-2">
//                   <span className="md:text-lg text-indigo-400">
//                     {event.Title}&nbsp;&nbsp;
//                   </span>
//                   ({event.date})
//                 </h3>
//                 <p className="text-primary-200 text-sm md:text-base font-body-1">
//                   {event.description}
//                 </p>

//                 {gradientPosition && (
//                   <div
//                     className="absolute rounded-full pointer-events-none"
//                     style={{
//                       width: "100px",
//                       height: "100px",
//                       backgroundColor: "rgba(16, 185, 129, 0.8)",
//                       filter: "blur(120px)",
//                       opacity: 0.2,
//                       transform: `translate(calc(${gradientPosition.x} - 150px), calc(${gradientPosition.y} - 150px))`,
//                     }}
//                   />
//                 )}
//               </div>
//             </div>

//             {/* Circle */}
//             <span className="flex absolute md:left-1/2 left-0 transform -translate-x-1/2 justify-center items-center w-6 h-6 bg-slate-900 border-2 border-indigo-500 rounded-full">
//               <div className="w-3 h-3 bg-indigo-600 rounded-full"></div>
//             </span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Timeline;

"use client";
import { useState } from "react";
import { timelineEvents } from "../_lib/constants";

function Timeline() {
  const [transforms, setTransforms] = useState([]);
  const [gradientPositions, setGradientPositions] = useState([]);
  const [activeBordersArray, setActiveBordersArray] = useState([]);

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const threshold = 60;

    // 3D rotation effect
    const rotateX = (y - rect.height / 2) / 30;
    const rotateY = (rect.width / 2 - x) / 30;
    const newTransforms = [...transforms];
    newTransforms[index] = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    setTransforms(newTransforms);

    // Update glow position
    const newGradientPositions = [...gradientPositions];
    newGradientPositions[index] = { x: `${x}px`, y: `${y}px` };
    setGradientPositions(newGradientPositions);

    // Determine active borders
    const newActiveBorders = [...activeBordersArray];
    newActiveBorders[index] = {
      top: y < threshold,
      right: x > rect.width - threshold,
      bottom: y > rect.height - threshold,
      left: x < threshold,
    };
    setActiveBordersArray(newActiveBorders);
  };

  const handleMouseLeave = (index) => {
    const newTransforms = [...transforms];
    newTransforms[index] = "rotateX(0deg) rotateY(0deg)";
    setTransforms(newTransforms);

    const newGradientPositions = [...gradientPositions];
    newGradientPositions[index] = null;
    setGradientPositions(newGradientPositions);

    const newActiveBorders = [...activeBordersArray];
    newActiveBorders[index] = {
      top: false,
      right: false,
      bottom: false,
      left: false,
    };
    setActiveBordersArray(newActiveBorders);
  };

  return (
    <section className="px-4 md:px-[5rem] pb-6 py-[7rem]">
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
              className={`relative md:w-1/2 w-full pl-8  ${
                index % 2 === 0
                  ? "md:pr-6 md:text-right"
                  : "md:pl-6 md:text-left"
              }`}
              style={{ perspective: "1000px" }}
            >
              <div
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className={`rounded-md shadow-sm shadow-indigo-700 pb-3 md:pl-4 pl-2 pr-2
                  relative overflow-hidden cursor-pointer 
                  transition-transform duration-[500ms] ease-out 
                  [transform-style:preserve-3d] 
                  bg-neutral-900 border-2
                  ${
                    activeBordersArray[index]?.top
                      ? "border-t-indigo-600"
                      : "border-t-transparent"
                  }
                  ${
                    activeBordersArray[index]?.right
                      ? "border-r-indigo-600"
                      : "border-r-transparent"
                  }
                  ${
                    activeBordersArray[index]?.bottom
                      ? "border-b-indigo-600"
                      : "border-b-transparent"
                  }
                  ${
                    activeBordersArray[index]?.left
                      ? "border-l-indigo-600"
                      : "border-l-transparent"
                  }
                  ${
                    index % 2 === 0
                      ? "border-indigo-600 md:border-l md:pr-4 md:mr-1 md:mt-2"
                      : "border-indigo-600 md:border-r md:pl-4 md:ml-2"
                  }`}
                style={{
                  transform: transforms[index] || "rotateX(0deg) rotateY(0deg)",
                  background: gradientPositions[index]
                    ? `radial-gradient(circle at ${gradientPositions[index].x} ${gradientPositions[index].y},
             rgba(33,23,92,0.8), rgb(17 24 39) 20%)`
                    : "rgb(17 24 39)",
                }}
              >
                <h3 className="text-white text-sm font-body-1 md:text-sm font-bold mb-2 mt-2">
                  <span className="md:text-lg text-indigo-400">
                    {event.Title}&nbsp;&nbsp;
                  </span>
                  ({event.date})
                </h3>
                <p className="text-primary-200 text-sm md:text-base font-body-1">
                  {event.description}
                </p>
                {gradientPositions[index] && (
                  <div
                    className="absolute rounded-full pointer-events-none"
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "rgba(16, 185, 129, 0.8)",
                      filter: "blur(120px)",
                      opacity: 0.2,
                      transform: `translate(calc(${gradientPositions[index].x} - 150px), calc(${gradientPositions[index].y} - 150px))`,
                    }}
                  />
                )}
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
