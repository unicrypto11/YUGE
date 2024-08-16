const StakingPool = () => {
  return (
    <>
      <div
        className="w-full sm:h-[120vw] h-[140vw] py-[10vw] px-[5vw] bg-no-repeat sm:bg-[url(/public/images/bg1.png)] bg-[url(/public/images/bg1.png)]"
        style={{
          backgroundSize: "100%, 100%",
        }}
      >
        <div className="flex flex-col justify-start  rounded-2xl px-[2vw] sm:pt-[8vw] pt-[8vw] ">
          <p className="text-[#FF4A4A] sm:text-[4vw] text-[8vw]">
            Staking Pool
          </p>
          <div className="w-full px-[5vw] sm:pt-[10vw] pt-[10vw] flex flex-row justify-center gap-[3vw] items-center">
            <div className="flex flex-col gap-[2vw] justify-center items-center">
              <div
                className="w-[20vw] h-[20vw] rounded-[2vw] bg-[url(/public/images/BIT.png)] drop-shadow-[0_0px_10px_rgba(255,40,40,0.6)] "
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100%, 100%",
                }}
              ></div>
              <p className="text-white text-[4vw]">$Bits</p>
            </div>
            <div className="flex flex-col gap-[1vw] justify-center items-center">
              <div
                className="w-[32vw] h-[32vw] rounded-[2vw] bg-[url(/public/images/YUGE.png)] drop-shadow-[0_0px_30px_rgba(255,12,20,1)]"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100%, 100%",
                }}
              ></div>
               <p className="text-white text-[6vw] drop-shadow-[0_0px_5px_rgba(255,12,20,1)] ">$YUGE</p>
               
            </div>
            <div className="flex flex-col gap-[2vw] justify-center items-center">
            <div
              className="w-[20vw] h-[20vw] rounded-[2vw] bg-[url(/public/images/EXE.png)] drop-shadow-[0_0px_10px_rgba(255,40,40,0.6)]"
              style={{
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%, 100%",
              }}
            ></div>
             <p className="text-white text-[4vw]">$EXE</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start  rounded-2xl px-[2vw] sm:pt-[4vw] pt-[8vw] ">
            <p className="text-[#FF4A4A] sm:text-[4vw] text-[8vw] sm:pt-[4vw] pt-[4vw]"> YUGO Prizes</p>
            
            <div className="flex flex-row gap-[2vw] justify-center sm:pt-[12vw] pt-[6vw]">
                <p className="flex text-white sm:text-[4vw] text-[5vw] justify-center sm:w-[35vw] w-[40vw] border-solid border-[0.3vw]  sm:py-[2vw] py-[4vw] rounded-full">Meme Contests</p>
                <p className="flex text-white sm:text-[4vw] text-[5vw] justify-center sm:w-[35vw] w-[40vw] border-solid border-[0.3vw]  sm:py-[2vw] py-[4vw] rounded-full">Community Growth</p>
            
            </div>
        </div>
      </div>
    </>
  );
};

export default StakingPool;
