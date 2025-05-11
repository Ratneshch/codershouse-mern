import React from "react";
import styles from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/shared/Card/Card.jsx";
import Button from "../../components/shared/Button/Button.jsx";

const Home = () => {
  const navigate = useNavigate();

  const startRegister = () => {
    console.log("button clickd");
    navigate("/register");
  };
  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title="Welcome to Codershouse" icon="logo">
          <p className={styles.text}>
            We’re working hard to get Codershouse ready for everyone! While we
            wrap up the finishing youches, we’re adding people gradually to make
            sure nothing breaks
          </p>
          <div>
            <Button onClick={startRegister} text="Get your username" />
          </div>
          <div className={styles.signinwrapper}>
            <span className={styles.hasInvite}>Have an invite text?</span>
            <Link
              to={"/login"}
              style={{
                color: "#0077ff",
                fontWeight: "bold",
                textDecoration: "none",
                marginLeft: "10px",
              }}
            >
              Sign in
            </Link>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Home;
