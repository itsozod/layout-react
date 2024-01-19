import "./App.css";
import { Header } from "./components/header/Header";
import { CourseContainer } from "./components/courseContainer/CourseContainer";
function App() {
  return (
    <>
      <Header />
      <main>
        <CourseContainer />
      </main>
    </>
  );
}

export default App;
