import ObjectOther18Icon from "./ObjectOther18Icon";

const Analytics = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 px-[42px] box-border max-w-full text-left text-xl text-white font-sub-heading lg:pl-[21px] lg:pr-[21px] lg:box-border">
      <div className="flex-1 flex flex-row items-end justify-start gap-[32px] max-w-full mq750:gap-[16px] mq1050:flex-wrap">
        <div className="h-[458px] w-[458px] relative max-w-full flex items-center justify-center">
          <ObjectOther18Icon />
        </div>
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[38px] box-border min-w-[328px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-[9px] text-lightblue">
              <div className="relative tracking-[0.1em] leading-[29px] uppercase font-semibold inline-block min-w-[128px] mq450:text-base mq450:leading-[22px]">
                ANALYTICS
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-1 pr-0 pl-0.5 box-border max-w-full text-38xl font-h2">
              <h1 className="m-0 flex-1 relative text-inherit leading-[100%] capitalize font-bold font-inherit inline-block max-w-full mq450:text-15xl mq450:leading-[34px] mq1050:text-27xl mq1050:leading-[46px]">
                Built-In Analytics to Track Your Nfts
              </h1>
            </div>
            <div className="w-[391px] flex flex-row items-start justify-start pt-0 px-[9px] pb-[11px] box-border max-w-full text-lg">
              <div className="flex-1 relative leading-[27.5px] inline-block max-w-full">
                Use our built-in analytics dashboard to pull valuable insights
                and monitor the value of your Krypto portfolio over time.
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[29px] px-[69px] bg-cornflowerblue-100 rounded-64xl flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full hover:bg-cornflowerblue-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="relative text-xl tracking-[0.1em] leading-[28px] uppercase font-semibold font-sub-heading text-white text-left">
                view our pricing
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
