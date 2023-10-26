const Changetext = (state = "hi", action)=>{
  
    switch(action.type){
      case "INCREMENT" : return "Rajiv";
      case "DECREMENT" : return "Joshi";
      default : return state
    }
  }
  export default Changetext; 