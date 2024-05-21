import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const FrameComponent8 = () => {
  const navigate = useNavigate();

  const onKryptoText2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <header className="self-stretch flex flex-row items-start justify-between pt-0 px-0 pb-[68px] box-border max-w-full gap-[20px] text-left text-xl text-white font-h2">
      <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
        <b
          className="relative leading-[28px] uppercase inline-block min-w-[80px] cursor-pointer"
          onClick={onKryptoText2Click}
        >
          krypto
        </b>
      </div>
      <nav className="m-0 w-[471px] flex flex-row items-start justify-start gap-[72.7px] max-w-full text-left text-xl text-white font-h2 mq750:hidden mq750:gap-[36px]">
        <div className="relative leading-[28px] inline-block min-w-[53px]">
          about
        </div>
        <div className="flex-1 relative leading-[28px] inline-block min-w-[61px]">
          pricing
        </div>
        <div className="flex-1 relative leading-[28px] inline-block min-w-[68px]">
          contact
        </div>
        <div className="flex-1 relative leading-[28px] inline-block min-w-[71px] whitespace-nowrap">
          buy nfts
        </div>
      </nav>
    </header>
  );
};

export default FrameComponent8;
