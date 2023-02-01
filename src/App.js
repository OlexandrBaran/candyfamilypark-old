import Carusel from './component/Carusel';
import Footer from './component/Footer';
import Header from './component/Header'
import Menu from './component/Menu';
import { menuData } from "./data/menuData";
import getUniqueCategories from "./functions/sortMenuItems";


function App() {
  let uniqueCategories = getUniqueCategories(menuData)

  return (
    <div className="App" style={{position:"relative"}}>

      
      <Header/>
      <Carusel uniqueCategories={uniqueCategories}/>
      <Menu/>
      <Footer/>

    </div>
  );
}

export default App;
