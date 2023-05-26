import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import list from "../../Data/index";
import bannerAcc from "./../../assets/bannerAcc.png";

import "./index.scss";
import "./../../assets/styles/base.scss/base.scss";

function Home() {
  const bannerText = "Chez vous, partout et ailleurs";
  return (
    <div>
      <Header />
      <Banner bannerImage={bannerAcc} bannerTitle={bannerText} />
     <main className="container">
        <div className="home-container">
          {list.map((Data) => {
            return (
              <Card
                key={Data.id}
                id={Data.id}
                title={Data.title}
                titleOne={Data.titleOne}
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
