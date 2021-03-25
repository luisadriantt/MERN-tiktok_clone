import "./App.css";
import { Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Upload } from "./pages/Upload";
import { Header } from "./components/header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/upload" component={Upload} />
      </Switch>
    </>
  );
};

export default App;
