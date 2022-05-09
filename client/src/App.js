import {Container} from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen'
import { BrowserRouter,Routes, Route, Link  } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    
    <Header/>

    <main>
    <Container>
    <Routes>
    <Route path="/" exact element={<HomeScreen />} />
    <Route path='/product/:id' exact element={<ProductScreen />} />
    </Routes>
     </Container>
    </main>

  <Footer/>
 
  </BrowserRouter>
  );
}

export default App;
