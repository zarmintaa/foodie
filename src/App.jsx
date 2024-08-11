import "./App.css";

import bg from "./img/bg.jpeg";

function App() {
  console.log(bg);
  return (
    <div className="App">
      <div className="w-full bg-gray-100">
        <div className="md:max-w-4xl lg:max-w-7xl mx-auto px-3 lg:px-4">
          <div className="py-4">
            <div className="flex flex-row align-center items-center justify-between gap-8 ">
              <span className="text-4xl font-bold">
                Food
                <span className={"text-red-600 underline underline-offset-8"}>
                  ie
                </span>
              </span>
              <ul className="flex text-xl flex-row gap-8 font-semibold rounded-none">
                <li className={" hover:text-red-700  py-4"}>
                  <a href={"#beverage"}>Beverage</a>
                </li>
                <li className={"hover:text-red-700  py-4"}>
                  <a href={"#drink"}>Drink</a>
                </li>
              </ul>
              <div className="dropdown dropdown-end hidden">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-56 p-2 shadow"
                >
                  <li>
                    <a>Homepage</a>
                  </li>
                  <li>
                    <a>Portfolio</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-img h-[450px] bg-cover bg-red-700 bg-blend-multiply">
          <div className="md:max-w-4xl lg:max-w-7xl mx-auto px-3 lg:px-4 text-white min-h-full flex items-center">
            <div className="max-w-lg lg:max-w-2xl">
              <h1 className="mb-5 text-5xl lg:text-7xl font-bold">
                Discover culinary delights
              </h1>
              <p className="mb-5 text-xl">
                Discover culinary delights made with the finest, locally sourced
                ingredients with our carefully crafted dishes, made with the
                freshest ingredients.
              </p>
            </div>
          </div>
        </div>

        <div
          className="md:max-w-4xl lg:max-w-7xl mx-auto px-3 lg:px-4"
          id={"beverage"}
        >
          <div
            className={
              "my-10 font-semibold text-black border-l-4 border-red-700 pl-3"
            }
          >
            <h1 className={"text-3xl"}>Beverage</h1>
          </div>
          <div
            className={"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"}
          >
            <div className="card card-compact bg-base-100 shadow-md cursor-pointer hover:shadow-xl transition-all duration-500">
              <figure>
                <img
                  src="https://akcdn.detik.net.id/community/media/visual/2022/01/24/resep-siomay-ayam_43.jpeg?w=700&q=90"
                  alt="Shoes"
                  className={"hover:scale-125 transition-all duration-500"}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Dimsum</h2>
                <span className={"line-clamp-3"}>
                  Dimsum daging ayam dengan varian toping seperti keju, jamur
                  dan sosis.
                </span>
                <div className="card-actions justify-end mt-2">
                  <button className="py-2 px-4 bg-red-700 text-white rounded-2xl">
                    Rp 9.000
                  </button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-md">
              <figure>
                <img
                  src="https://akcdn.detik.net.id/community/media/visual/2022/01/24/resep-siomay-ayam_43.jpeg?w=700&q=90"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Dimsum</h2>
                <p>
                  Dimsum daging ayam dengan varian toping seperti keju, jamur
                  dan sosis.
                </p>
                <div className="card-actions justify-end mt-2">
                  <button className="py-2 px-4 bg-red-700 text-white rounded-2xl">
                    Rp 9.000
                  </button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-md">
              <figure>
                <img
                  src="https://akcdn.detik.net.id/community/media/visual/2022/01/24/resep-siomay-ayam_43.jpeg?w=700&q=90"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Dimsum</h2>
                <p>
                  Dimsum daging ayam dengan varian toping seperti keju, jamur
                  dan sosis.
                </p>
                <div className="card-actions justify-end mt-2">
                  <button className="py-2 px-4 bg-red-700 text-white rounded-2xl">
                    Rp 9.000
                  </button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-md">
              <figure>
                <img
                  src="https://akcdn.detik.net.id/community/media/visual/2022/01/24/resep-siomay-ayam_43.jpeg?w=700&q=90"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Dimsum</h2>
                <p>
                  Dimsum daging ayam dengan varian toping seperti keju, jamur
                  dan sosis.
                </p>
                <div className="card-actions justify-end mt-2">
                  <button className="py-2 px-4 bg-red-700 text-white rounded-2xl">
                    Rp 9.000
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="md:max-w-4xl lg:max-w-7xl mx-auto px-3 lg:px-4"
          id={"drink"}
        >
          <div
            className={
              "my-10 font-semibold text-black border-l-4 border-red-700 pl-3"
            }
          >
            <h1 className={"text-3xl"}>Drink</h1>
          </div>
          <div
            className={"grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"}
          >
            <div className="card card-compact bg-base-100 shadow-md">
              <figure>
                <img
                  src="https://akcdn.detik.net.id/community/media/visual/2022/01/24/resep-siomay-ayam_43.jpeg?w=700&q=90"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Dimsum</h2>
                <p>
                  Dimsum daging ayam dengan varian toping seperti keju, jamur
                  dan sosis.
                </p>
                <div className="card-actions justify-end mt-2">
                  <button className="py-2 px-4 bg-red-700 text-white rounded-2xl">
                    Rp 9.000
                  </button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-md">
              <figure>
                <img
                  src="https://akcdn.detik.net.id/community/media/visual/2022/01/24/resep-siomay-ayam_43.jpeg?w=700&q=90"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Dimsum</h2>
                <p>
                  Dimsum daging ayam dengan varian toping seperti keju, jamur
                  dan sosis.
                </p>
                <div className="card-actions justify-end mt-2">
                  <button className="py-2 px-4 bg-red-700 text-white rounded-2xl">
                    Rp 9.000
                  </button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-md">
              <figure>
                <img
                  src="https://akcdn.detik.net.id/community/media/visual/2022/01/24/resep-siomay-ayam_43.jpeg?w=700&q=90"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Dimsum</h2>
                <p>
                  Dimsum daging ayam dengan varian toping seperti keju, jamur
                  dan sosis.
                </p>
                <div className="card-actions justify-end mt-2">
                  <button className="py-2 px-4 bg-red-700 text-white rounded-2xl">
                    Rp 9.000
                  </button>
                </div>
              </div>
            </div>
            <div className="card card-compact bg-base-100 shadow-md">
              <figure>
                <img
                  src="https://akcdn.detik.net.id/community/media/visual/2022/01/24/resep-siomay-ayam_43.jpeg?w=700&q=90"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title font-bold">Dimsum</h2>
                <p>
                  Dimsum daging ayam dengan varian toping seperti keju, jamur
                  dan sosis.
                </p>
                <div className="card-actions justify-end mt-2">
                  <button className="py-2 px-4 bg-red-700 text-white rounded-2xl">
                    Rp 9.000
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="md:max-w-4xl lg:max-w-7xl mx-auto px-3 lg:px-4"
          id={"beverage"}
        >
          <div
            className={
              "my-10 font-semibold text-black border-l-4 border-red-700 pl-3"
            }
          >
            <h1 className={"text-3xl"}>Bundle</h1>
          </div>
          <div
            className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"}
          >
            <div className="card card-side bg-base-100 shadow-xl">
              <div className="grid grid-cols-2">
                <figure className={"bg-cover object-cover"}>
                  <img
                    src="https://akcdn.detik.net.id/community/media/visual/2022/01/24/resep-siomay-ayam_43.jpeg?w=700&q=90"
                    alt="Movie"
                    className={
                      "rounded-bl-2xl rounded-tl-2xl min-w-full min-h-full "
                    }
                  />
                </figure>
                <div className="card-body">
                  <h1 className="card-title ">Paket Makanan 1</h1>
                  <ul className="list-disc list-inside ">
                    <li>Dimsum 1 porsi</li>
                    <li>Pisang coklat 1 porsi</li>
                    <li>Spageti Bolognise 1 porsi</li>
                    <li>Minuman bebas rasa</li>
                  </ul>
                  <div className="card-actions justify-end mt-2">
                    <button className="py-2 px-4 bg-red-700 text-white rounded-2xl w-full">
                      Rp 9.000
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
              <div className="grid grid-cols-2 ">
                <figure className={""}>
                  <img
                    src="https://akcdn.detik.net.id/community/media/visual/2022/01/24/resep-siomay-ayam_43.jpeg?w=700&q=90"
                    alt="Movie"
                    className={
                      "rounded-bl-2xl rounded-tl-2xl min-w-full min-h-full"
                    }
                  />
                </figure>
                <div className="card-body">
                  <h1 className="card-title ">Paket Makanan 1</h1>
                  <ul className="list-disc list-inside ">
                    <li>Dimsum 1 porsi</li>
                    <li>Pisang coklat 1 porsi</li>
                    <li>Spageti Bolognise 1 porsi</li>
                    <li>Minuman bebas rasa</li>
                  </ul>
                  <div className="card-actions justify-end mt-2">
                    <button className="py-2 px-4 bg-red-700 text-white rounded-2xl w-full">
                      Rp 9.000
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className={"text-center py-10 border  mt-10 bg-white"}>
        <span className={"font-semibold text-xl"}>Create with ❤️</span>
      </footer>
    </div>
  );
}

export default App;
