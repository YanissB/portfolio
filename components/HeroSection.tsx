const HeroSection = () => {
  return (
    <section
      id="hero"
      className="w-full flex flex-col items-center justify-center text-center pb-44"
    >
      <div className="relative h-full w-full">
        <div className="absolute right-64 inset-0 flex items-center justify-center">
          <div className="w-[532px] h-[532px] bg-white rounded-full sm:w-[400px] sm:h-[400px] aspect-[1/1] shadow-[6px_6px_0px_rgba(217,217,217,1)]"></div>
        </div>
        <h1 className="relative w-1/2 mx-auto right-28 top-20 text-black text-5xl text-end font-bold mb-4">
          Hey! <br /> I’m Yaniss Besson <br /> Web & Mobile Developer
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
