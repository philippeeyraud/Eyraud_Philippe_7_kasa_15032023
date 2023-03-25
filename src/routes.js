import Home from './Pages/Home'

import { Routes, Route  } from 'react-router-dom'



const app = ()=>{
 
    return (
   <Routes>
     
        <Route exact path="/" element = {<><Home></Home>  </> }/>
      

    </Routes>
  

   
)}
export default app;