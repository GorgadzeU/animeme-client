import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header.component';
import MainPage from './pages/main.page';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' exact component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
