import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header.component';
import Footer from './components/footer.component';
import MainPage from './pages/main.page';
import CategoryPage from './pages/category.page';

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/:category' exact component={CategoryPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
