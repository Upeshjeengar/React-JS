import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Hello There! It is Custom MyApp function</h1>
    </div>
  )
}

//this const can not work as function, hence not work as react render may not be compatible with this type of code
const ReactElement={  
  type:'a',
  props:{
    href:'https://google.com',
    target:'_blank'
  },
  children:'Click Me'
}

const anotherElement=(
  <a href="https://google.com" target='_blank'>click me to Visit google</a>
)

const reactElement=React.createElement(
  'a', //you have to first define tag next you have to write object of that tag and then text to display
  {
    href:'https://google.com',target:'_blank'
  },
  'Click me to visit google, created by React.createElement'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  //below we are calling App function from App.jsx
  // <React.StrictMode>
  //   <App /> 
  // </React.StrictMode>,

  //Above(~Line 5) we had created a MyApp function,It is like a function so we can direcly call it like this,
  // MyApp() 
  // <MyApp/> //this way is used in react 
  //but it is not recommended as a good developer practice

  // ReactElement //will not work
  // anotherElement //will work

  // reactElement

  //How to pass variables to react , jsx use in HTML{}
)