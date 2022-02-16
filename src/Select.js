import React from 'react';


// class Option extends React.Component{

//   render(){
//     return(<option>{increment}</option>)
//   }
// }

// class increment extends React.Component {
//   constructor(props) {
//     super(props);
//     var i;
//     for (i=0;i<this.state.data;i++) {
//       increment.push(increment);
//     }
//   }

// }


class Select extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: 'select', count :50};
    }


    // Count = () => this.state.count.map(() => {
    //   <Option/>
    // })

    onChange(e) {
      this.setState({
        value: e.target.value
      })
    }
    render() {
      return (
        <div className="form-group">
          <label htmlFor="select1"></label><br />
          <select value={this.state.value} onChange={this.onChange.bind(this)} className="form-control">
            <option value="select">0</option>
            <option value="First">1</option>
            <option value="Second">2</option>
            <option value="Third">3</option>
            <option value="Four">4</option>
            <option value="Five">5</option>
            <option value="Six">6</option>
          </select>
        </div>
      )
    }
  }

  export default Select;