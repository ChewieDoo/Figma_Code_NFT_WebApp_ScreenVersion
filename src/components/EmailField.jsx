import ObjectOther17Icon from "./ObjectOther17Icon";

const EmailField = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 px-[33px] box-border max-w-full text-left text-xl text-powderblue font-sub-heading">
      <div className="flex-1 flex flex-row items-end justify-start gap-[50px] max-w-full mq750:gap-[25px] mq1050:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[34px] box-border min-w-[328px] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq750:gap-[25px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
              <div className="w-[200px] flex flex-row items-start justify-start py-0 px-[9px] box-border">
                <div className="flex-1 relative tracking-[0.1em] leading-[29px] uppercase font-semibold mq450:text-base mq450:leading-[22px]">
                  get our app
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full text-38xl text-white font-h2">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
                  <h1 className="m-0 flex-1 relative text-inherit leading-[100%] capitalize font-bold font-inherit inline-block max-w-full mq450:text-15xl mq450:leading-[34px] mq1050:text-27xl mq1050:leading-[46px]">
                    browse nfts from your smartphone
                  </h1>
                </div>
                <div className="w-[373px] relative text-lg leading-[27.5px] font-sub-heading inline-block max-w-full">
                  Our Krypto app is the easiest way to keep track of your assets
                  when you’re on the go.
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[29px] px-[68px] bg-cornflowerblue-100 rounded-64xl flex flex-row items-start justify-start box-border whitespace-nowrap max-w-full hover:bg-cornflowerblue-200 mq450:pl-5 mq450:pr-5 mq450:box-border">
              <div className="relative text-xl tracking-[0.1em] leading-[27.5px] uppercase font-semibold font-sub-heading text-white text-left">
                Download on ios
              </div>
            </button>
          </div>
        </div>
        <ObjectOther17Icon />
      </div>
    </section>
  );
};

export default EmailField;
