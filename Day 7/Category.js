import React from "react";
import './style/brand.css'

class Category extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
       formValues: [{ categoryName : "" , status:"", options:"" }]
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
      formValues: [...this.state.formValues, { categoryName: "", status:"", options:""}]
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
              <label>Category Name</label>
              <input type="text" name="brandname" value={element.brandname || ""} onChange={e => this.handleChange(index, e)} />
              <label>Status</label>
              <input type="text" name="status" value={element.status || ""} onChange={e => this.handleChange(index, e)} />
              <label>Options</label>
              <input type="text" name="options" value={element.options || ""} onChange={e => this.handleChange(index, e)} />
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
export default Category;