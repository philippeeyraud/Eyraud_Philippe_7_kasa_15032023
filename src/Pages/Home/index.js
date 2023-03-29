import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Housing from "../../components/Housing"
import list from "../../Data/index"
import './index.scss'
function Home() {
  return (
    <div>
      <Header />
      <Banner />
      
        
        <main className="home-container">
          {list.map((Data) => {
            return (
              <Housing
                key={Data.id}
                id={Data.id}
                title={Data.title}
                cover={Data.cover}
              />
            );
          })}
        </main>
        
   
      <Footer />
    </div>
  );
}

export default Home;
