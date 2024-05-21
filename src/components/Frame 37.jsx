import TestimoniatItem from "./Frame 41";

const Testimonials = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start gap-[43px] max-w-full text-left text-xl text-powderblue font-sub-heading mq750:gap-[21px]">
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[25px] pl-5 box-border max-w-full">
        <div className="w-[486px] flex flex-col items-start justify-start gap-[27px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="relative tracking-[0.1em] leading-[28px] uppercase font-semibold mq450:text-base mq450:leading-[22px]">
              testimonials
            </div>
          </div>
          <h1 className="m-0 self-stretch relative text-38xl leading-[100%] capitalize font-bold font-h2 text-white text-center mq450:text-15xl mq450:leading-[34px] mq1050:text-27xl mq1050:leading-[46px]">
            <p className="m-0">read what others</p>
            <p className="m-0">have to say</p>
          </h1>
        </div>
      </div>
      <div className="self-stretch grid flex-row items-start justify-start max-w-full grid-cols-[repeat(3,_minmax(272px,_1fr))] text-white lg:[grid-row-gap:20px] lg:justify-center lg:grid-cols-[repeat(2,_minmax(272px,_472px))] mq750:grid-cols-[minmax(272px,_1fr)]">
        <TestimoniatItem
          sandraColeman="Sandra Coleman"
          maskGroup="/mask-group@2x.png"
        />
        <TestimoniatItem
          sandraColeman="Gill Bates"
          maskGroup="/mask-group-1@2x.png"
          propWidth="347px"
          propAlignSelf="unset"
          propDisplay="inline-block"
          propMinWidth="125px"
          propMixBlendMode="unset"
        />
        <TestimoniatItem
          sandraColeman="LeBron James"
          maskGroup="/mask-group-2@2x.png"
          propWidth="unset"
          propAlignSelf="stretch"
          propDisplay="unset"
          propMinWidth="unset"
          propMixBlendMode="luminosity"
        />
      </div>
    </section>
  );
};

export default Testimonials;
