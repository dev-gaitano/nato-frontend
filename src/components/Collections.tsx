import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Collections = () => {
  const collections = [
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2022/11/shetta-dress-600x716.jpg?auto=format&fit=crop&q=80",
      title: "Arwa",
      collection: "Elegance Ease",
      price: "KSHs. 18,000",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2022/11/bellevue-dress-01-600x716.jpg?auto=format&fit=crop&q=80",
      title: "Hanifa",
      collection: "Elegance Ease",
      price: "KSHs. 20,000",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2022/11/tanya-dress-01-600x716.jpg?auto=format&fit=crop&q=80",
      title: "Dalia",
      collection: "Elegance Ease",
      price: "KSHs. 30,000",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2022/11/the-olivette-dress-600x716.jpg?auto=format&fit=crop&q=80",
      title: "Hunbun",
      collection: "Elegance Ease",
      price: "KSHs. 35,000",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2022/11/royal-albata-dress-01-600x716.jpg?auto=format&fit=crop&q=80",
      title: "Amina",
      collection: "Elegance Ease",
      price: "KSHs. 25,000",
    },
    {
      image:
        "https://www.aulgahnato.com/wp-content/uploads/2022/11/gypsy-mid-dress-01-600x716.jpg?auto=format&fit=crop&q=80",
      title: "Gamala",
      collection: "Elegance Ease",
      price: "KSHs. 18,500",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="collections"
      className="w-full pt-16 relative overflow-hidden bg-[radial-gradient(circle_at_center,_#f3e8e2_0%,_transparent_70%)]"
    >
      <div className="w-screen px-4 sm:px-6 lg:px-8 inset-0">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            Latest Collections
          </h2>
        </div>

        <Slider {...settings}>
          {collections.map((collection, index) => (
            <div key={index} className="w-full group cursor-pointer px-2">
              <div className="w-full relative overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-144 object-cover transform group-hover:scale-105 transition-transform duration-300 object-top"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-opacity"></div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-primary">{collection.collection}</p>
                <h3 className="text-xl mb-2">{collection.title}</h3>
                {/* <p className="text-gray-600">{collection.price}</p> */}
              </div>
            </div>
          ))}
        </Slider>
        <div className="text-center mb-8">
          <button className="border border-primary text-primary text-xs px-6 py-3 mt-4 transition-all ease-out duration-500 hover:border-gray-600 hover:text-gray-600 hover:px-3 hover:py-2">
            SHOP MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Collections;
