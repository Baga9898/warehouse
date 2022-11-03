import ReactDOM from 'react-dom';
import App from './components/app/app';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.scss';

ReactDOM.render(
    <Router>
        <App />
    </Router>, 
document.getElementById('root'));

const devMode = process.env.NODE_ENV === 'development';

if (devMode && module && module.hot) {
    module.hot.accept();
}
