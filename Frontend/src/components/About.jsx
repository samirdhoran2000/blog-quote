import { useEffect } from "react"

const About = () => {
const token = localStorage.getItem('token')
  useEffect( () => {
    (async () => {
      const res = await fetch("http://localhost:3000/author", {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      const result = await res.json();
      console.log(result);
    })()
  },[])
  return (
    <div>About</div>
  )
}

export default About