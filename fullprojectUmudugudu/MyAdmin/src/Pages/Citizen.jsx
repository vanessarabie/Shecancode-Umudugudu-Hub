import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
// import { ImMenu2 } from "react-icons/im";
import { GrView } from "react-icons/gr";
import { MdModeEdit } from "react-icons/md";
import { FiDelete } from "react-icons/fi";
import { useEffect, useState } from "react";
import EditingCitizen from "../Components/EditingCitizen";

import "aos/dist/aos.css";
import AOS from "aos";
import "./citizen.css";

function Citizen() {
  const [search, setSearch] = useState("");
  const [citizens, setCitizens] = useState([]);
  const [openEdit, setOPenEdit] = useState(false);
  const [citizenToEdit, setCitizenToEdit] = useState({
    fullNames: "",
    dOB: "",
    pOB: "",
    nId: "",
    email: "",
    phone: "",
    gender: "",
    martStatus: "",
    isibo: "",
    tenure: "",
    countOrigin: "",
    empStatus: "",
    occopStatus: "",
    industOfwork: "",
    availAmenities: "",
    numberChildren: "",
    numberPeople: "",


  });
  
  

  const handleSearch = async () => {
    const res = await fetch(
      `http://localhost:4000/api/UH/v1/citizen/findByName/?name=${search}`
    );
    const data = await res.json();

    if (data.data !== null) {
      setCitizens([data.data]);
    } else {
      setCitizens([]);
    }
  };

  
  

  useEffect(() => {
    if (search === "") {
      fetch("http://localhost:4000/api/UH/v1/citizen/list")
        .then((res) => res.json())
        .then((data) => {
          setCitizens(data.citizen);
        });
    }
  }, [search]);

//code for editing a citizen
const handleEdit = () =>{
  setOPenEdit(!openEdit);
};
console.log("data to be ediited", citizenToEdit);

  

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

//codes for deleting a citizen
  const handleDelete =(id)=>{
    //ask user to confirm delete
    const ConfirmDelete = window.confirm("Are you sure you want to delete this citizen");
    if(!ConfirmDelete){
      return;
    }
    fetch(`http://localhost:4000/api/UH/v1/citizen/delete/?id=${id}`,{
    method: "DELETE" ,
    }).then((res)=>{
      if(res.status ===200){
        setCitizens(citizens.filter((citizen) => citizen._id !== id));
        alert("Citizen deleted successfuly");
      }else{
        alert("Failed to delete citizen");
      }
    });

  };

  return (

    <>
    <EditingCitizen
    open = {openEdit}
    handleClose={handleEdit}
    data = {citizenToEdit}
    setData = {setCitizenToEdit}
    handleSearch = {handleSearch}

    />
    <div className="citizen-container">
      <h2 data-aos="fade-right" className="h2citizen">
        CITIZEN MANAGEMENT
      </h2>{" "}
      <br />
      <div className="search-container">
        <input
          className="input-citizen"
          type="search"
          name="searchUser"
          id="searchUsers"
          value={search}
          placeholder=" Search citizen..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="search-citizen" onClick={handleSearch}>
          <IoIosSearch size={20} />
        </span>
      </div>
      <br />
      <div>
        <table>
          <thead>
            <tr>
              <th data-aos="fade-up">CitizenID</th>
              <th data-aos="fade-up">Full Names</th>
              <th data-aos="fade-up">Email</th>
              <th data-aos="fade-up">Phone Number</th>
              <th data-aos="fade-up">action</th>
            </tr>
          </thead>
          <tbody>
            {citizens.length > 0 ? (
              citizens.map((citizen) => (
                <tr data-aos="fade-up" key={citizen._id}>
                  <td>{citizen.nationalId}</td>
                  <td>{citizen.fullNames}</td>
                  <td>{citizen.email}</td>
                  <td>{citizen.phone}</td>
                  <td>
                    <div className="actionicons">
                      
                      <Link style={{ color: "blue" }}>
                        <MdModeEdit
                         style={{ fontSize: "20px" }}
                         onClick={()=>{
                          handleEdit(citizen._id);
                          setCitizenToEdit((prev)=>({
                            ...prev,
                            id: citizen._id,
                            fullNames: citizen.fullNames,
                            pOB: citizen.placeOfBirth ,
                            nId: citizen.nationalId,
                            email: citizen.email,
                            phone: citizen.phone,
                            gender: citizen.demoInfo.gender,
                            martStatus: citizen.demoInfo.maritalStatus,
                            isibo: citizen.resInfo.isibo,
                            tenure: citizen.resInfo.tenure,
                            countOrigin: citizen.citAndImmi.countryOrigin,
                            empStatus: citizen.empOccupation.empStatus,
                            occopStatus: citizen.empOccupation.occupation,
                            industOfwork: citizen.empOccupation.industryOfWork,
                            availAmenities: citizen.availableAmenities,
                            numberChildren: citizen.houseComp.numberOfChildren,
                            numberPeople: citizen.houseComp. numberOfHousePeople, 

                          }))
                         }} />
                      </Link>

                      <FiDelete
                        style={{
                          color: "red",
                          fontSize: "20px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleDelete(citizen._id)}
                      />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} style={{ textAlign: "center" }}>
                  No citizen found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
export default Citizen;
