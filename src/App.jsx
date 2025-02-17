import "./App.css";
import { Cards } from "./components/cards/Cards";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Cards />
            </main>
            <Footer />
        </>
    );
}

export default App;
