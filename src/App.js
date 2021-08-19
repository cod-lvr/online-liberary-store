import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import {  AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Store from "./pages/Store";
import BookDetail from "./pages/BookDetails";
import NotfoundPage from "./pages/NotFoundPage";
import Layout from "./components/UI/Layout";

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/store" exact>
            <Store />
          </Route>
          <Route path="/store/:bookId">
            <BookDetail />
          </Route>
          <Route path="*">
            <NotfoundPage />
          </Route>
        </Switch>
      </AnimatePresence>
    </Layout>
  );
}

export default App;
