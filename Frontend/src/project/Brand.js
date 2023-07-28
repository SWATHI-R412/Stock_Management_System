// import React, { useState } from "react";
// import "./style/brand.css";
// import Header from "./Header";
// import axios from "axios";

// const Brand = () => {
//   const [formValues, setFormValues] = useState([{ brandsno: "", brandname: "", status: "" }]);

//   const handleChange = (i, e) => {
//     const updatedFormValues = [...formValues];
//     updatedFormValues[i][e.target.name] = e.target.value;
//     setFormValues(updatedFormValues);
//   };

//   const addFormFields = () => {
//     setFormValues([...formValues, { brandsno: "", brandname: "", status: ""}]);
//   };

//   const removeFormFields = (i) => {
//     const updatedFormValues = [...formValues];
//     updatedFormValues.splice(i, 1);
//     setFormValues(updatedFormValues);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formValues);
//     axios.post("http://localhost:8080/brand", formValues)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//     alert("Successfully added");
//   };

//   return (
//     <div>
//       <div>
//         <Header />
//       </div>
//       <div className="brand">
//         <h2 style={{ color: "purple", fontFamily: "brush script mt" }}>BRAND DETAILS</h2>
//         <form>
//           {formValues.map((element, index) => (
//             <div className="form-inline" key={index}>
//               <label style={{color:"black"}}>Sno</label>
//               <br />
//               <input
//                 type="number"
//                 name="brandsno"
//                 value={element.brandsno}
//                 onChange={(e) => handleChange(index, e)}
//               />
//               <br />
//               <label style={{color:"black"}}>Brand Name</label>
//               <br />
//               <input
//                 type="text"
//                 name="brandname"
//                 value={element.brandname || ""}
//                 onChange={(e) => handleChange(index, e)}
//               />
//               <br />
//               <label style={{color:"black"}}>Brand Status</label>
//               <br />
//               <select
//                 name="status"
//                 value={element.status || ""}
//                 onChange={(e) => handleChange(index, e)}
//                 style={{ height: "35px", width:"210px" }}
//               ><br/>
//                 <option value="">Select Status</option>
//                 <option value="Available">Available</option>
//                 <option value="Not Available">Not Available</option>
//                 {/* Add more options if needed */}
//               </select>
//               <br />
              
             
//               {index ? (
//                 <button type="button" className="button remove" onClick={() => removeFormFields(index)}>
//                   Remove
//                 </button>
//               ) : null}
//             </div>
//           ))}
//           <div className="button-section">
//             <button className="button add" type="button" onClick={addFormFields}>
//               Add
//             </button>
//             <button className="button submit" type="submit" onClick={handleSubmit}>
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Brand;
import React, { useState } from "react";
import "./style/brand.css";
import Header from "./Header";
import axios from "axios";

const Brand = () => {
  const [formValues, setFormValues] = useState([
    { brandsno: "", brandname: "", status: "", editMode: false }
  ]);

  const handleChange = (i, e) => {
    const updatedFormValues = [...formValues];
    updatedFormValues[i][e.target.name] = e.target.value;
    setFormValues(updatedFormValues);
  };

  const toggleEditMode = (i) => {
    const updatedFormValues = [...formValues];
    updatedFormValues[i].editMode = !updatedFormValues[i].editMode;
    setFormValues(updatedFormValues);
  };

  const addFormFields = () => {
    setFormValues([
      ...formValues,
      { brandsno: "", brandname: "", status: "", editMode: false }
    ]);
  };

  const removeFormFields = (i) => {
    const updatedFormValues = [...formValues];
    updatedFormValues.splice(i, 1);
    setFormValues(updatedFormValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
    axios
      .post("http://localhost:8080/brand", formValues)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    alert("Successfully added");
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="brand">
        <h2 style={{ color: "purple", fontFamily: "brush script mt" }}>BRAND DETAILS</h2>
        <form>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label style={{ color: "black" }}>Sno</label>
              <br />
              <input
                type="number"
                name="brandsno"
                value={element.brandsno}
                onChange={(e) => handleChange(index, e)}
                //disabled={!element.editMode} // Disable input field if not in edit mode
              />
              {/* <br /> */}
              <label style={{ color: "black" }}>Brand Name</label>
              <br />
              <input
                type="text"
                name="brandname"
                value={element.brandname || ""}
                onChange={(e) => handleChange(index, e)}
                //disabled={!element.editMode} // Disable input field if not in edit mode
              />
              {/* <br /> */}
              <label style={{ color: "black" }}>Brand Status</label>
              <br />
              <select
                name="status"
                value={element.status || ""}
                onChange={(e) => handleChange(index, e)}
                style={{ height: "35px", width: "210px" }}
                disabled={!element.editMode} // Disable select field if not in edit mode
              >
                <option value="">Select Status</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
                {/* Add more options if needed */}
              </select>
              {/* <br /> */}

              {element.editMode ? (
                <button
                  type="button"
                  className="button edit"
                  onClick={() => toggleEditMode(index)}
                  style={{width:"160px",height:"40px", margin:"10%"}}
                >
                  Save
                </button>
              ) : (
                <button
                  type="button"
                  className="button edit"
                  onClick={() => toggleEditMode(index)}
                  style={{width:"160px",height:"40px",margin:"10%"}}
                >
                  Edit ✍
                </button>
              )}

              {index ? (
                <button
                  type="button"
                  className="button remove"
                  onClick={() => removeFormFields(index)}
                  style={{width:"160px",height:"40px",margin:"10%"}}
                >
                  Remove 🗑
                </button>
              ) : null}
            </div>
          ))}
          <div className="button-section">
            <button className="button add" type="button" onClick={addFormFields}>
              Add ➕
            </button>
            <button className="button submit" type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Brand;
