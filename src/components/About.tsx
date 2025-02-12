import SpotlightCard from "../components/SpotlightCard"

const About = () => {
    return (
        <section className={`relative w-full h-screen mx-auto bg-black z-0`}>
            <div className="flex flex-row items-start gap-35 w-full top-[200px] absolute">
                <div className="w-1/2">
                <p className="text-white lg:text-[46px] sm:text-[40px] xs:text-[36px] text-[30px] lg:leading-[46px]" style={{paddingLeft:'60px'}}>
                    <text>MetaQuest</text> - онлайн платформа, де саме ТИ можеш створювати та проходити квести як онлайн, так і наживо
                </p>
                </div>
                <div>
                <SpotlightCard className="custom-spotlight-card z-60 top-[80px]" spotlightColor="rgba(255, 255, 255, 0.2)" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className="flex flex-col items-center gap-3.5" style={{paddingLeft:'50px', paddingRight:'50px', paddingTop:'30px', paddingBottom:'15px'}}>
                        <p className="text-white lg:text-[46px] sm:text-[40px] xs:text-[36px] text-[30px] lg:leading-[46px]">Випробуй себе</p>
                        <p className="text-white lg:text-[46px] sm:text-[40px] xs:text-[36px] text-[30px] lg:leading-[46px]">вже зараз!</p>
                        <div id="main-button">
                            <a className="text-white lg:text-[26px] sm:text-[22px] xs:text-[18px] text-[17px] lg:leading-[26px]">
                                Створи свій квест!
                            </a>
                        </div>
                            <p>або</p>
                        <div id="go_to_exhist">
                            <a href="#QuestCards" className="text-white lg:text-[26px] sm:text-[22px] xs:text-[18px] text-[17px] lg:leading-[26px]">
                                Перейди до існуючих
                            </a>
                        </div>
                    </div>
                </SpotlightCard>
                </div>
            </div>
        </section>
      );
  };
  
  export default About;