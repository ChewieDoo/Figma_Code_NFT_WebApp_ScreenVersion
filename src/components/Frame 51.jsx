import ObjectOther07Icon from "./ObjectOther07Icon";

const Hero = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 px-[17px] box-border max-w-full text-left text-68xl text-white font-h2">
      <div className="flex-1 flex flex-row flex-wrap items-end justify-start gap-[13px] max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[86px] min-w-[339px] max-w-full mq450:gap-[21px] mq750:gap-[43px] mq1050:min-w-full">
          <div className="w-[510px] flex flex-col items-start justify-start gap-[12px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[100px] capitalize font-bold font-inherit z-[1] mq450:text-7xl mq450:leading-[40px] mq1050:text-24xl mq1050:leading-[60px]">
              discover and collect rare NFTs
            </h1>
            <div className="w-[381px] flex flex-row items-start justify-start py-0 px-1 box-border max-w-full text-lg font-sub-heading">
              <div className="flex-1 relative leading-[27.5px] inline-block max-w-full z-[1]">
                <p className="m-0">The most secure marketplace for buying</p>
                <p className="m-0">and selling unique crypto assets.</p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[26px] max-w-full mq750:flex-wrap">
              <button className="cursor-pointer [border:none] py-7 px-[57px] bg-cornflowerblue-100 flex-1 rounded-64xl flex flex-row items-start justify-start box-border min-w-[160px] whitespace-nowrap z-[1] hover:bg-cornflowerblue-200">
                <div className="h-[84px] w-[246px] relative rounded-64xl bg-cornflowerblue-100 hidden" />
                <div className="flex-1 relative text-xl tracking-[0.1em] leading-[28px] uppercase font-semibold font-sub-heading text-white text-center z-[1]">
                  buy nfts
                </div>
              </button>
              <button className="cursor-pointer py-[26px] px-[60px] bg-[transparent] flex-[0.9394] rounded-64xl box-border flex flex-row items-start justify-start min-w-[160px] whitespace-nowrap z-[1] border-[1px] border-solid border-white hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100 mq450:flex-1">
                <div className="h-[84px] w-[246px] relative rounded-64xl box-border hidden border-[1px] border-solid border-white" />
                <div className="flex-1 relative text-xl tracking-[0.1em] leading-[28px] uppercase font-semibold font-sub-heading text-white text-center inline-block min-w-[125px] z-[1]">
                  Sell nfts
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-16 box-border min-w-[332px] min-h-[608px] max-w-full mq750:pb-[42px] mq750:box-border">
          <div className="self-stretch h-[544px] relative max-w-full shrink-0 z-[1] flex items-center justify-center">
            <ObjectOther07Icon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
