import React from "react";
import './style/brand.css'

class Brand extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
       formValues: [{ ordate: "", clientname : "" , clientct:"", product:"", rate:"",quantity:"",total:"" }]
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
      formValues: [...this.state.formValues, { ordate: "", clientname : "" , clientct:"", product:"", rate:"",quantity:"",total:""}]
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
              <label>Order Date</label>
              <input type="text" name="ordate" value={element.ordate || ""} onChange={e => this.handleChange(index, e)} />
              <label>Client Name</label>
              <input type="text" name="clientname" value={element.clientname || ""} onChange={e => this.handleChange(index, e)} />
              <label>Client Contact</label>
              <input type="text" name="clientct" value={element.clientct || ""} onChange={e => this.handleChange(index, e)} />
              <br></br>
              <br></br>
              <label>Product</label>
              <input type="text" name="product" value={element.product || ""} onChange={e => this.handleChange(index, e)} />
              <label>Rate</label>
              <input type="text" name="rate" value={element.rate || ""} onChange={e => this.handleChange(index, e)} />
              <label>Quantity</label>
              <input type="text" name="quantity" value={element.quantity || ""} onChange={e => this.handleChange(index, e)} />
              <label>Total</label>
              <input type="text" name="total" value={element.total || ""} onChange={e => this.handleChange(index, e)} />
              <label>Product</label>
              <input type="text" name="product" value={element.product || ""} onChange={e => this.handleChange(index, e)} />
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