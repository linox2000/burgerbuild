import "./App.css";
import Layout from "./Hoc/Layout/Layout";
import BurgerBuild from './containers/BurgerBuild/BurgerBuild';

function App() {
  return (
    <div className="App">
      <Layout><BurgerBuild/></Layout>
    </div>
  );
}

export default App;
