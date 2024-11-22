import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import ContentAPIHooks from './components/ContentAPIHooks';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      <NavBarSimple />
      <ContentAPIHooks />
    </div>
  );
}

export default App;