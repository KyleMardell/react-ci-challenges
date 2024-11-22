import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import ContentAPI from './components/ContentAPI';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      <NavBarSimple />
      <ContentAPI />
    </div>
  );
}

export default App;