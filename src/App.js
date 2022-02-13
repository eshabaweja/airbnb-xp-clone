import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero.js';
import Card from './components/Card.js';
import data from "./data.js"

export default function App() {

  const cards = data.map( datum => {
    return (
      <Card
        key={datum.id}
        item={datum} />
        /* img={datum.coverImg}
        rating={datum.stats.rating}
        reviewCount={datum.stats.reviewCount}
        location={datum.location}
        title={datum.title}
        price={datum.price}
        openSpots={datum.openSpots} */
      
    )
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards">{cards} </div>
    </div>
  );
}


