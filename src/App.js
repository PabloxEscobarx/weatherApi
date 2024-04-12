import { Provider } from "react-redux";
import "./styles.css";
import { store } from "../src/redux/store/configureStore";
import { WeatherApp } from "./components";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <WeatherApp />
      </div>
    </Provider>
  );
}

export default App;
