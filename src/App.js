
import './App.css';//import styles for app component
import Categories from './components/categories/categories';//import component categories
import Collection from './components/collection/collection';//import component collection
import Footer from './components/footer/footer';//import component footer
import Header from './components/header/header';//import component header
import LatestNews from './components/latestNews/latestNews';//import component latest news
import MainSection from './components/mainSection/mainSection';//import component main section
import Examples from './components/materials/materials';//import component examples
import Pottery from './components/pottery/pottery';//import component pottery
function App() {
  return (
// create main div app
    <div className="App">
      {/* add component header */}
      <Header/>
      {/* add component main section */}
      <MainSection/>
      {/* add component categories */}
      <Categories/>
      {/* add component examples */}
      <Examples/>
      {/* add component collection */}
      <Collection/>
      {/* add component pottery */}
      <Pottery/>
      {/* add component latest name */}
      <LatestNews/>
      {/* add component footer */}
      <Footer/>
    </div>
  );
}

export default App;
