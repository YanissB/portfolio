const Header = () => {
  return (
    <header className="w-full p-6 mt-4 border-b-[8px] border-black border-dashed">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl xs:text-xl font-bold">@ Yaniss_Besson</div>
        <nav className="hidden lg:flex space-x-8">
          <a href="#projects" className="text-3xl relative group">
            Projects
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#about" className="text-3xl relative group">
            About
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-3xl relative group">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
