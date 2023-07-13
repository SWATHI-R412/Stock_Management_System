import React from "react";
import './style/brand.css'

class Brand extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
       formValues: [{ productid: "", productname : "" , rate:"", quantity:"", brand:"", category:"", status:"" }]
     };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(i, e) {
    let formValues = this.state.formValues;
    formValues[i][e.target.name] = e.target.value;
    this.setState({ formValues });
  }

  addFormFields() {
    this.setState(({
      formValues: [...this.state.formValues, { productid: "", productname: "", rate:"", quantity:"", brand:"", category:"", status:""}]
    }))
  }

  removeFormFields(i) {
    let formValues = this.state.formValues;
    formValues.splice(i, 1);
    this.setState({ formValues });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Successfully added");
  }

  render() {

    return (
        <form  onSubmit={this.handleSubmit}>
          {this.state.formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label>Pd Id</label>
              <input type="text" name="productid" value={element.productid || ""} onChange={e => this.handleChange(index, e)} />
              <label>Pd Name</label>
              <input type="text" name="productname" value={element.productname || ""} onChange={e => this.handleChange(index, e)} />
              <label>Rate</label>
              <input type="text" name="rate" value={element.rate || ""} onChange={e => this.handleChange(index, e)} />
              <label>Quantity</label>
              <input type="text" name="quantity" value={element.quantity || ""} onChange={e => this.handleChange(index, e)} />
              <label>Brand</label>
              <input type="text" name="brand" value={element.brand || ""} onChange={e => this.handleChange(index, e)} />
              <label>Category</label>
              <input type="text" name="category" value={element.category || ""} onChange={e => this.handleChange(index, e)} />
              <label>Status</label>
              <input type="text" name="status" value={element.status || ""} onChange={e => this.handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => this.removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => this.addFormFields()}>Add</button>
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>
    );
  }
}
export default Brand;