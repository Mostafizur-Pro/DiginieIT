const Header = () => {
  return (
    <div>
      <header className="relative h-screen flex items-center justify-center">
        <video
          className="absolute top-0 left-0 w-full h-[80%] object-cover z-1  "
          autoPlay
          loop
          muted
        >
          <source src="/video/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>

      
    </div>
  );
};

export default Header;
