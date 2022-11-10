import { BrowserRouter as Router }   from 'react-router-dom';
import { Provider }                  from 'react-redux';
import ReactDOM                      from 'react-dom/client';

import { store }                     from './redux/store';
import App                           from './components/app/app';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router> 
    </Provider>
);

const devMode = process.env.NODE_ENV === 'development';

if (devMode && module && module.hot) {
    module.hot.accept();
}
