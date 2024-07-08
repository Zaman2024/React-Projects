import {store} from './store/store';
import {Provider} from 'react-redux';
import Card from './components/Card';

function App() {
  return (
    <Provider store={store}>
      <Card/>
    </Provider>
  )
}

export default App

