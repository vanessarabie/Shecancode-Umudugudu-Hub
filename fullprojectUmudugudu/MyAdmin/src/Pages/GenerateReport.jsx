import "../styles/report.css";
import { IoIosPeople } from "react-icons/io";
import { MdFamilyRestroom } from "react-icons/md";
import { FaChildren } from "react-icons/fa6";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

function Generatereport() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <h2 data-aos="fade-right" className="reports">
        Report{" "}
      </h2>
      <div className="report1">
        <h3 data-aos="fade-down" className="h3report">
          {" "}
          Counted Families
        </h3>

        <p data-aos="fade-up" className="childicon">
          <MdFamilyRestroom size={60} />
        </p>
        <p data-aos="fade-up" className="reportnumber">
          50
        </p>
      </div>
      <div className="report2">
        <h3 data-aos="fade-down" className="h3report">
          Number of people
        </h3>
        <p data-aos="fade-up" className="childicon">
          <IoIosPeople size={60} />
        </p>
        <p data-aos="fade-up" className="reportnumber">
          200
        </p>
      </div>
      <div className="report3">
        <h3 data-aos="fade-down" className="h3report">
          Number of children
        </h3>
        <p data-aos="fade-up" className="childicon">
          <FaChildren size={60} />{" "}
        </p>
        <p data-aos="fade-up" className="reportnumber">
          100
        </p>
      </div>
    </div>
  );
}
export default Generatereport;
