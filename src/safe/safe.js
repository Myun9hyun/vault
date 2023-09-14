// import React, { Component } from 'react';
// import { TimelineLite, Power1, Power2 } from 'gsap';

// class HowItWorksCollateralizationAnimation extends Component {
//   constructor(props) {
//     super(props);
//     this.containerRef = React.createRef();
//     this.internalIsPlaying = false;
//     this.breakpoints = {
//       deskBig: "deskBig",
//       deskSmall: "deskSmall",
//       tablet: "tablet",
//       mobileBig: "mobileBig",
//       mobileFluid: "mobileFluid"
//     };
//     this.currentBreakpoint = this.getCurrentBreakpoint();
//     window.addEventListener("resize", this.onResize);
//   }

//   componentDidMount() {
//     this.initAnimation();
//   }

//   componentWillUnmount() {
//     window.removeEventListener("resize", this.onResize);
//   }

//   play = () => {
//     if (this.internalIsPlaying) {
//       return;
//     }
//     this.internalIsPlaying = true;
//     this.animationOpenSafe();
//   };

//   pause = () => {
//     // nothing to do
//   };

//   stop = () => {
//     this.internalIsPlaying = false;
//     this.initAnimation();
//   };

//   showWithoutAnimation = () => {
//     this.animationOpenSafe(false);
//   };

//   getCurrentBreakpoint = () => {
//     const windowWidth = window.innerWidth;
//     if (windowWidth >= 1200) {
//       return this.breakpoints.deskBig;
//     } else if (windowWidth >= 992) {
//       return this.breakpoints.deskSmall;
//     } else if (windowWidth >= 768) {
//       return this.breakpoints.tablet;
//     } else if (windowWidth >= 375) {
//       return this.breakpoints.mobileBig;
//     } else {
//       return this.breakpoints.mobileFluid;
//     }
//   };

//   onResize = () => {
//     const newBreakpoint = this.getCurrentBreakpoint();
//     if (
//       this.currentBreakpoint !== newBreakpoint ||
//       newBreakpoint === this.breakpoints.mobileFluid
//     ) {
//       this.currentBreakpoint = newBreakpoint;
//       this.setLayouts(this.currentBreakpoint);
//     }
//   };

//   initAnimation = () => {
//     this.setLayouts(this.currentBreakpoint);
//     this.initElements();
//     this.initLogos();
//   };

//   initElements = () => {
//     this.elementLidBody = this.containerRef.current.querySelector(".lid-body");
//     this.elementLidSide = this.containerRef.current.querySelector(".lid-side");
//     this.elementLockers = this.containerRef.current.querySelectorAll(".locker");
//     this.elementLogos = this.containerRef.current.querySelectorAll(".partner-logo");
//     this.elementHandlerBottom = this.containerRef.current.querySelector(".handler-bottom");
//     this.elementHandlerMiddleRound = this.containerRef.current.querySelector(".handler-middle-round");
//     this.elementHandlerMiddleTop = this.containerRef.current.querySelector(".handler-middle-corner-top");
//     this.elementHandlerMiddleBottom = this.containerRef.current.querySelector(".handler-middle-corner-bottom");
//     this.elementHandlerHandlerTop = this.containerRef.current.querySelector(".handler-top");
//   };

//   initLogos = () => {
//     this.elementLogos.forEach(element => {
//       element.style.opacity = "0";
//     });
//   };

//   animationOpenSafe = (animationEnabled = true) => {
//     if (animationEnabled && !this.internalIsPlaying) {
//       return;
//     }
//     const openingTime = animationEnabled ? 0.7 : 0;

//     // Safe opening animation code here

//     // Move logos animation code here

//     const logosDistances = [
//       { x: 72, y: 23 },
//       { x: 54, y: 20 },
//       { x: 38, y: 23 },
//       { x: 17, y: 15 },
//       { x: 34, y: 20 },
//       { x: 20, y: 0 },
//       { x: 31, y: -20 },
//       { x: 18, y: -20 },
//       { x: 37, y: -24 },
//       { x: 53, y: -19 },
//       { x: 67, y: -25 }
//     ];

//     const gain = 5;

//     logosDistances.forEach((delta, index) => {
//       delta.x = delta.x * gain;
//       delta.y = delta.y * gain;
//     });

//     const appearStart = openingTime * 0.65;
//     const appearTime = animationEnabled ? 0.7 : 0;

//     setTimeout(() => {
//       logosDistances.forEach((logosDistance, index) => {
//         TweenLite.fromTo(
//           this.elementLogos[index],
//           appearTime,
//           {
//             x: `-=${logosDistance.x}`,
//             y: `+=${logosDistance.y}`,
//             opacity: 0
//           },
//           {
//             x: 0,
//             y: 0,
//             opacity: 1,
//             delay: appearStart,
//             ease: Power2.easeOut
//           }
//         );
//       });
//     }, 3000);
//   };

//   setLayouts = (currentBreakpoint) => {
//     // Layout adjustments based on currentBreakpoint

//     // Code for adjusting the layout based on the current breakpoint
//   };

//   render() {
//     return (
//       <div className="graph-container" ref={this.containerRef}>
//         {/* SVG content here */}
//       </div>
//     );
//   }
// }

// export default HowItWorksCollateralizationAnimation;

// // Usage
// const animation = new HowItWorksCollateralizationAnimation();
// animation.play();
