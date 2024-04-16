import styles from './App.module.css';
import Tweet from './ui/components/data-display/Tweet/Tweet';
import Index from './ui/pages';

function App() {
  return (
    <div className={styles['app-container']}>
      <Index />
    </div>
  );
}

export default App;
