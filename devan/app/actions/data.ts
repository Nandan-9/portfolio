import axios from "axios";

interface Position_Drag{
  x : number;
  y : number;
}

export async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/users")
    console.log(response.data);
    
      return response.data;
  }  catch(e) {
    console.log(e);
  }
}

export async function updatePosition(newX : number, newY : number){
  
}
