import { Route, Router, Switch } from 'react-router-dom';
import history from './@history';
import AfterLogin from './components/pages/AfterLogin';
import LandingPage from './components/pages/Landing';
import MyRecordPage from './components/pages/MyRecord';
import './scss/app.scss';

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/'>
                    <LandingPage />
                </Route>
                <Route exact path='/my-record'>
                    <MyRecordPage />
                </Route>
                <Route exact path='/after-login'>
                    <AfterLogin />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
