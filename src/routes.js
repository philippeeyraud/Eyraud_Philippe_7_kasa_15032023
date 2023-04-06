import Home from './Pages/Home'
import Housing from './Pages/Housing'

import { Routes, Route  } from 'react-router-dom'



const app = ()=>{
 
    return (
   <Routes>
     
      <Route exact path="/" element = {<><Home></Home>  </> }/>
      <Route path="/housing/:id" element = {<><Housing></Housing> </>}/>

    </Routes>
  

   
)}
export default app;