import { Route, Router, Switch } from 'react-router-dom';
import history from './@history';
import LandingPage from './components/pages/Landing';
import './scss/app.scss';

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/'>
                    <LandingPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
