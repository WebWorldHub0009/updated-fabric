import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaSearchLocation,
  FaHome,
  FaPhoneAlt,
  FaInfoCircle,
  FaDochub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";
import bgImg from "../assets/home/footer4.jpg";
import logo from "../assets/fabric.png";

export default function Footer() {
  return (
    <footer
      className="relative text-[#0d2357] pt-20 pb-10 px-6 md:px-16 overflow-hidden font-sans font-medium"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* White overlay for better contrast */}
      <div className="absolute inset-0  z-0"></div>

      {/* Grid Content */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">
        {/* About */}
        <div className="flex flex-col space-y-3">
          <img
            src={logo}
            alt="Innovatives Fabric Logo"
            className="w-50 h-auto mb-3"
          />
          <h4 className="font-bold mb-2 text-3xl text-[#0d2357] font-[italiana]">
            About Innovatives Fabric
          </h4>
          <p className="leading-relaxed text-gray-800">
            Innovatives Fabric brings timeless elegance to textiles — fusing tradition with
            innovation to elevate design across fashion, interiors, and beyond.
          </p>

          {/* Social Media Icons */}
          <div className="mt-4 flex space-x-4">
            <a
              href="https://www.facebook.com/innovativesfabric"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#3a2f19] transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/innovatives_fabrics/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-[#3a2f19] transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#0d2357] font-[italiana]">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-800">
            {[
              ["Home", "/", <FaHome key="home" />],
              ["About Us", "/about", <FaInfoCircle key="about" />],
              ["Catalouge", "/catalogue", <FaInfoCircle key="catalouge" />],
              ["Contact", "/contact", <FaPhoneAlt key="contact" />],
              ["Certificates", "/certificates", <FaDochub key="certificate" />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 hover:text-[#1c7925] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          <h4 className="mt-6 font-bold text-2xl text-[#0d2357] font-[italiana]">Emails</h4>
          <ul className="mt-2 space-y-2 text-gray-800">
            {[
              "ashish@innovativesfabric.com",
              "abhishek@innovativesfabric.com",
            ].map((email, i) => (
              <li key={i}>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center space-x-2 hover:text-[#1c7925] transition"
                >
                  <FaEnvelope className="text-[#1c7925]" />
                  <span>{email}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#0d2357] font-[italiana]">
            Our Fabric Offerings
          </h4>
          <ul className="space-y-2 text-gray-800">
            {[
              { name: "Acoustic Fabrics", route: "/services/fabric-for-acoustic" },
              { name: "Cinema Fabrics", route: "/services/fabric-for-cinema" },
              { name: "Home Theatre", route: "/services/fabric-for-home-theater" },
              { name: "Modular Furniture Fabric", route: "/services/fabric-for-modular-kitchen" },
              { name: "Glaze Cotton Stage Fabrics", route: "/services/glaze-cotton-fabric-for-stage-furnishing" },
              { name: "Cinema Chair Upholstery", route: "/services/cinema-chair-upholstery" },
            ].map((svc, i) => (
              <li key={i}>
                <Link
                  to={svc.route}
                  className="hover:text-[#1c7925] transition duration-300"
                >
                  {svc.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#0f1e40] font-[italiana]">
            Contact Info
          </h4>
          <address className="not-italic leading-relaxed mb-4 text-gray-800">
            KN-427, Building No. 983/49, Grower Saria Mill Compound, <br />
            Sewa Nagar, Meerut Road, Opp. RRTS Pillar No. 516,<br />
            Ghaziabad - 201001, U.P. (Delhi NCR)
          </address>
          
          {/* Clickable Phone */}
          <p className="text-sm text-gray-800 mb-2">
            Phone:{" "}
            <a href="tel:+919717958484" className="hover:text-[#1c7925] transition">
              (+91) 9717958484
            </a>
          </p>

          <div className="mb-4 flex justify-start items-center">
            <div>
               <Translator />
            </div>
           
          </div>

         
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-xs text-gray-900 border-t border-gray-300 pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>© {new Date().getFullYear()} Innovatives Fabric. All rights reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#3a2f19] transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </footer>
  );
}
