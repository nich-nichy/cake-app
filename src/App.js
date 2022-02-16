import React,{ useState, useRef } from 'react';
import './App.css';
import Select from './Select.js';
import Select2 from './Select2.js';
import Select3 from './Select3.js';
import Select4 from './Select4.js';
import Select5 from './Select5.js';
import Toggle from './Toggle';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import DiamondIcon from '@mui/icons-material/Diamond';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: "0"};
  };

  handleToggle () {
    if ( this.event.target.value === 6 ) {
      return <Select />
    }
    if ( this.state.data === 9 ) {
      return <Select2 />
    }
    if ( this.state.data === 13 ) {
      return <Select3 />
    }
    if ( this.state.data === 15 ) {
      return <Select4 />
    }
    if ( this.state.data === 18 ) {
      return <Select5 />
  }
}

  render() {
    return (
    <div>
      <div className="body-page">
    <div className="cake-card border">
    <h2 className="text-center text-3xl font-semibold pt-5 pb-5 mb-3 ml-50 mr-50 border border-indigo-400 rounded-full shadow-lg">Cake integration</h2>
    <div className="flex px-100">
    <h2 className="text-center ml-52 mt-5">Cake size: </h2>
    <p className="ml-3 mt-4 border">

    {/* <button
    className="border text-white rounded p-1 pl-2 pr-2 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500"
    onClick={(event) => {this.setState({data:event.target.value}) }} value="2">Sample</button> */}
      <button className="border text-white rounded p-1 pl-2 pr-2 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500" onClick=
      {(event) =>
      {
        this.setState({data:event.target.value})
      }
      }
      value="6">6</button>
      <button className="border text-white rounded p-1 pl-2 pr-2 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500" onClick={(event) => {this.setState({data:event.target.value}) }} value="9">8</button>
      <button className="border text-white rounded p-1 pl-2 pr-2 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500" onClick={(event) => {this.setState({data:event.target.value}) }} value="13">9</button>
      <button className="border text-white rounded p-1 pl-2 pr-2 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500" onClick={(event) => {this.setState({data:event.target.value}) }} value="16">10</button>
      <button className="border text-white rounded p-1 pl-2 pr-2 bg-gradient-to-r from-red-500 to-red-900 hover:from-red-900 hover:to-red-500" onClick={(event) => {this.setState({data:event.target.value}) }} value="35">18 x 32</button>
    </p>
    </div>
    <p className="mt-4 bg-gray-200 border border-indigo-200 mr-80 ml-80">{this.state.data}</p>
    <div className="border-2 border-indigo-200 bg-red-100 rounded ml-42 mr-42 mt-5 pt-5">
    <div className="flex">
    <LocalFloristIcon icon="fa-solid fa-flower" className="flowico"/><p className="flow">Flower</p><div className=""><Select5 /></div>
    </div>
    <div className="flex">
    <StarIcon icon="fa-solid fa-Star" className="starico" /><p className=" mt-5 star">Star</p><div onChange={this.handleToggle}><Select5 /></div>
    {/* <Select className="sel2"/> */}
    </div><div className="flex">
    <DiamondIcon icon="fa-solid fa-Diamond" className="diamico"/><p className="mt-5 diam">Diamond</p><div onChange={this.handleToggle}><Select5 /></div>
    {/* <Select className="sel3"/> */}
    </div><div className="flex">
    <FavoriteIcon icon="fa-solid fa-Heart" className="hearico"/><p className="mt-5 hear">Heart</p><div onChange={this.handleToggle}><Select5 /></div>
    {/* <Select className="sel4"/> */}
    </div>
    <p className="mb-5 bg-gray-200 mr-64 ml-64 border border-indigo-200 pl-2 pr-2">{this.state.data}<span className="pl-2">- items left</span></p>
    </div></div></div></div>
    
    );
  }
}



export default App;
