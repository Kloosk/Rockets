import React,{Suspense,lazy} from 'react';
import styled from "styled-components";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {Provider} from "react-redux";
import store from "./redux/store";
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Loading from "./components/loading/Loading";
import Model3D from "./components/model3D/Model3D";
const Mars = lazy(() => import('./components/mars/Mars'));
const ViewMars = lazy(() => import('./components/viewmars/ViewMars'));



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
                            <Suspense fallback={<Loading/>}><Mars/></Suspense>
                        </Route>
                        <Route path="/view">
                            <Suspense fallback={<Loading/>}><ViewMars/></Suspense>
                        </Route>

                    </Switch>

            </Container>
          </Provider>
      </Router>
  );
};

export default App;
