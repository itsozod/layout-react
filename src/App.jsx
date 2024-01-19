import "./App.css";
import { Header } from "./components/header/Header";
import { CourseContainer } from "./components/courseContainer/CourseContainer";
import { Cards } from "./components/cards/Cards";
import { Footer } from "./components/footer/Footer";
function App() {
  return (
    <>
      <Header />
      <main>
        <CourseContainer />
        <Cards />
      </main>
      <Footer />
    </>
  );
}

export default App;
