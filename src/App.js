import React from 'react';
import styled from "styled-components";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {Provider} from "react-redux";
import store from "./redux/store";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Mars from "./components/mars/Mars";
import Model3D from "./components/model3D/Model3D";


const Container = styled.div`
   width: 100vw;
   height: 100vh;
   overflow: hidden;
`;
const App = () => {
  return (
      <Router>
          <Provider store={store}>
            <Container>
                <Switch>
                    <Route exact path="/">
                        <Header/>
                        <Main/>
                        <Model3D/>
                    </Route>
                    <Route path="/mars">
                        <Mars/>
                    </Route>
                </Switch>
            </Container>
          </Provider>
      </Router>
  );
};

export default App;
