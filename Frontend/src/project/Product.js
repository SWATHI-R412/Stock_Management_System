// import axios from "axios";
// import React, { useState } from "react";
// import './style/product.css';
// import Header from './Header';

// const Brand = () => {
//   const [formValues, setFormValues] = useState([{ productsno: "", productname: "", rate: "", quantity: "", brand: "", category: "", status: "" }]);

//   const handleChange = (i, e) => {
//     const updatedFormValues = [...formValues];
//     updatedFormValues[i][e.target.name] = e.target.value;
//     setFormValues(updatedFormValues);
//   };

//   const addFormFields = () => {
//     setFormValues([...formValues, { productsno: "", productname: "", rate: "", quantity: "", brand: "", category: "", status: "" }]);
//   };

//   const removeFormFields = (i) => {
//     const updatedFormValues = [...formValues];
//     updatedFormValues.splice(i, 1);
//     setFormValues(updatedFormValues);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios.post("http://localhost:8080/product", formValues)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//     alert("Successfully added");
//   };
//   const handleLogin = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:8080/product", formValues)
//     .then((response) => {
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
//   };

//   return (
//     <div>
//       <div><Header/></div>
//       <div className="product">
//         <h2 style={{color:'purple',fontFamily:'brush script mt'}}>PRODUCT DETAILS</h2>
//         <form>
//           {formValues.map((element, index) => (
//             <div className="form-inline" key={index}>
//               <label>Sno</label>
//               <input type="number" name="productsno" value={element.productsno || ""} onChange={(e) => handleChange(index, e)} />
              // <label>Product Name</label>
              // <input type="text" name="productname" value={element.productname || ""} onChange={(e) => handleChange(index, e)} />
              // <label>Rate</label>
              // <input type="text" name="rate" value={element.rate || ""} onChange={(e) => handleChange(index, e)} />
              // <label>Quantity</label>
              // <input type="number" name="quantity" value={element.quantity || ""} onChange={(e) => handleChange(index, e)} />
              // <label>Brand</label>
              // <input type="text" name="brand" value={element.brand || ""} onChange={(e) => handleChange(index, e)} />
              // <label>Category</label>
              // <input type="text" name="category" value={element.category || ""} onChange={(e) => handleChange(index, e)} />
              // <label style={{color:"white"}}>Product Status</label>
              // <br />
              // <select
              //   name="status"
              //   value={element.status || ""}
              //   onChange={(e) => handleChange(index, e)}
              //   style={{ height: "35px", width:"210px" }}
              // ><br/>
              //   <option value="">Select Status</option>
              //   <option value="Available">Available</option>
              //   <option value="Not Available">Not Available</option>
              //   {/* Add more options if needed */}
              // </select>
              // <br />
//               {index ? (
//                 <button type="button" className="button remove" onClick={() => removeFormFields(index)}>Remove</button>
//               ) : null}
//             </div>
//           ))}
//           <div className="button-section">
//             <button className="button add" type="button" onClick={addFormFields}>Add</button>
//             <button className="button submit" type="submit" onClick={handleSubmit}>Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Brand;
import axios from "axios";
import React, { useState } from "react";
import './style/product.css';
import Header from './Header';

const Product = () => {
  const [formValues, setFormValues] = useState([
    { productsno: "", productname: "", rate: "", quantity: "", brand: "", category: "", status: "", editMode: false }
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
      { productsno: "", productname: "", rate: "", quantity: "", brand: "", category: "", status: "", editMode: false }
    ]);
  };

  const removeFormFields = (i) => {
    const updatedFormValues = [...formValues];
    updatedFormValues.splice(i, 1);
    setFormValues(updatedFormValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/product", formValues)
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
      <div><Header/></div>
      <div className="product">
        <h2 style={{color:'purple',fontFamily:'brush script mt'}}>PRODUCT DETAILS</h2>
        <form>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Sno</label>
              <input
                type="number"
                name="productsno"
                value={element.productsno || ""}
                onChange={(e) => handleChange(index, e)}
                // disabled={!element.editMode} // Disable input field if not in edit mode
              />
               <label>Product Name</label>
              <input type="text" name="productname" value={element.productname || ""} onChange={(e) => handleChange(index, e)} />
              <label>Rate</label>
              <input type="text" name="rate" value={element.rate || ""} onChange={(e) => handleChange(index, e)} />
              <label>Quantity</label>
              <input type="number" name="quantity" value={element.quantity || ""} onChange={(e) => handleChange(index, e)} />
              <label>Brand</label>
              <input type="text" name="brand" value={element.brand || ""} onChange={(e) => handleChange(index, e)} />
              <label>Category</label>
              <input type="text" name="category" value={element.category || ""} onChange={(e) => handleChange(index, e)} />
              <label style={{color:"white"}}>Product Status</label>
              <br />
              <select
                name="status"
                value={element.status || ""}
                onChange={(e) => handleChange(index, e)}
                style={{ height: "35px", width:"210px" }}
                disabled={!element.editMode}
              ><br/>
                <option value="">Select Status</option>
                <option value="Available">Available</option>
                <option value="Not Available">Not Available</option>
                {/* Add more options if needed */}
              </select>
              <br />
              
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
                  style={{width:"160px",height:"40px", margin:"10%"}}
                >
                  Edit ✍
                </button>
              )}
              {index ? (
                <button
                  type="button"
                  className="button remove"
                  onClick={() => removeFormFields(index)}
                  style={{width:"160px",height:"40px", margin:"10%"}}
                >
                  Remove 🗑
                </button>
              ) : null}
            </div>
          ))}
          <div className="button-section">
            <button className="button add" type="button" onClick={addFormFields}>
              Add
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

export default Product;
