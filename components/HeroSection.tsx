const HeroSection = () => {
  return (
    <section
      id="hero"
      className="w-full flex flex-col items-center justify-center text-center pb-44"
    >
      <div className="relative w-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[400px] h-[400px] lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] xs:w-[300px] xs:h-[300px] bg-white rounded-full shadow-[6px_6px_0px_rgba(217,217,217,1)]"></div>
        </div>
        <h1 className="relative 2xl:right-80 w-full lg:w-2/3 md:w-3/4 sm:w-full mx-auto text-black text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-2xl sm:text-end xs:text-center font-bold mb-4 pt-20">
          Hey! <br /> I&apos;m Yaniss Besson <br /> Web & Mobile Developer
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
