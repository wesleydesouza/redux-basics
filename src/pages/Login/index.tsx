import { useState } from "react";
import styles from "./login.module.css";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/user/slice";

export function Login() {
  //pega o dispatch do redux
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    //insere os dados no redux
    dispatch(createUser({ name, email }));

    navigate("/painel");
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Link to="/painel">
          <h1 className={styles.title}>Dev Login</h1>
        </Link>

        <form onSubmit={handleLogin} className={styles.form}>
          <input
            type="text"
            className={styles.input}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Digite seu nome...."
          />
          <input
            type="text"
            className={styles.input}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Digite seu email..."
          />

          <button type="submit">Acessar</button>
        </form>
      </main>
    </div>
  );
}
