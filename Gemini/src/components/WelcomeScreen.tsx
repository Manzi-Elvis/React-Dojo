import ChatInput from "./ChatInput"

const WelcomeScreen = () => {
      return(
            <section className="flex w-full flex-col items-center px-5 pt-[18vh] sm:px-8">
                  <h5 className="mb-[55px] text-center text-[32px] font-normal tracking-tight text-[#e3e3e3] sm:text-[42px] lg:text-[48px]">Where should we start?</h5>
                  <ChatInput />
            </section>
      )
};
export default WelcomeScreen;