import ChatInput from "./ChatInput"

const WelcomeScreen = () => {
      return(
            <section className="flex w-full flex-col items-center px-5 pt-[18vh] sm:px-8">
                  <h5 className="mb-13.75 text-center text-[32px] font-normal tracking-normal text-[#e3e3e3] sm:text-[30px] lg:text-[40px]">Where should we start?</h5>
                  <ChatInput />
            </section>
      )
};
export default WelcomeScreen;