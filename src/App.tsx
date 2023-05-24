import axios from "axios";
import { useEffect } from "react";

function App() {

const headersList = {
 "Accept": "*/*",
 "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3NfdXVpZCI6ImE4OWFlYWZhLWU3NzYtNDRjYy1iZWY2LTAwYTM5ZDRkZGJlOSIsImF1ZCI6ImFkbWluIiwiYXV0aG9yaXplZCI6dHJ1ZSwiZXhwIjoxNjg0OTkyOTUwLCJpc3MiOiJXTWFya2V0UGxhY2VBZG1pbiIsInVzZXJfaWQiOiI2NDQ2NDkzYjMyMDg1NzQzMzViMThmNWUifQ.G1aeimQ9S7z08fb78TaulO24vIbbtERjo3floMqkVGU"
}



  // useEffect(() => {
  //   axios.get("http://localhost:8888/api/v1/lookup", {
  //     headers: headersList
  //   })
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // }, [])

  // Please rewrite this code to use async/await
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8888/api/v1/lookup", {
          headers: headersList
        })
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [])




  return (
    <h1>Hello</h1>
  )
}

export default App
