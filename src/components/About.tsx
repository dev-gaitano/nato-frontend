const About = () => {
  return (
    <section id="about" className="relative overflow-hidden p-4">
      <div className="relative">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2c/African_Girl.JPG"
          alt="about-image-background"
          className="w-full object-cover"
        />
      </div>
      <div className="absolute bottom-32 left-60 translate-y-[-50%] w-full">
        <p className="gold-gradient w-[540px] text-xl">
          <span className="inline text-7xl float-start mr-1 font-other">E</span>
          very woman is a masterpiece, and my designs celebrate her unique
          colors, shapes, and spirit. At NATO, fashion is more than style—it's a
          movement of inclusivity, embracing women and vulnerable communities
          with designs that honor all body types. Sustainability is at our core,
          weaving eco-consciousness into every stitch. Proudly Kenyan, our
          collections pulse with the rhythm of Africa, blending heritage with
          modern elegance. From bespoke couture to ready-to-wear, NATO is a
          tapestry of artistry, purpose, and empowerment.{" "}
        </p>
        <p className="text-primary mt-4">~ Aulgah Nato</p>
        <button className="border border-primary text-primary text-xs px-6 py-3 mt-8 transition-all ease-out duration-500 hover:border-gray-600 hover:text-gray-600 hover:px-3 hover:py-2">
          MORE ABOUT US
        </button>
      </div>
    </section>
  );
};

export default About;
