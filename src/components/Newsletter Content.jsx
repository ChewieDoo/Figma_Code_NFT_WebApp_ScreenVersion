const GetStarted = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full text-center text-xl text-black font-sub-heading">
      <div className="flex-1 rounded-11xl [background:linear-gradient(98.25deg,_#8e8edb,_#aad9d9)] flex flex-col items-center justify-start pt-[54px] pb-[41px] pr-[21px] pl-5 box-border gap-[31px] max-w-full mq450:pt-[35px] mq450:pb-[27px] mq450:box-border mq750:gap-[15px]">
        <div className="w-[1066px] h-[389px] relative rounded-11xl [background:linear-gradient(98.25deg,_#8e8edb,_#aad9d9)] hidden max-w-full" />
        <div className="w-[587px] flex flex-row items-start justify-center py-0 pr-0 pl-[7px] box-border max-w-full">
          <div className="w-[318px] relative tracking-[0.1em] leading-[27.5px] uppercase font-semibold inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[22px]">
            are you ready?
          </div>
        </div>
        <div className="w-[587px] flex flex-col items-start justify-start gap-[36px] max-w-full text-38xl text-white font-h2 mq750:gap-[18px]">
          <h1 className="m-0 self-stretch relative text-inherit leading-[100%] capitalize font-bold font-inherit z-[1] mq450:text-15xl mq450:leading-[34px] mq1050:text-27xl mq1050:leading-[46px]">
            <p className="m-0">be a part of the</p>
            <p className="m-0">next big thing</p>
          </h1>
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <button className="cursor-pointer [border:none] py-[29px] px-5 bg-black w-[345px] rounded-64xl flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[1] hover:bg-darkslategray">
              <div className="relative text-xl tracking-[0.1em] leading-[28px] uppercase font-semibold font-sub-heading text-white text-left">
                get started
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
