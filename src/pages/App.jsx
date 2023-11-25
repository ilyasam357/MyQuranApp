import DarkModeProvider from "../context/DarkMode";
import Navbar from "../components/layouts/Navbar";
import MainContent from "../components/layouts/MainContent";
import Counter from "../components/layouts/Counter";
import DigitalClock from "../components/layouts/DigitalClock";
import DataSurah from "../components/layouts/DataSurah";
function App() {
  return (
    <>
      <DarkModeProvider>
        <MainContent>
          <Navbar />
          <div className="md:flex gap-0 justify-center">
            <Counter />
            <DigitalClock />
          </div>
          <DataSurah />
        </MainContent>
      </DarkModeProvider>
    </>
  );
}

export default App;
