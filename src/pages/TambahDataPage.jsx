import axios from "axios";

export default function TambahDataPage() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ambil nilai dari form
    const username = e.target.username.value;
    const email = e.target.email.value;

    // Buat objek data untuk dikirim ke backend
    const data = {
      username,
      email,
    };

    console.log("Data:", data);

    // Kirim data ke backend
    axios.post("http://localhost:3000/api/v1/users", data)
      .then((response) => {
        console.log("Response:", response.data);
        alert("Data berhasil ditambahkan!");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Terjadi kesalahan saat menambahkan data.");
      });
  };

  return (
    <>
      <section>
        <h1 className="text-blue-500">Tambah Data Page</h1>
      </section>

      <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="username"
                id="username"
                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline-blue focus:ring focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="username"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:shadow-outline-blue focus:ring focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="email"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Tambah Data
            </button>
          </div>
        </div>
      </form>
    </>
  )
}