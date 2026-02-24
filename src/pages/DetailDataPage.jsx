import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetailDataPage() {
  const params = useParams();
  const id = params.id;

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`http://localhost:3000/api/v1/users/${id}`);
        setData(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
      <section>
        <h1 className="text-blue-500">Detail Data Page</h1>
      </section>

      <section>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : data ? (
          <>
            <p>Detail data akan ditampilkan di sini.</p>
            <p>Username: {data.username}</p>
            <p>Email: {data.email}</p>
          </>
        ) : (
          <p>No data available.</p>
        )}
      </section>
    </>
  )
}