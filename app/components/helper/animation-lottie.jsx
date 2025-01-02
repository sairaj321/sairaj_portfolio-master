"use client";

import dynamic from "next/dynamic";
const DynamicLottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  
  return (
    <DynamicLottie animationData={animationPath} loop={true} autoPlay={true} />
  );
};

export default AnimationLottie;
