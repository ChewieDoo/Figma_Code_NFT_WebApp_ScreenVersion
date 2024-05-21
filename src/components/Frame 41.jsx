import { useMemo } from "react";

const TestimoniatItem = ({
  sandraColeman,
  maskGroup,
  propWidth,
  propAlignSelf,
  propDisplay,
  propMinWidth,
  propMixBlendMode,
}) => {
  const getAppContentStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const sandraColemanStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const maskGroupIconStyle = useMemo(() => {
    return {
      mixBlendMode: propMixBlendMode,
    };
  }, [propMixBlendMode]);

  return (
    <div className="h-[365px] relative max-w-full text-left text-xl text-white font-sub-heading">
      <div className="absolute top-[87px] left-[0px] w-full flex flex-col items-start justify-start pt-20 px-0 pb-[39px] box-border gap-[28px] max-w-full">
        <img
          className="w-[calc(100%_-_12px)] h-full absolute !m-[0] top-[0px] right-[8px] bottom-[0px] left-[4px] rounded-xl max-w-full overflow-hidden max-h-full"
          alt=""
          src="/rectangle-21.svg"
        />
        <div
          className="flex flex-row items-start justify-start py-0 px-[71px] box-border max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border"
          style={getAppContentStyle}
        >
          <div
            className="relative tracking-[0.1em] leading-[28px] uppercase font-semibold z-[1] mq450:text-base mq450:leading-[22px]"
            style={sandraColemanStyle}
          >
            {sandraColeman}
          </div>
        </div>
        <div className="self-stretch h-[103px] relative leading-[119%] text-center inline-block shrink-0 z-[1] mq450:text-base mq450:leading-[19px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. `}</div>
      </div>
      <div className="absolute top-[0px] left-[104px] w-[149px] h-[149px]">
        <img
          className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
          loading="lazy"
          alt=""
          src={maskGroup}
          style={maskGroupIconStyle}
        />
        <div className="absolute top-[10px] left-[114px] rounded-[50%] bg-powderblue w-[22px] h-[22px] mix-blend-screen z-[2]" />
      </div>
    </div>
  );
};

export default TestimoniatItem;
