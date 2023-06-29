import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/iuG122.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Guilherme Silva</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>
        <time title="29 de Junho às 09:54h" dateTime="2023-06-29 09:54:30">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="">jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto</a>{' '}
        <a href="">#nlw</a>{' '}
        <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}