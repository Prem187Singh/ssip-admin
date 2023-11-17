import PageAuth from "../global_function/PageAuth";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";




const  Home= ()=> {
    const navigate = useNavigate();

useEffect(()=>{

    
    if (!PageAuth()){
        navigate('/')
    }
 
    
},[]);



return(

<>
    <h1> hello home
    </h1>
    </>
    
    
    );
}

export default Home;