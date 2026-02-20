import paradise from "./assets/paradise.jpg";
import bali from "./assets/bali.jpg";
import cityBg from "./assets/san francisco.jpg";

import img1 from "./assets/1.jpg";
import img2 from "./assets/2.jpg";
import img3 from "./assets/3.jpg";
import img4 from "./assets/4.jpg";

import japan from "./assets/japanmtfuji.jpg";
import paris from "./assets/paris.jpg";
import maldives from "./assets/maldives-island.jpg";

import spain from "./assets/spain.jpg";
import greece from "./assets/greece.jpg";
import italy from "./assets/italy.jpg";
import taiwan from "./assets/taiwan.jpg";
import philippines from "./assets/philippines.jpg";
import thailand from "./assets/thailand.jpg";

function App() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="font-[Poppins] text-gray-800">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur text-white flex justify-between items-center px-10 py-5">
        <h1 className="text-3xl font-bold">Travel</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:scale-110 hover:text-blue-500 transition">Home</a>
          <a href="#package" className="hover:scale-110 hover:text-blue-500 transition">Package</a>
          <a href="#destination" className="hover:scale-110 hover:text-blue-500 transition">Destination</a>
          <a href="#contact" className="hover:scale-110 hover:text-blue-500 transition">Contact</a>
        </nav>
      </header>

      {/* HOME */}
      <section
        id="home"
        className="h-screen bg-cover bg-center flex items-center px-40 text-white"
        style={{ backgroundImage: `url(${paradise})` }}
      >
        <div>
          <h1 className="text-6xl font-bold mb-6">
            Your Journey <br /> Begins Here
          </h1>
          <p className="mb-6 max-w-lg">
            Great travel experiences start with exceptional service because
            every journey should be smooth and stress-free.
          </p>
          <button
            onClick={scrollToBottom}
            className="bg-white/70 hover:bg-white text-black px-6 py-2 rounded transition hover:scale-110"
          >
            Let's Go Now
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-20 py-60 text-center">
        <h2 className="text-4xl font-bold mb-10">
          Start Your Vacations with Lots of Services!
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          {[{ img: img1, title: "Ship Cruises" },
          { img: img2, title: "Food Tours" },
          { img: img3, title: "Summer Rest" },
          { img: img4, title: "Mountain Tours" }].map((item, i) => (
            <div
              key={i}
              className="border p-8 rounded shadow-lg hover:scale-105 transition"
            >
              <img src={item.img} className="h-16 mx-auto mb-4" />
              <h4 className="font-semibold">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* PARADISE */}
      <section
        className="h-screen bg-cover bg-center flex items-center px-40 text-white"
        style={{ backgroundImage: `url(${bali})` }}
      >
        <div>
          <h1 className="text-6xl font-bold mb-6">
            Explore The <br /> Best Paradise
          </h1>
          <p className="max-w-xl">
            Discover breathtaking destinations, hidden gems, and unforgettable
            travel experiences all in one place.
          </p>
        </div>
      </section>

      {/* WORLD */}
      <section
        className="h-screen bg-cover bg-center flex items-center px-40 text-black bg-white"

      >
        <div>
          <h1 className="text-6xl font-bold mb-6">
            Enjoy The <br /> Beauty of The World
          </h1>
          <p className="max-w-xl">
            Experience the wonders of our planet. From breathtaking natural landscapes to stunning architectural marvels,
            we bring you the most awe-inspiring destinations. Whether you love majestic mountains, serene beaches, or vibrant cities, let us guide youto the world’s
            most beautiful places. Start your journey today and embrace the beauty around you!
          </p>
        </div>
      </section>

      {/* CITY */}
      <section
        className="h-screen bg-cover bg-center flex items-center px-40 text-white"
        style={{ backgroundImage: `url(${cityBg})` }}
      >
        {/* Make this div full width and use flex to push content right */}
        <div className="w-full flex justify-end">
          <div className="max-w-lg text-right">
            <h1 className="text-6xl font-bold mb-6">
              Explore The <br /> Best Cities
            </h1>
            <p>
              Discover the world's most vibrant cities. From bustling metropolises to cultural hubs,
              we bring you the top destinations for travel, food, history, and adventure. Whether you seek iconic landmarks or lively nightlife. Start exploring today!
            </p>
          </div>
        </div>
      </section>


      {/* PACKAGES */}
      <section id="package" className="px-6 md:px-20 py-20 text-center bg-gray-100">
        <h2 className="text-4xl font-bold mb-12">Upcomming Tour Packages</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-[900px]">


          {[
            { img: japan, title: "Japan" },
            { img: paris, title: "France" },
            { img: maldives, title: "Maldives" },
          ].map((item, i) => (
            <div
              key={i}
              className="destination-container-box border-2 border-white rounded-lg shadow-md cursor-pointer mb-12 hover:scale-110 hover:bg-white hover:text-purple-600 hover:transition-transform duration-300"
              style={{ width: "256px", height: "453px" }}
            >
              <div className="destination-container w-full h-full overflow-hidden rounded-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h4 className="py-4 font-semibold">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* DESTINATIONS */}
      <section id="destination" className="px-6 md:px-20 py-20 text-center bg-gray-100">
        <h2 className="text-4xl font-bold mb-12">Famous Destinations</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-[900px]">


          {[
            { img: spain, title: "Spain" },
            { img: greece, title: "Greece" },
            { img: italy, title: "Italy" },
            { img: taiwan, title: "Taiwan" },
            { img: philippines, title: "Philippines" },
            { img: thailand, title: "Thailand" },
          ].map((item, i) => (
            <div
              key={i}
              className="destination-container-box border-2 border-white rounded-lg shadow-md cursor-pointer mb-12 hover:scale-110 hover:bg-white hover:text-purple-600 hover:transition-transform duration-300"
              style={{ width: "256px", height: "453px" }}
            >
              <div className="destination-container w-full h-full overflow-hidden rounded-lg">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h4 className="py-4 font-semibold">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>


      {/* SIGNUP */}
      <section className="flex justify-center items-center py-40 bg-gray-100">
        <div className="bg-blue-100 p-10 rounded-lg shadow-lg w-96 text-center">
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
            <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Sign Up
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer  id="contact" className="bg-blue-500 text-black text-center py-10">
        <div className="flex flex-wrap justify-around mb-6">
          <div>
            <h3 className="font-bold mb-2">Contact Us</h3>
            <p>Email: Travelnganiii@gmail.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Marikina City, Philippines</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Follow Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>

          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <p>About Us</p>
            <p>Services</p>
            <p>Privacy Policy</p>
          </div>
        </div>

        <p className="text-sm">
          © 2025 MarkCanuel. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;
