import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DataPage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:3000/api/v1/users");
        setData(response.data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Beneran mau hapus data ini?");

    if (confirmDelete) {
      try {
        // 1. Panggil API Delete
        await axios.delete(`http://localhost:3000/api/v1/users/${id}`);

        // 2. Update UI (Biar data yang dihapus langsung hilang dari tabel)
        // Asumsinya data tabel kamu disimpan di state 'data'
        setData(data.filter((item) => item.id !== id));

        alert("Data berhasil dihapus!");
      } catch (error) {
        console.error("Gagal hapus data:", error);
        alert("Waduh, gagal hapus!");
      }
    }
  };

  return (
    <>
      <section>
        <h1 className="text-blue-500">Data Page</h1>
      </section>

      {
        isLoading ?
          (<p>Loading...</p>)
        : error ?
          (<p>Error: {error}</p>)
        : data ? 
          (
            <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                  <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-medium">
                        id
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        username
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        email
                      </th>
                      <th scope="col" className="px-6 py-3 font-medium">
                        action
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.map((item, index) => (
                      <tr key={item.id} className="bg-neutral-primary border-b border-default">
                        <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                          {index + 1}
                        </th>
                        <td className="px-6 py-4">
                          <span className="truncate">{item.username}</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="truncate">{item.email}</span>
                        </td>
                        <td className="px-6 py-4 flex items-center gap-2">
                          <Link to={`/detail/${item.id}`} className="text-sm text-blue-500 hover:text-blue-700 hover:cursor-pointer">Select</Link>
                          <Link to={`/edit/${item.id}`} className="text-sm text-yellow-500 hover:text-yellow-700 hover:cursor-pointer">Edit</Link>
                          <button onClick={() => handleDelete(item.id)} className="text-sm text-red-500 hover:text-red-700 hover:cursor-pointer">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          )
          : null
        }   
    </>
  );
}
