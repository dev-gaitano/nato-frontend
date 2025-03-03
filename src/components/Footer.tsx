import { Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const partners = [
    {
      name: "Safaricom PLC",
      logo: "https://www.aulgahnato.com/wp-content/uploads/2022/04/client-1.png?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Telkom",
      logo: "https://www.aulgahnato.com/wp-content/uploads/2022/04/client-2.png?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Hennessy",
      logo: "https://www.aulgahnato.com/wp-content/uploads/2022/04/client-3.png?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Skyy Vodka",
      logo: "https://www.aulgahnato.com/wp-content/uploads/2022/04/client-4.png?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Moet & Chadon",
      logo: "https://www.aulgahnato.com/wp-content/uploads/2022/04/client-5.png?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Glenmorangie",
      logo: "https://www.aulgahnato.com/wp-content/uploads/2022/04/client-6.png?auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Hivos",
      logo: "https://www.aulgahnato.com/wp-content/uploads/2022/04/client-7.png?auto=format&fit=crop&w=200&q=80",
    },
  ];

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 flex flex-col items-start mb-8 text-base">
        <div className="w-full flex">
          <div className="flex flex-col gap-8 w-1/2">
            <div className="flex w-full">
              <div className="flex flex-col w-1/2">
                <h3 className="font-bold text-gray-600">NEED ANY HELP?</h3>
                <div className="flex flex-col gold-gradient">
                  <a href="#">Contact Us</a>
                  <a href="#">My Order</a>
                  <a href="#">FAQs</a>
                  <a href="#">Unsubscribe</a>
                  <a href="#">Sitemap</a>
                </div>
              </div>
              <div className="flex flex-col w-1/2">
                <h3 className="font-bold text-gray-600">QUICK LINKS</h3>
                <div className="flex flex-col gold-gradient">
                  <a href="#">Home</a>
                  <a href="#">Shop</a>
                  <a href="#">Collections</a>
                  <a href="#">Press</a>
                  <a href="#">About Nato</a>
                  <a href="#">Privacy & Cookies</a>
                  <a href="#">Legal</a>
                  <a href="#">Management</a>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold text-gray-600">NATO SERVICES</h3>
              <div className="flex flex-col gold-gradient">
                <a href="#">Personal Styling</a>
                <a href="#">Celebrity Styling</a>
                <a href="#">Corprate / Brand Consulting</a>
                <a href="#">Occasion wear</a>
                <a href="#">Editorial Styling</a>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div>
              <h3 className="mb-6 font-bold text-gray-600">STORE LOCATION</h3>
              <input
                type="email"
                placeholder="Country/Region"
                className="w-full bg-black border-b"
              />
            </div>
            <div className="my-12">
              <h3 className="mb-6 font-bold text-gray-600">
                SIGN UP FOR NEWSLETTER
              </h3>
              <p className="mb-6 gold-gradient opacity-70">
                By entering your email address below, you consent to receiving
                our newsletter with access to our latest collections, events and
                initiatives. More details on this are provided in our Privacy
                Policy
              </p>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-black border-b"
              />
            </div>
            <div>
              <h3 className="mb-6 font-bold text-gray-600">COUNTRY/REGION</h3>
              <a href="#">Kenya</a>
            </div>
          </div>
        </div>
        <div className="mt-12 mb-24 pt-8 text-left text-nato-400 w-full">
          <div className="flex flex-nowrap overflow-x-auto py-4 -mx-2 items-center justify-center">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex justify-start space-y-3 min-w-[120px]"
              >
                <div className="w-[80px] h-[50px] relative p-0 hover-lift flex items-center justify-start">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img
            src="https://www.aulgahnato.com/wp-content/uploads/2021/01/nato-logo.png"
            alt="logo-image"
            className="w-[800px]"
          />
        </div>
        <div className="flex items-center justify-between w-full border-t border-gold-gradient mt-24">
          <p className="gold-gradient mt-12">
            &copy; {new Date().getFullYear()} NATO Fashion House. All rights
            reserved.
          </p>
          <div className="flex items-center space-x-4 mt-12">
            <a
              href="#"
              className="gold-gradient/60 hover:text-secondary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="gold-gradient/60 hover:text-secondary transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="gold-gradient/60 hover:text-secondary transition-colors"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="gold-gradient/60 hover:text-secondary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
