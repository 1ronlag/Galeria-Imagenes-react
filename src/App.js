import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Characters from "./Components/Characters";
import Cards from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Header titulo=" Galeria de imágenes con React" />

      <div class="Container">
        {Characters.map((Character, e) => {
          return (
            <Cards
              key={e}
              img={Character.img}
              name={Character.name}
              description={Character.description}
            />
          );
        })}
      </div>
      

      <Footer Footer=" Galeria con fotos de los personajes mas importantes de South Park." />
    </div>
  );
}

export default App;
