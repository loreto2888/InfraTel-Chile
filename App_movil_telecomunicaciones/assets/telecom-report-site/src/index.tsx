import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import LoginForm from './components/LoginForm';
import './styles/main.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/login" component={LoginForm} />
            </Switch>
        </Router>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));