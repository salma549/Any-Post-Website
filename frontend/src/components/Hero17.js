// // import React, { Fragment } from "react";

// // import Script from "dangerous-html/react";
// // import PropTypes from "prop-types";

// // import "./Hero17.css";

// // const Hero17 = (props) => {
// //   return (
// //     <div className="hero17-header78">
// //       <div className="hero17-column thq-section-padding thq-section-max-width">
// //         <div className="hero17-content1">
// //           <h1>
// //             {props.heading1 ?? (
// //               <Fragment>
// //                 <h1 className="hero17-text7 thq-heading-1">
// //                   Find What You Need
// //                 </h1>
// //               </Fragment>
// //             )}
// //           </h1>
// //           <p>
// //             {props.content1 ?? (
// //               <Fragment>
// //                 <p className="hero17-text8 thq-body-large">
// //                   Search for items and services easily on Any-Post. Whether
// //                   you&apos;re looking to buy, sell, or trade, we&apos;ve got you
// //                   covered.
// //                 </p>
// //               </Fragment>
// //             )}
// //           </p>
// //         </div>
// //         <div className="hero17-actions">
// //           <button className="thq-button-filled hero17-button1">
// //             <span>
// //               {props.action1 ?? (
// //                 <Fragment>
// //                   <span className="hero17-text6 thq-body-small">
// //                     Get Started Now
// //                   </span>
// //                 </Fragment>
// //               )}
// //             </span>
// //           </button>
// //           <button className="thq-button-outline hero17-button2">
// //             <span>
// //               {props.action2 ?? (
// //                 <Fragment>
// //                   <span className="hero17-text5 thq-body-small">
// //                     Secondary action
// //                   </span>
// //                 </Fragment>
// //               )}
// //             </span>
// //           </button>
// //         </div>
// //       </div>
// //       <div className="hero17-content2">
// //         <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
// //           <div className="thq-animated-group-horizontal">
// //             <img
// //               alt={props.image1Alt}
// //               src={props.image1Src}
// //               className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt={props.image2Alt}
// //               src={props.image2Src}
// //               className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt={props.image3Alt}
// //               src={props.image3Src}
// //               className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt={props.image4Alt}
// //               src={props.image4Src}
// //               className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt={props.image5Alt}
// //               src={props.image5Src}
// //               className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt={props.image6Alt}
// //               src={props.image6Src}
// //               className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
// //             />
// //           </div>
// //           <div className="thq-animated-group-horizontal">
// //             <img
// //               alt={props.image1Alt}
// //               src={props.image1Src}
// //               className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt={props.image2Alt}
// //               src={props.image2Src}
// //               className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt={props.image3Alt}
// //               src={props.image3Src}
// //               className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt={props.image4Alt}
// //               src={props.image4Src}
// //               className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt={props.image5Alt}
// //               src={props.image5Src}
// //               className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt="Hero Image"
// //               src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
// //               className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
// //             />
// //           </div>
// //         </div>
// //         <div className="hero17-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
// //           <div className="thq-animated-group-horizontal-reverse">
// //             <img
// //               alt={props.image7Alt}
// //               src={props.image7Src}
// //               className="hero17-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt={props.image8Alt}
// //               src={props.image8Src}
// //               className="hero17-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt={props.image9Alt}
// //               src={props.image9Src}
// //               className="hero17-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt={props.image10Alt}
// //               src={props.image10Src}
// //               className="hero17-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt={props.image11Alt}
// //               src={props.image11Src}
// //               className="hero17-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt={props.image12Alt}
// //               src={props.image12Src}
// //               className="hero17-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
// //             />
// //           </div>
// //           <div className="thq-animated-group-horizontal-reverse">
// //             <img
// //               alt={props.image7Alt}
// //               src={props.image7Src}
// //               className="hero17-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt={props.image8Alt}
// //               src={props.image8Src}
// //               className="hero17-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt={props.image9Alt}
// //               src={props.image9Src}
// //               className="hero17-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt={props.image10Alt}
// //               src={props.image10Src}
// //               className="hero17-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt={props.image11Alt}
// //               src={props.image11Src}
// //               className="hero17-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
// //             />
// //             <img
// //               alt="Hero Image"
// //               src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
// //               className="hero17-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //       <div>
// //         <div className="hero17-container2">
// //           <Script
// //             html={`<style>
// //   @keyframes scroll-x {
// //     from {
// //       transform: translateX(0);
// //     }
// //     to {
// //       transform: translateX(calc(-100% - 16px));
// //     }
// //   }

// //   @keyframes scroll-y {
// //     from {
// //       transform: translateY(0);
// //     }
// //     to {
// //       transform: translateY(calc(-100% - 16px));
// //     }
// //   }
// // </style>
// // `}
// //           ></Script>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // Hero17.defaultProps = {
// //   image3Src:
// //     "https://images.unsplash.com/photo-1607098263217-0f031bbced19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk1MjE0NHw&ixlib=rb-4.0.3&q=80&w=1080",
// //   image8Alt: "Hero Image",
// //   image2Src:
// //     "https://images.unsplash.com/photo-1516309229383-2001fee59b2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk1MjE0NHw&ixlib=rb-4.0.3&q=80&w=1080",
// //   image6Alt: "Hero Image",
// //   image11Src:
// //     "https://images.unsplash.com/photo-1615458692394-6f093f390efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk1MjE0NHw&ixlib=rb-4.0.3&q=80&w=1080",
// //   image5Alt: "Hero Image",
// //   image1Alt: "Search bar on homepage",
// //   image7Src:
// //     "https://images.unsplash.com/photo-1533022422823-39f3ad778be4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk1MjE0NXw&ixlib=rb-4.0.3&q=80&w=1080",
// //   image7Alt: "Hero Image",
// //   image12Alt: "Hero Image",
// //   image2Alt: "Hero Image",
// //   image6Src:
// //     "https://images.unsplash.com/photo-1643281490538-560e55e6f3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk1MjE0NXw&ixlib=rb-4.0.3&q=80&w=1080",
// //   image12Src:
// //     "https://images.unsplash.com/photo-1579677917230-8a938ffc0279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk1MjE0Nnw&ixlib=rb-4.0.3&q=80&w=1080",
// //   image3Alt: "Hero Image",
// //   image9Src:
// //     "https://images.unsplash.com/photo-1551419762-4a3d998f6292?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk1MjE0Nnw&ixlib=rb-4.0.3&q=80&w=1080",
// //   image11Alt: "Hero Image",
// //   action2: undefined,
// //   action1: undefined,
// //   image8Src:
// //     "https://images.unsplash.com/photo-1468534187172-3922bb2faaca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk1MjE0N3w&ixlib=rb-4.0.3&q=80&w=1080",
// //   image5Src:
// //     "https://images.unsplash.com/photo-1480843669328-3f7e37d196ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk1MjE0OHw&ixlib=rb-4.0.3&q=80&w=1080",
// //   image4Src:
// //     "https://images.unsplash.com/photo-1718473476820-23698e777b7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk1MjE0OHw&ixlib=rb-4.0.3&q=80&w=1080",
// //   image10Alt: "Hero Image",
// //   image4Alt: "Hero Image",
// //   heading1: undefined,
// //   content1: undefined,
// //   image10Src:
// //     "https://images.unsplash.com/photo-1680458841824-6ce2d1dc2755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk1MjE0OXw&ixlib=rb-4.0.3&q=80&w=1080",
// //   image9Alt: "Hero Image",
// //   image1Src:
// //     "https://images.unsplash.com/photo-1619787956346-e18b6fdaafa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyOTk1MjE0OXw&ixlib=rb-4.0.3&q=80&w=1080",
// // };

// // Hero17.propTypes = {
// //   image3Src: PropTypes.string,
// //   image8Alt: PropTypes.string,
// //   image2Src: PropTypes.string,
// //   image6Alt: PropTypes.string,
// //   image11Src: PropTypes.string,
// //   image5Alt: PropTypes.string,
// //   image1Alt: PropTypes.string,
// //   image7Src: PropTypes.string,
// //   image7Alt: PropTypes.string,
// //   image12Alt: PropTypes.string,
// //   image2Alt: PropTypes.string,
// //   image6Src: PropTypes.string,
// //   image12Src: PropTypes.string,
// //   image3Alt: PropTypes.string,
// //   image9Src: PropTypes.string,
// //   image11Alt: PropTypes.string,
// //   action2: PropTypes.element,
// //   action1: PropTypes.element,
// //   image8Src: PropTypes.string,
// //   image5Src: PropTypes.string,
// //   image4Src: PropTypes.string,
// //   image10Alt: PropTypes.string,
// //   image4Alt: PropTypes.string,
// //   heading1: PropTypes.element,
// //   content1: PropTypes.element,
// //   image10Src: PropTypes.string,
// //   image9Alt: PropTypes.string,
// //   image1Src: PropTypes.string,
// // };

// // export default Hero17;

// //------------------------------------------------------
// import React, { Fragment } from "react";
// import Script from "dangerous-html/react";
// import "./Hero17.css";
// import Baby from "../images/baby.png";
// import books from "../images/books.png";
// import events from "../images/events.png";
// import Freelance from "../images/Freelance.png";
// import Health from "../images/Health.png";
// import Miscellaneous from "../images/Miscellaneous.png";
// import Electronics from "../images/Electronics.png";
// import Fashion from "../images/Fashion.png";
// import Home from "../images/Home.png";
// import Jobs from "../images/Jobs.png";
// import Pets from "../images/Pets.png";
// import RealEstate from "../images/RealEstate.png";
// import Services from "../images/Services.png";
// import Vehicles from "../images/Vehicles.png";

// const Hero17 = () => {
//   // Define your static content here
//   const heading1 = "Find What You Need";
//   const content1 =
//     "Search for items and services easily on Any-Post. Whether you’re looking to buy, sell, or trade, we’ve got you covered.";
//   const action1 = "Get Started Now";
//   const action2 = "Secondary action";

//   // Define your image sources and alt texts here
//   const images = [
//     {
//       src: Baby,
//       alt: "car",
//     },
//     {
//       src: books,
//       alt: "House Image",
//     },
//     {
//       src: events,
//       alt: "Job Image",
//     },
//     {
//       src: Freelance,
//       alt: "materials Image",
//     },
//     {
//       src: Health,
//       alt: "music Image",
//     },
//     {
//       src: Miscellaneous,
//       alt: "office Image",
//     },
//     {
//       src: Electronics,
//       alt: "others Image",
//     },
//     {
//       src: Fashion,
//       alt: "pets Image",
//     },
//     {
//       src: Home,
//       alt: "sofa Image",
//     },
//     {
//       src: Jobs,
//       alt: "sofa Image",
//     },
//     {
//       src: Pets,
//       alt: "Pet image",
//     },
//     {
//       src: RealEstate,
//       alt: "Pet image",
//     },
//     {
//       src: Services,
//       alt: "Pet image",
//     },
//     {
//       src: Vehicles,
//       alt: "Pet image",
//     },
//   ];

//   return (
//     <div className="hero17-header78">
//       <div className="hero17-column thq-section-padding thq-section-max-width">
//         <div className="hero17-content1">
//           <h1 className="hero17-text7 thq-heading-1">{heading1}</h1>
//           <p className="hero17-text8 thq-body-large">{content1}</p>
//         </div>
//         <div className="hero17-actions">
//           <button className="thq-button-filled hero17-button1">
//             <span className="hero17-text6 thq-body-small">{action1}</span>
//           </button>
//           <button className="thq-button-outline hero17-button2">
//             <span className="hero17-text5 thq-body-small">{action2}</span>
//           </button>
//         </div>
//       </div>
//       <div className="hero17-content2">
//         <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
//           <div className="thq-animated-group-horizontal">
//             {images.map((image, index) => (
//               <img
//                 key={index}
//                 alt={image.alt}
//                 src={image.src}
//                 className={`hero17-placeholder-image${
//                   index + 10
//                 } thq-img-scale thq-img-ratio-1-0`}
//               />
//             ))}
//           </div>
//           <div className="thq-animated-group-horizontal">
//             {images.map((image, index) => (
//               <img
//                 key={index}
//                 alt={image.alt}
//                 src={image.src}
//                 className={`hero17-placeholder-image${
//                   index + 16
//                 } thq-img-scale thq-img-ratio-1-1`}
//               />
//             ))}
//             {/* <img
//               alt="Hero Image"
//               src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
//               className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
//             /> */}
//           </div>
//         </div>
//         <div className="hero17-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
//           <div className="thq-animated-group-horizontal-reverse">
//             {images.map((image, index) => (
//               <img
//                 key={index}
//                 alt={image.alt}
//                 src={image.src}
//                 className={`hero17-placeholder-image${
//                   index + 22
//                 } thq-img-scale thq-img-ratio-1-1`}
//               />
//             ))}
//           </div>
//           <div className="thq-animated-group-horizontal-reverse">
//             {images.map((image, index) => (
//               <img
//                 key={index}
//                 alt={image.alt}
//                 src={image.src}
//                 className={`hero17-placeholder-image${
//                   index + 28
//                 } thq-img-scale thq-img-ratio-1-1`}
//               />
//             ))}
//             <img
//               alt="Hero Image"
//               src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
//               className="hero17-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
//             />
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="hero17-container2">
//           <Script
//             html={`<style>
//               @keyframes scroll-x {
//                 from {
//                   transform: translateX(0);
//                 }
//                 to {
//                   transform: translateX(calc(-100% - 10px));
//                 }
//               }
//               @keyframes scroll-y {
//                 from {
//                   transform: translateY(0.5);
//                 }
//                 to {
//                   transform: translateY(calc(-100% - 10px));
//                 }
//               }
//             </style>`}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero17;

import React, { Fragment } from "react";
import Script from "dangerous-html/react";
import "./Hero17.css";
import Baby from "../images/baby.png";
import books from "../images/books.png";
import events from "../images/events.png";
import Freelance from "../images/Freelance.png";
import Health from "../images/Health.png";
import Miscellaneous from "../images/Miscellaneous.png";
import Electronics from "../images/Electronics.png";
import Fashion from "../images/Fashion.png";
import Home from "../images/Home.png";
import Jobs from "../images/Jobs.png";
import Pets from "../images/Pets.png";
import RealEstate from "../images/RealEstate.png";
import Services from "../images/Services.png";
import Vehicles from "../images/Vehicles.png";

const Hero17 = () => {
  const heading1 = "Find What You Need";
  const content1 =
    "Search for items and services easily on Any-Post. Whether you’re looking to buy, sell, or trade, we’ve got you covered.";
  const action1 = "Get Started Now";
  const action2 = "Secondary action";

  const images = [
    { src: Baby, alt: "car" },
    { src: books, alt: "House Image" },
    { src: events, alt: "Job Image" },
    { src: Freelance, alt: "materials Image" },
    { src: Health, alt: "music Image" },
    { src: Miscellaneous, alt: "office Image" },
    { src: Electronics, alt: "others Image" },
    { src: Fashion, alt: "pets Image" },
    { src: Home, alt: "sofa Image" },
    { src: Jobs, alt: "sofa Image" },
    { src: Pets, alt: "Pet image" },
    { src: RealEstate, alt: "Pet image" },
    { src: Services, alt: "Pet image" },
    { src: Vehicles, alt: "Pet image" },
  ];

  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content1">
          <h1 className="hero17-text7 thq-heading-1">{heading1}</h1>
          <p className="hero17-text8 thq-body-large">{content1}</p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <span className="hero17-text6 thq-body-small">{action1}</span>
          </button>
          <button className="thq-button-outline hero17-button2">
            <span className="hero17-text5 thq-body-small">{action2}</span>
          </button>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            {images.map((image, index) => (
              <img
                key={index}
                alt={image.alt}
                src={image.src}
                className={`hero17-placeholder-image${
                  index + 10
                } thq-img-scale custom-image-dimensions`}
              />
            ))}
          </div>
          <div className="thq-animated-group-horizontal">
            {images.map((image, index) => (
              <img
                key={index}
                alt={image.alt}
                src={image.src}
                className={`hero17-placeholder-image${
                  index + 16
                } thq-img-scale custom-image-dimensions`}
              />
            ))}
          </div>
        </div>
        <div className="hero17-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            {images.map((image, index) => (
              <img
                key={index}
                alt={image.alt}
                src={image.src}
                className={`hero17-placeholder-image${
                  index + 22
                } thq-img-scale custom-image-dimensions`}
              />
            ))}
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            {images.map((image, index) => (
              <img
                key={index}
                alt={image.alt}
                src={image.src}
                className={`hero17-placeholder-image${
                  index + 28
                } thq-img-scale custom-image-dimensions`}
              />
            ))}
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image33 thq-img-scale custom-image-dimensions"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
              @keyframes scroll-x {
                from {
                  transform: translateX(0);
                }
                to {
                  transform: translateX(calc(-100% - 10px));
                }
              }
              @keyframes scroll-y {
                from {
                  transform: translateY(0.5);
                }
                to {
                  transform: translateY(calc(-100% - 10px));
                }
              }
            </style>`}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero17;
