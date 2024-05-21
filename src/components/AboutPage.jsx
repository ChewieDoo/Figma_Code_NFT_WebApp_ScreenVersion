import FrameComponent8 from "./FrameComponent8";
import FrameComponent7 from "./FrameComponent7";
import FrameComponent6 from "./FrameComponent6";

const AboutPage = () => {
  return (
    <div className="w-[1440px] bg-midnightblue max-w-full overflow-hidden flex flex-col items-start justify-start pt-9 pb-0 pr-[184px] pl-[186px] box-border gap-[106px] leading-[normal] tracking-[normal] text-left text-lg text-white font-sub-heading lg:pl-[93px] lg:pr-[92px] lg:box-border mq750:gap-[53px] mq750:pl-[46px] mq750:pr-[46px] mq750:box-border mq450:gap-[26px] mq450:pl-5 mq450:pr-5 mq450:box-border">
      <FrameComponent8 />
      <FrameComponent7 />
      <div className="w-[796px] flex flex-row items-start justify-start pt-0 px-2 pb-[152px] box-border max-w-full">
        <div className="flex-1 relative leading-[27.5px] inline-block max-w-full">
          NFTs are not ead an KRYPTO is an app that lets you invest in NFTs tat
          are relevant to today’s socicety,
        </div>
      </div>
      <div className="w-[182px] flex flex-row items-start justify-start pt-0 px-0 pb-[228px] box-border text-xl">
        <div className="flex-1 relative tracking-[0.1em] leading-[28px] uppercase font-semibold z-[2] mq450:text-base mq450:leading-[22px]">
          Featured on
        </div>
      </div>
      <FrameComponent6 />
      <div className="ml-[-212px] w-[1489px] h-[29px] relative rounded-11xl [background:linear-gradient(98.25deg,_#8e8edb,_#aad9d9)] max-w-[140%] shrink-0" />
    </div>
  );
};

export default AboutPage;
