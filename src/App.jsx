import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Notfound from './pages/Notfound'
import { Analytics } from "@vercel/analytics/next"


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route index element={<Home/>}/>
      <Route path='*' element={<Notfound/>}/>

    <Analytics/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
