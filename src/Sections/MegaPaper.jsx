import React from "react";

const MegaPaper = () => {
  return (
    <div
    id="mega"
      className=" sm:h-[56vw] h-[105vw] relative sm:bg-[url(/public/images/Group59445.png)] bg-[url(/public/images/smroadmapbg.png)]"
      style={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%, 100%",
      }}
    >
      <div className="text-white absolute right-[30vw] top-[15vw]">
        <div onClick={()=>{
            window.open('whitepaper/whitepaper2.1.pdf', '_blank');}} className=" relative hover:cursor-pointer" >
          <div  className="relative text-center left-[6vw]">
            <div className="sm:text-[3.5vw] text-[10vw]">READ</div>
            <div style={{ textTransform: "uppercase" }} className="sm:text-[2vw] text-[6vw]">
              Mega Paper
            </div>
          </div>
          <div className=" absolute sm:top-[-5vw] sm:left-[1vw] sm:w-[20vw] sm:h-[20vw] top-[-8vw] left-[-5vw] w-[48vw] h-[48vw]">
            <img src="images/legacy.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaPaper;
