import Banner from "../../components/banner/banner.jsx";
import Card from "../../components/card/card.jsx";
import data from "../../logements.json";
import { Link } from "react-router-dom";
import "../../styles/index.scss";

function CardBox() {
  return data.map(place => {
    return(
      <Link to={"place/"+place.id}>
        <Card key={place.id} title={place.title} image={place.cover}></Card>
      </Link>
    )
  })
}

function MainPage() {
  return (
    <main>
      <section className="bannerbox"><Banner></Banner></section>
      <section className="cardbox">{CardBox()}</section>
    </main> 
  );
}

export default MainPage;

//"places/{place.id}"