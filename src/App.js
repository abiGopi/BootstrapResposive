// import logo from './logo.svg';
import "./App.css";
import Blog from "./Blog";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
function App() {
  return (
    <div className="container ">
      <header>
        <Header />
      </header>
      <Content />
      <Blog />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
