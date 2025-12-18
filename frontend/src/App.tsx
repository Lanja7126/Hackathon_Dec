

import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'

function App() {


  return (
    
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
    
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
