import ReactDOM                      from 'react-dom';
import { BrowserRouter as Router }   from 'react-router-dom';
import { Provider }                  from 'react-redux';

import App                           from './components/app/app';
import { store }                     from './redux/store';

import './index.scss';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router> 
    </Provider>,
document.getElementById('root'));

const devMode = process.env.NODE_ENV === 'development';

if (devMode && module && module.hot) {
    module.hot.accept();
}
