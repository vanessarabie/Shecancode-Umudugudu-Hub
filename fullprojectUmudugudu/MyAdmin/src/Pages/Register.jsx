import "./Register.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "aos/dist/aos.css";
import AOS from "aos";
import { notify } from "../Components/utils/Notify";
import ClipLoader from "react-spinners/ClipLoader";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nId, setNId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dOB, setDOB] = useState("");
  const [role, setRole] = useState("");
  const [district, setDistrict] = useState("");
  const [sector, setSector] = useState("");
  const [cell, setCell] = useState("");
  const [village, setVillage] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { handleSubmit } = useForm();

  const handleRegister = async () => {
    setIsLoading(true);
    const data = {
      firstName,
      lastName,
      nationalId: nId,
      phoneNumber,
      email,
      role,
      residenceInfo: {
        discrict: district,
        sector,
        cell,
        village,
      },
      maritalStatus: status,
    };

    await axios
      .post("http://localhost:4000/api/UH/v1/user/crud/add", data)
      .then((res) => {
        notify("success", "User Registered successfully");
        setFirstName("");
        setLastName("");
        setEmail("");
        setNId("");
        setPhoneNumber("");
        setDOB("");
        setRole("");
        setDistrict("");
        setSector("");
        setCell("");
        setVillage("");
        setStatus("");
        setIsLoading(false);

        // console.log("response for saving", res);
      })
      .catch((err) => {
        notify("error", err.response.data.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      {/* <div className='register-done'>
      Registered succefully!!!
    </div>
    <div className='register-fail'>
      Registered Failed!!!
    </div> */}

      <div className="register-container">
        <h2 className="h2register" data-aos="fade-down">
          Registration Form
        </h2>
        <form
          onSubmit={handleSubmit(handleRegister)}
          className="register-form"
          data-aos="fade-right"
        >
          <h3 className="h4-residence">Personal information</h3> <br />
          <div className="part1-register">
            <div className="first-name">
              <label id="fname">First Name:</label> <br />
              <input
                type="text"
                name="firstName"
                required
                className="reg-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="last-name">
              <label id="Mname">Last Name:</label>
              <br />
              <input
                type="text"
                name="lastName"
                required
                className="reg-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="reg-email">
              <label id="email">Email:</label> <br />
              <input
                type="email"
                name="email"
                required
                className="reg-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="part2-register-3">
            <div className="reg-id">
              <label id="NI">National ID:</label> <br />
              <input
                type="number"
                name="nationalId"
                required
                className="reg-input2"
                value={nId}
                onChange={(e) => setNId(e.target.value)}
              />
            </div>

            <div className="reg-phone">
              <label id="Fnbr">Phone Number:</label> <br />
              <input
                type="text"
                name="phone"
                className="reg-input2"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="reg-date">
              <label id="date">Date of birth:</label> <br />
              <input
                type="date"
                name="DOB"
                className="reg-dob"
                value={dOB}
                onChange={(e) => setDOB(e.target.value)}
              />
            </div>
          </div>{" "}
          <br />
          <h3 className="h4-role">Role :</h3>
          <div id="role">
            <div className="adminoption">
              <label htmlFor="Admin">Admin:</label>
              <input
                type="radio"
                name="opt"
                value="admin"
                onClick={() => setRole("admin")}
              />
            </div>

            <div className="useroption">
              <label htmlFor="User">User:</label>
              <input
                type="radio"
                name="opt"
                value="user"
                id="user"
                className="useropt"
                onClick={() => setRole("user")}
              />
            </div>
          </div>
          <h3 className="h4-residence">Current Resident:</h3>
          <div className="part3-register-5">
            <div className="reg-akarere">
              <label id="dis">District :</label> <br />
              <input
                type="text"
                id="district"
                name="district"
                required
                className="reg-input3"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>

            <div className="reg-sector">
              <label id="sec"> Sector :</label> <br />
              <input
                type="text"
                id="sector"
                name="sector"
                className="reg-input3"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
              />
            </div>
          </div>
          <div className="part4-register">
            <div className="reg-cell">
              <label id="cel">Cell :</label> <br />
              <input
                type="text"
                id="cell"
                name="cell"
                className="reg-input4"
                value={cell}
                onChange={(e) => setCell(e.target.value)}
              />
            </div>

            <div className="reg-village">
              <label id="ville">Village :</label> <br />
              <input
                type="text"
                className="reg-input4"
                value={village}
                onChange={(e) => setVillage(e.target.value)}
              />
            </div>
            <br />
            <br />
          </div>
          <div id="marital">
            <h4> Marital Status :</h4>
            <div className="maritaloption">
              <input
                type="radio"
                name="option"
                value="Single"
                id="single"
                onClick={() => setStatus("single")}
              />
              <label htmlFor="Single">Single</label>
            </div>
            <div className="maritaloption">
              <input
                type="radio"
                name="option"
                value="married"
                id="married"
                className="marriedopt"
                onClick={() => setStatus("married")}
              />
              <label htmlFor="Married">Married</label>
            </div>
          </div>
          <br />
          <button type="submit" className="reg-btn">
            {isLoading? <><ClipLoader size={10} color="#ddd" />  <span style={{marginLeft:"5px",}}> Registering...</span></>:"Register"}
          
          </button>
        </form>
      </div>
    </>
  );
}
export default Register;
