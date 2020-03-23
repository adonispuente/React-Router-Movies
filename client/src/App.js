import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <nav>
        <div className="nav-links">
          {/* <Link to="/">Home</Link> */}
          {/* <Link to="/movies/:id"> Individual Movie</Link> */}
        </div>
      </nav>

      <Switch>
        <Route path="/movies/:id">
          <Movie />
        </Route>
        <Route exact path="/">
          <MovieList />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

/* <SavedList list={savedList} />
<Route path="/" component={MovieList}>
  <Item items={MovieList} />
</Route>

<Route path="/movies/:itemID" component={Movie}>
  <Item items={Movie} />
</Route>
</div> */
