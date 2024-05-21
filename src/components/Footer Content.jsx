import Mailing from "./Frame 62";

const Footer = () => {
  return (
    <footer className="w-[1065px] flex flex-row items-start justify-start gap-[52px] max-w-full text-left text-base text-white font-h2 mq750:gap-[26px] mq1050:flex-wrap">
      <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full mq1050:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:flex-wrap">
          <div className="w-[125px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border text-3xl">
            <div className="w-[98px] relative uppercase font-semibold inline-block mq450:text-lg">
              krypto
            </div>
          </div>
          <div className="w-[127px] flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border gap-[19px]">
            <div className="self-stretch relative font-semibold">krypto</div>
            <div className="relative leading-[31px] font-semibold">
              <p className="m-0">Home</p>
              <p className="m-0">About</p>
              <p className="m-0">Buy NFTs</p>
              <p className="m-0">Sell NFTs</p>
            </div>
          </div>
          <div className="w-[123px] flex flex-col items-start justify-start gap-[19px]">
            <div className="self-stretch relative font-semibold">Market</div>
            <div className="relative leading-[31px] font-semibold">
              <p className="m-0">Browse NFTs</p>
              <p className="m-0">Buy NFTs</p>
              <p className="m-0">Sell NFTs</p>
            </div>
          </div>
          <div className="w-32 flex flex-col items-start justify-start gap-[19px]">
            <div className="self-stretch relative font-semibold">contact</div>
            <div className="w-[87px] relative leading-[31px] font-semibold inline-block">
              <p className="m-0">Email</p>
              <p className="m-0">LinkedIn</p>
              <p className="m-0">Instagram</p>
              <p className="m-0">Twitter</p>
            </div>
          </div>
        </div>
      </div>
      <Mailing />
    </footer>
  );
};

export default Footer;
