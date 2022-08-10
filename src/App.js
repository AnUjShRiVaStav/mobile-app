import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import Content from './component/content';
import Footer from './component/footer';
import RoutesFile from './RoutesFile';


function App() {
  return (
    <div className="App">
    <Header />
    <Content />
    <Footer />
    {/* <RoutesFile /> */}
    </div>
  );
}

export default App;
