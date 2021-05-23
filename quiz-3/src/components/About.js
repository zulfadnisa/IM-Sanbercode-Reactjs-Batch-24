import React from "react";
import style from "./About.module.css";
import Card from "../UI/css/Card";
const About = (props) => {
  return (
    <>
      <Card className={style.about}>
        <h1>Data Peserta Sanbercode Bootcamp Reactjs</h1>
        <ol>
          <li>
            <strong>Nama:</strong> Zulfa D N
          </li>
          <li>
            <strong>Email:</strong> zulfadza@gmail.com
          </li>
          <li>
            <strong>Sistem Operasi yang digunakan:</strong>Windows
          </li>
          <li>
            <strong>Akun Github:</strong>{" "}
            <a href="http://github.com/zulfadnisa">zulfadnisa</a>
          </li>
          <li>
            <strong>Akun Telegram:</strong> zulfadnisa
          </li>
        </ol>
      </Card>
      <br />
      <br />
    </>
  );
};
export default About;
