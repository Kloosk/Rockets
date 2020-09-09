import React,{Suspense,lazy} from 'react';
import styled from "styled-components";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import {useSelector} from "react-redux";

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
   @media (max-width: 768px) {
     overflow-y: ${props => props.scroll ? `scroll` : `hidden`};
  }
`;
const App = () => {
    const scroll = useSelector(state => state.scroll.scroll);
  return (
      <Router>
            <Container scroll={scroll}>
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
      </Router>
  );
};

export default App;
