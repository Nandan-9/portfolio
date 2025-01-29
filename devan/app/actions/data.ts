import axios from "axios";


export async function getUserDetails() {
  try {
    const response = await axios.get("http://localhost:3000/api/users")
    console.log(response.data);
    
      return response.data;
  }  catch(e) {
    console.log(e);
  }
}


