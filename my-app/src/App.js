import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import ContentHooks from './components/ContentHooks';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      <NavBarSimple />
      <ContentHooks />
    </div>
  );
}

export default App;