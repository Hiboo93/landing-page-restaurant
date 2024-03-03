import { FaUser } from "react-icons/fa";
import BgPolygon from "../../assets/polygon.png";
import Vector from "../../assets/vector-wave.png";


const BgStyle = {
  backgroundImage: `url(${BgPolygon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};

const About = ({ handlePopup }) => {
  return (
    <>
      <div style={BgStyle} className="py-14">
        <div className="container min-h-[500px] relative z-10">
          <h1 data-aos="fade" className="pt-20 tracking-wider text-4xl font-semibold text-white text-center">
            About Us
          </h1>

          {/* card section */}
          <div 
            data-aos="fade"
            data-aos-delay="300"
           className="bg-white/80 p-10 my-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat ab
            unde id facere officia, at non, laborum ullam nostrum deserunt ad
            maiores quis nulla reprehenderit? Quibusdam temporibus hic voluptas
            nihil. Modi, quaerat? Provident, itaque quasi! Ipsum distinctio
            officia temporibus asperiores iure neque magni sunt minus, doloribus
            doloremque. Labore eligendi facere consequatur ipsam est cupiditate
            minus voluptatum facilis quisquam, nihil officiis pariatur amet
            rerum sunt modi. Sit exercitationem id maxime repellendus, eligendi
            odit fugit nostrum numquam animi ducimus provident obcaecati quidem
            voluptatem quod vitae voluptatum est Deleniti minima quaerat quos
            soluta odio neque quod tempore saepe iusto!
            <div className="pt-10 flex justify-center">
              <button onClick={() => handlePopup()} className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 transition duration-300 border-0 cursor-pointer hover:text-blue-600">
                <FaUser />
                My Account
              </button>
            </div>
          </div>
        </div>

         {/* wave vector */}
         <div className="absolute top-0 right-0 w-full">
          <img src={Vector} alt="" className="mx-auto" />
         </div>
      </div>
    </>
  );
};

export default About;
