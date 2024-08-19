import React from "react";

const Roadmap = () => {
  return (
    <div 
      className="w-full h-[100vw] bg-no-repeat bg-[url(/public/images/roadmapbg.png)]"
      style={{
        backgroundSize: "100%, 100%"
      }}
    >
      <div id="road" className="flex flex-col w-full sm:py-[12vw] py-[4vw] px-[6vw] gap-[2vw] justify-between">
        <div className="text-[#FF4A4A] sm:text-[4vw] text-[8vw] pb-[4vw]">ROADMAP</div>
        <div className="flex flex-row w-full gap-[2vw] h-[70vw]">
          <div className=" flex flex-col gap-[2vw] w-[35vw]">
            <div className=" border-[2px] border-white pt-[3vw] px-[2vw] h-[30%]">
              <div className="text-[#FF4A4A] text-[4vw]">STEP1</div>
              <div className="text-white text-[3vw]">
                Genesis and founders liquidity
              </div>
            </div>
            <div className=" border-[2px] flex flex-col justify-start
             border-white h-[70%] py-[3vw] px-[2vw] relative">
              <div className="text-[#FF4A4A] text-[4vw] pb-[1vw]">STEP4</div>
              
              <div className="flex flex-col justify-end w-[100%] items-end gap-[1vw]">
              <div className="text-[#ffffff] text-[4vw] text-right pb-[1vw]">staking pool</div>
                <div className="flex flex-row text-center items-center justify-end gap-[3vw] text-white w-[80%] text-[3vw]">
                 <div className="bg-[url(/public/images/BIT.png)] bg-cover drop-shadow-[0_0px_12px_rgba(255,0,0,0.5)] w-[6vw] h-[6vw] rounded-[1vw]">
                 </div>
                 <p className="w-[7vw] text-left">$Bits</p> 
                </div>
                <div className="flex flex-row text-center items-center justify-end gap-[3vw] text-white w-[80%] text-[3vw]">
                 <div className="bg-[url(/public/images/EXE.png)] bg-cover drop-shadow-[0_0px_12px_rgba(255,0,0,0.5)] w-[6vw] h-[6vw] rounded-[1vw]">
                 </div>
                 <p className="w-[7vw] text-left">$EXE</p> 
                </div>
                <div className="flex flex-row text-center items-center justify-end gap-[1vw] text-white w-[80%] text-[4vw] drop-shadow-[0_0px_8px_rgba(255,0,0,1)]">
                 <div className="bg-[url(/public/images/YUGE.png)] bg-cover drop-shadow-[0_0px_8px_rgba(255,0,0,1)] w-[10vw] h-[10vw] rounded-[1vw]">
                 </div>
                 <p className="w-[7vw]  text-left">$YUGE</p> 
                </div>
                
                  <img className=" absolute left-0 bottom-0 w-[16vw]" src="./images/step4.png" alt="" />
                
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-[2vw] w-[60vw]">
            <div className="h-[58%] gap-[2vw] flex flex-row w-full">
              <div className="w-[50%] border-[2px] border-white flex flex-col  py-[3vw] px-[2vw]">
                <div className="text-[#FF4A4A] text-[4vw]">STEP2</div>
                <div className="text-white text-[3vw]" style={{textTransform:"uppercase"}}>
                    
                Transfer to microDAO /EXE custody to wait for full DAO functionality
                </div>
              </div>
              <div className="w-[50%] flex flex-col border-[2px] border-white  px-[2vw] pt-[3vw] h-[80%]">
                <div className="text-[#FF4A4A] text-[4vw]">STEP3</div>
                <div className="text-[4vw] text-white">
                  Meme contests
                </div>
                <div className="text-[3vw] text-white">
                Community Growth <br /> YUGE Prizes
                </div>
              </div>
            </div>
            <div className="h-[40%] border-[2px] flex flex-col border-white px-[2vw] pt-[1vw] relative">
              <div className=" text-[6vw] text-[#FF4A4A]">STEP5</div>
              <div className=" text-white text-[4vw]">
                MICRODAO DECIDES WHAT TO DO WITH TREASURY AND HOW TO GROW!
              </div>
                <img className=" absolute right-0 top-0 -translate-y-[100%] w-[25vw] z-20" src="./images/step5.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
