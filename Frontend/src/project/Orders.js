
import axios from "axios";
import React, { useState } from "react";
import './style/order.css';
import Header from './Header';

const Order = () => {
  const [formValues, setFormValues] = useState([
    { sno: "", ordate: "", clientname: "", clientct: "", product: "", rate: "", quantity: "", total: "", editMode: false }
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
      { sno: "", ordate: "", clientname: "", clientct: "", product: "", rate: "", quantity: "", total: "", editMode: false }
    ]);
  };

  const removeFormFields = (i) => {
    const updatedFormValues = [...formValues];
    updatedFormValues.splice(i, 1);
    setFormValues(updatedFormValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:8080/order", formValues)
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
      <div className="order">
        <h2 style={{color:'white',fontFamily:'brush script mt'}}>ORDER DETAILS</h2>
        <form>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>SNo</label>
              <input
                type="number"
                name="sno"
                value={element.sno || ""}
                onChange={(e) => handleChange(index, e)}
                //disabled={!element.editMode} // Disable input field if not in edit mode
              />
              <label>Order Date</label>
              <input type="date" name="ordate" value={element.ordate || ""} onChange={(e) => handleChange(index, e)} />
              <label>Client Name</label>
              <input type="text" name="clientname" value={element.clientname || ""} onChange={(e) => handleChange(index, e)} />
              <label>Client Contact</label>
              <input type="number" name="clientct" value={element.clientct || ""} onChange={(e) => handleChange(index, e)} />
              <br />
              <br />
              <label>Product</label>
              <input type="text" name="product" value={element.product || ""} onChange={(e) => handleChange(index, e)} />
              <label>Rate</label>
              <input type="text" name="rate" value={element.rate || ""} onChange={(e) => handleChange(index, e)} />
              <label>Quantity</label>
              <input type="number" name="quantity" value={element.quantity || ""} onChange={(e) => handleChange(index, e)} />
              <label>Total</label>
              <input type="number" name="total" value={element.total || ""} onChange={(e) => handleChange(index, e)} />
              
              
              {element.editMode ? (
                <button
                  type="button"
                  className="button edit"
                  onClick={() => toggleEditMode(index)}
                  style={{width:"180px",height:"40px", margin:"10%"}}
                >
                  Save
                </button>
              ) : (
                <button
                  type="button"
                  className="button edit"
                  onClick={() => toggleEditMode(index)}
                  style={{width:"180px",height:"40px", margin:"10%"}}
                >
                  Edit ✍
                </button>
              )}
              {index ? (
                <button
                  type="button"
                  className="button remove"
                  onClick={() => removeFormFields(index)}
                  style={{width:"180px",height:"40px", margin:"10%"}}
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
              Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
