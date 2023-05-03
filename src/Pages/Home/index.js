import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import list from "../../Data/index";
import bannerAcc from "./../../assets/bannerAcc.png";
import textAccueil from "./../../assets/textAccueil.png";
import "./index.scss";
import "./../../assets/styles/base.scss/base.scss";

function Home() {
  return (
    <div>
      <Header />
      <Banner bannerImage={bannerAcc} />;
      <p className="banner_text-banner">
        <img src={textAccueil} alt="text" />
      </p>
      <main className="main">
        <div className="home-container">
          {list.map((Data) => {
            return (
              <Card
                key={Data.id}
                id={Data.id}
                title={Data.title}
                cover={Data.cover}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
