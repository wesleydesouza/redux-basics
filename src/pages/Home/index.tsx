import styles from "./home.module.css";
import { Header } from "../../components/header";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function Home() {
  //pega o estado do redux
  const { user } = useSelector((rootReducer) => rootReducer.user);

  console.log(user);

  function handleDeleteAddress() {
    alert("Endereço deletado com sucesso!");
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Login
          </Link>
          <Link to="/painel" className={styles.link}>
            Painel
          </Link>
          <Link to="/address" className={styles.link}>
            Meus endereços
          </Link>
        </nav>

        <main className={styles.content}>
          <div className={styles.message}>
            <h1 className={styles.title}>
              Olá {user ? user.name : "Visitante"}, bem vindo!
            </h1>

            <span>Email: {user ? user.email : "..."}</span>

            <strong className={styles.addressLabel}>Endereço atual:</strong>
            <div className={styles.address}>
              <p>Rua centro, n 123</p>

              <button onClick={handleDeleteAddress}>Deletar endereço</button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
