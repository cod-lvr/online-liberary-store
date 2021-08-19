
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Store from "./pages/Store";
import BookDetail from "./pages/BookDetails";
import NotfoundPage from "./pages/NotFoundPage";
import Layout from "./components/UI/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to='/home'/>
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
    </Layout>
  );
}

export default App;
