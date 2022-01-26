
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Siberbar from './Components/Siberbar';
import Aboutpage from './Pages/Aboutpage';
import Contactpage from './Pages/Contactpage';
import Educationpage from './Pages/Education';
import Homepage from './Pages/Homepage';
import Portafoliopage from './Pages/Portafoliopage';
import Skillspage from './Pages/Skillspage';






function App() {
  return (
    <>
      <div className='App'>
        <Siberbar />
        <MainContentStyled>
          <Switch>
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="/about" exact>
              <Aboutpage />
            </Route>
            <Route path="/skills" exact>
              <Skillspage />
            </Route>
            <Route path="/education" exact>
              <Educationpage />
            </Route>
            <Route path="/portafolio" exact>
              <Portafoliopage />
            </Route>
            <Route path="/contact" exact>
              <Contactpage />
            </Route>
          </Switch>
        
        </MainContentStyled>
    </div>
    </>
  );
}
const MainContentStyled = styled.main`
position: relative;
margin-left: 16.3rem;
min-height: 100vh;
@media screen and (max-width:1200px){
  margin-left: 0;
}
`
export default App;
