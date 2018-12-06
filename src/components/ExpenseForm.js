import React, {Component} from 'react';

export default class ExpenseForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      description: '',
      amount: 0
    }
  }
  handleChange = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit = (e) =>{
    e.preventDefault();
    const {description, amount} = this.state;
    const formData = {
      description,
      amount: parseInt(amount)
    }
    this.props.onSubmit(formData);
  }
  render(){
    return (
      <div>
        <h1>Create a Form</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
          <input type="number" name="amount" value={this.state.amount} onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </form>      
      </div>
    )
  }
}


// <form>
//   <div className="form-group">
//     <label>First Name:</label>
//     <input type="text" className="form-control" name="firstName" value="" />
//   </div>
//   <div className="form-group">
//     <label for="lastName">Last Name:</label>
//     <input type="text" className="form-control" name="lastName" value="" />
//   </div>
//   <button type="submit" className="btn btn-default">Submit</button>
// </form>