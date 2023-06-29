import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import './global.css'
import styles from './App.module.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Guilherme Silva"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum iusto magni sit, beatae earum tempore reiciendis repellendus quisquam explicabo, soluta ad asperiores facilis. Recusandae corrupti reprehenderit error soluta, praesentium modi."
          />
          <Post
            author="Gabriel Silva"
            content="Novo post"
          />
        </main>
      </div>
    </div>
  );
}