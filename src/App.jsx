import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <PostList />
          </Route>
          <Route path="/new">
            <PostForm />
          </Route>
          {/* Add more routes for updating posts if needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;