
import ReactDOM, { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import Widget from './Components/Widget/Widget';
import store from './redux/store/index'

const root = createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Widget />
  </Provider>
);

