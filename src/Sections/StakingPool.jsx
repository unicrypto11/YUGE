const StakingPool = () => {
  return (
    <>
      <div
        className="w-full sm:h-[80vw] h-[100vw] py-[10vw] px-[5vw] bg-no-repeat sm:bg-[url(/public/images/staking.png)] bg-[url(/public/images/smstaking.png)]"
        style={{
          backgroundSize: "100%, 100%",
        }}
      >
        <div className="flex flex-col justify-start  rounded-2xl px-[2vw] sm:pt-[3vw] pt-[8vw] ">
          <p className="text-[#FF4A4A] sm:text-[4vw] text-[8vw]">
            Staking Pool
          </p>
          <div className="w-full px-[5vw] sm:pt-[4vw] pt-[10vw] flex flex-row justify-center gap-[3vw] items-center">
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
               <p className="text-[#FF4A4A] text-[6vw]">$YUGE</p>
               <p className="text-[#FF4A4A] text-[4vw]">---YUGE Prizes!---</p>
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
      </div>
    </>
  );
};

export default StakingPool;
