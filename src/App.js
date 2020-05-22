import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { anotherName, addWish } from './actions/myaction'

function App(props) {
  const mywish = props.mywish.map(item => {
    return <h2  key={Math.random()}>{item}</h2>
  })
  console.log(props)
  return (
    <div className="App">
     hello
     <h1>my name {props.myname}</h1>
     {mywish}
     <button onClick={()=> {props.chnageName()}}>chnage name</button>
     <button onClick={()=> {props.addWish()}}>add wish</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myname:state.name,
    mywish: state.wish
  } //use nmae of data from reducer componenet and here use in App  us orops
}

const mapDispatchToProps = (dispatch) => {
  return {
    chnageName: () => { dispatch(anotherName()) },
    addWish: () => { dispatch(addWish()) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
//higher order component recives component here connect recives appp
