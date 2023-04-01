
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './Component/Header/Header';
import HomeCart from './Component/HomeCart/HomeCart';
import FAQ from './FAQ/FAQ';
import SideCart from './Component/SideCart/SideCart';



function App() {

  return (
    <div className="App">
     <Header></Header>
     <HomeCart>
    </HomeCart>
   <FAQ></FAQ>
    </div>
  );
}

export default App;
