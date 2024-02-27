import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="text-white mt-20">
        <div className="container bg-primary rounded-t-3xl">
          {/* header section */}
          <h1 className="text-white py-10 text-3xl font-bold text-center ">
            Contact Us
          </h1>

          {/* grid section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 border-b-2 border-white pb-6">
            {/* Address section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <IoLocationSharp className="text-5xl " />
              </div>
              <p className="text-white">
                #92, 3rd Main, Virgo Nagar, Post,
                <br /> Seegehalli, Bengaluru, Karnataka 560049
              </p>
            </div>

            {/* Email section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <MdEmail className="text-5xl" />
              </div>
              <div>
                <p className="text-white">info@goodfood.com</p>
                <p className="text-white">hr@goodfood.com</p>
              </div>
            </div>

            {/* Number section */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
              <FaPhoneAlt className="text-5xl" />
              </div>
              <div>
                <p className="text-white">+33 240345066 - Sales and Service</p>
                <p className="text-white">+33 732256064 - Hiring Queries</p>
                <p className="text-white">+33 620443710 - Whatsapp</p>
              </div>
            </div>
          </div>

          {/* copyright section */}
          <div className="flex justify-between p-4 items-center">
            <p className="text-white">Copyright 2022 TCJ. All rights reserved</p>
            <div className="flex items-center gap-6" >
              <Link className="text-white" to={"#"}>Privacy Policy</Link>
              <Link className="text-white" to={"#"}>Terms & Condition</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
