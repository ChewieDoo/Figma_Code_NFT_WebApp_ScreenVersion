const Featured = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full text-left text-xl text-white font-sub-heading">
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="w-[182px] relative tracking-[0.1em] leading-[28px] uppercase font-semibold inline-block z-[1] mq450:text-base mq450:leading-[22px]">
          Featured on
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
          <div className="flex-1 rounded-6xs bg-slateblue flex flex-row items-end justify-between py-[23px] pr-[92px] pl-[74px] box-border max-w-full gap-[20px] z-[1] mq750:pr-[23px] mq750:box-border mq1050:flex-wrap mq1050:pl-[37px] mq1050:pr-[46px] mq1050:box-border">
            <div className="h-[106px] w-[1065px] relative rounded-6xs bg-slateblue hidden max-w-full" />
            <img
              className="h-[60px] w-[167px] relative object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/image-6@2x.png"
            />
            <div className="w-[149px] flex flex-col items-start justify-end pt-0 px-0 pb-[18px] box-border">
              <img
                className="self-stretch h-[23px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-5@2x.png"
              />
            </div>
            <div className="w-[61px] flex flex-col items-start justify-end pt-0 px-0 pb-[13px] box-border">
              <img
                className="self-stretch h-[33px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-7@2x.png"
              />
            </div>
            <div className="w-[102px] flex flex-col items-start justify-end pt-0 px-0 pb-[17px] box-border">
              <img
                className="self-stretch h-[25px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/image-8@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
