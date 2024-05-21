import NavBar from "./Footer";
import Hero from "./Frame 51";
import Featured from "./Frame 52";
import Analytics from "./Frame 53";
import EmailField from "./EmailField";
import Testimonials from "./Frame 37";
import GetStarted from "./Newsletter Content";
import Footer from "./Footer Content";

const HomeScreen = () => {
  return (
    <div className="w-full relative bg-midnightblue overflow-hidden flex flex-col items-end justify-start pt-9 px-[178px] pb-0 box-border gap-[64px] leading-[normal] tracking-[normal] lg:pl-[89px] lg:pr-[89px] lg:box-border mq450:gap-[16px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[32px] mq750:pl-11 mq750:pr-11 mq750:box-border">
      <div className="w-[1619px] h-[1592px] absolute !m-[0] top-[-469px] right-[-369px] flex items-center justify-center z-[0]">
        <img
          className="w-full h-full object-contain absolute left-[-95px] top-[153px] [transform:scale(1.192)]"
          alt=""
          src="/background-circles.svg"
        />
      </div>
      <NavBar />
      <main className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[180px] box-border gap-[106px] max-w-full lg:gap-[53px] lg:pb-[76px] lg:box-border mq450:pb-8 mq450:box-border mq750:gap-[26px] mq1050:pb-[49px] mq1050:box-border">
        <Hero />
        <Featured />
        <Analytics />
        <EmailField />
        <Testimonials />
        <GetStarted />
      </main>
      <Footer />
      <div className="mr-[-200px] w-[1489px] h-5 relative rounded-11xl [background:linear-gradient(98.25deg,_#8e8edb,_#aad9d9)] max-w-[138%] shrink-0" />
    </div>
  );
};

export default HomeScreen;
