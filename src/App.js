
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './Component/Header/Header';
import HomeCart from './Component/HomeCart/HomeCart';
import SideCart from './Component/SideCart/SideCart';

function App() {
  return (
    <div className="App">
     <Header></Header>
    <HomeCart></HomeCart>
   
    </div>
  );
}

export default App;
