import Home from './Pages/Home'
import Housing from './Pages/Housing'
import About from './Pages/About'
import { Routes, Route  } from 'react-router-dom'
import Error from './Pages/Error'


const app = ()=>{
 
    return (
    <Routes>
     
      <Route exact path="/" element = {<Home></Home>   }/>
      <Route path="/housing/:id" element = {<Housing></Housing> }/>
      <Route path="/about" element = {<About></About> }/>
      <Route path= "/*" element = {<Error></Error>}/>
    </Routes>
  

   
)}
export default app;