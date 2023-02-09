import FoodPage from "./Components/FoodPage";
import {Route,Routes} from 'react-router-dom'
import NavBar from "./Components/NavBar";
import Details from "./Components/Details";
import Modal from "./Components/Modal";
import Cart from "./Components/Cart";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<FoodPage/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    <Modal/>
    </div>
  );
}

export default App;
