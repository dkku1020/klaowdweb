const Hero = () => {
  return (
    <div className="relative h-screen w-screen">
      {" "}
      {/* Full screen height */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        {" "}
        {/* Video covers the entire area */}
        <source src="/heroVideo.mp4" />
      </video>
    </div>
  );
};

export default Hero;
