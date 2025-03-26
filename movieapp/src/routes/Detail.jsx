import { useState, useEffect } from "react";

function Detail() {
  const [ loading, setLoading ] = useState(true);
  const [ movie, setMovie ] = useState(null);

  const getMovie = async () => {
    try {
      const response = await fetch(
        ``
      )
    } catch (error) {

    }
  }

  useEffect(() => {
    //여기에 getMovie();
  }, []); 


  return <h1>Detail Page</h1>
}

export default Detail;