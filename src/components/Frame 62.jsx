import { useMemo } from "react";

const Mailing = ({ propMargin }) => {
  const joinOurNewsletterStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  return (
    <div className="w-[345px] flex flex-col items-start justify-start gap-[33px] min-w-[345px] max-w-full text-left text-3xl text-white font-h2 mq450:gap-[16px] mq750:min-w-full mq1050:flex-1">
      <div className="w-[299px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
        <div
          className="flex-1 relative font-semibold mq450:text-lg"
          style={joinOurNewsletterStyle}
        >
          join our newsletter
        </div>
      </div>
      <div className="self-stretch rounded-51xl bg-slateblue flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border max-w-full gap-[20px] text-base text-gray mq450:flex-wrap mq450:pr-5 mq450:pb-5 mq450:box-border">
        <div className="self-stretch w-[345px] relative rounded-51xl bg-slateblue hidden max-w-full" />
        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <div className="relative leading-[31px] font-semibold inline-block min-w-[113px] z-[1]">
            Email Address
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[6.5px] px-9 bg-cornflowerblue-100 rounded-64xl flex flex-row items-start justify-start z-[1] hover:bg-cornflowerblue-200">
          <div className="relative text-base tracking-[0.1em] leading-[28px] uppercase font-semibold font-sub-heading text-white text-center inline-block min-w-[68px]">
            SUBMIT
          </div>
        </button>
      </div>
    </div>
  );
};

export default Mailing;
