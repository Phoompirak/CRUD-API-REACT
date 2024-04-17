import './App.css';
import Footer from './component/Footer/Footer';
import FormProduct from './component/FormProduct/FormProduct';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
      <div className="App">
        <Navbar />
        <FormProduct />
        <Footer />
      </div>
  );
}

export default App;