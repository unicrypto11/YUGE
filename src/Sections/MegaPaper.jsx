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
    ><div className="flex flex-row justify-end sm:pt-[5vw] pt-[24vw] sm:pr-[20vw] pr-[10vw] ">
      <div className="text-white sm:w-[24vw] sm:h-[24vw] w-[36vw] h-[36vw] justify-center items-center bg-[url(/public/images/whitepaper.png)] bg-cover">
        <div onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1pyVBC4rI3q0XDmupsogFyiPJZI9tllaq/view?usp=drive_link",
              "_blank"
            )
          } className=" relative hover:cursor-pointer" >
            <div className="sm:text-[3vw]  text-left text-[6vw] sm:py-[6vw] py-[8vw] sm:px-[6vw] px-[8vw]"><span className="sm:text-[6vw] text-[8vw]">READ</span> <br /> megapaper</div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MegaPaper;
