


const PageAuth =  ()=>{

const response= localStorage.getItem('userInfo')

var value;
if ( response){
    value = true;
    return true;

}
else{

    value = false;
    return false ;

}
 

}

export default PageAuth;
