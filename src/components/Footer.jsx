import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const onAboutTextClick = useCallback(() => {
    navigate("/about-page");
  }, [navigate]);

  return (
    <header className="self-stretch flex flex-row items-start justify-end pt-0 pb-[42px] pr-1.5 pl-[11px] box-border max-w-full text-left text-xl text-white font-h2">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px]">
        <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
          <b className="relative leading-[28px] uppercase inline-block min-w-[87px] z-[1]">
            krypto
          </b>
        </div>
        <nav className="m-0 w-[471px] flex flex-row items-start justify-start gap-[72.7px] max-w-full text-left text-xl text-white font-h2 mq750:hidden mq750:gap-[36px]">
          <div
            className="relative leading-[28px] inline-block min-w-[53px] cursor-pointer z-[1]"
            onClick={onAboutTextClick}
          >
            about
          </div>
          <div className="flex-1 relative leading-[28px] inline-block min-w-[61px] z-[1]">
            pricing
          </div>
          <div className="flex-1 relative leading-[28px] inline-block min-w-[68px] z-[1]">
            contact
          </div>
          <div className="flex-1 relative leading-[28px] inline-block min-w-[71px] whitespace-nowrap z-[1]">
            buy nfts
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
