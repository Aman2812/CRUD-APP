import React from 'react'
import './App.css'
import Create from './components/create/create';
import Read from './components/read/read';
import Update from './components/update/update'
import { BrowserRouter as  Router, Routes, Route} from 'react-router-dom';


const App = () => {

  return (

      <Router>
        <div className='main'>
            <div style={{marginBottom: 40}}>
             <h3>React Crud Operations</h3>
            </div>

          <Routes>
            <Route path="/" element={<Create/>}/>
            <Route path="/read" element={<Read/>}/>
            <Route path="/update/:id" element={<Update/>}/>
          </Routes>
        </div>
      </Router>
  )
}

export default App;