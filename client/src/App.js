import "./App.css";
import { Route, Switch } from "react-router-dom";

import { Home } from "./pages/homepage/Home";
import { Upload } from "./pages/upload/Upload";
import { Header } from "./components/header/Header";

import { GlobalStyle } from "./GlobalStyle.styles";
import { PostsContextProvider } from "./components/context/PostsContext";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <PostsContextProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/upload" component={Upload} />
      </Switch>
      </PostsContextProvider>
    </>
  );
};

export default App;
