import React from 'react';


class Select3 extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: 'select', count :50};
    }
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
            <option value="Six">7</option>
            <option value="Six">8</option>
            <option value="Six">9</option>
            <option value="Six">10</option>
            <option value="Six">11</option>
            <option value="Six">12</option>
            <option value="Six">13</option>

          </select>
        </div>
      )
    }
  }

  export default Select3;