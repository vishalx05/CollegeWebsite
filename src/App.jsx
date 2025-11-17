import React from 'react'
import 'remixicon/fonts/remixicon.css'
import 'animate.css';
import '@ant-design/v5-patch-for-react-19';
import Feature from './components/Feature';
import Courses from './components/Courses';
const App = () => {
  return (
    <div>
      <Feature/>
      <Courses />
    </div>
  )
}

export default App