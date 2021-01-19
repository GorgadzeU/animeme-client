import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header.component';
import Footer from './components/footer.component';

import MainPage from './pages/main.page';
import CategoryPage from './pages/category.page';
import AnimePage from './pages/anime.page';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/categories/:category' exact component={CategoryPage} />
        <Route path='/anime/:amimeId' exact component={AnimePage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
