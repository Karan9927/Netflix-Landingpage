import "./App.css";
import Card from "./Components/Card";
import Cardleft from "./Components/Cardleft";
import Contact from "./Components/Contact";
import Drop from "./Components/Drop";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <div className="bg">
        <Navbar />
        <Header />
      </div>
      <Card
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
        h1="Enjoy on your TV."
        p="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blue-ray
          players and more."
        style="bg-black md:flex justify-evenly items-center md:px-10 md:pb-10 pt-10 border-b-8 border-gray-800"
      />
      <Cardleft
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        h1="Download your shows to watch offline."
        p="Save your favourites easily and always have something to watch."
        style="bg-black md:flex justify-evenly items-center md:px-10 md:pb-14 pt-10 border-b-8 border-gray-800"
      />
      <Card
        img="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
        h1="Watch Everywhere."
        p="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        style="bg-black md:flex justify-evenly items-center md:px-10 md:pb-14 pt-10 border-b-8 border-gray-800"
      />
      <Cardleft
        img="https://occ-0-2991-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
        h1="Create profiles for children."
        p="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        style="bg-black md:flex justify-evenly items-center md:px-10 md:pb-14 pt-10 border-b-8 border-gray-800"
      />
      <Drop />
      <Contact />
    </>
  );
}

export default App;
