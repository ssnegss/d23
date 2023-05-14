import "./App.css";
import { HeaderComponent } from "./components/HeaderComponent/HeaderComponent";
import { ContainerComponent } from "./components/ContainerComponent/ContainerComponent";

function App() {
   return (
      <div className="App">
         <HeaderComponent />
         <ContainerComponent />
      </div>
   );
}

export default App;
