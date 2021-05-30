import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Section from "./Section";
import "antd/dist/antd.css";
import style from './layout.module.css'
import { Layout } from "antd";
const { Content, Footer } = Layout;

const Main = () => {
  return (
    <>
      <Router>
        <Layout>
          <Header />
          <Content
            className={style["site-layout"]}
            style={{ padding: "0 80px", marginTop: 64 }}
          >
            <div
              className={style["site-layout-background"]}
              style={{ padding: 24, minHeight: 380 }}
            >
              <Section />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }} >
            copyright &copy; 2021 by <a href='https://github.com/zulfadnisa' target='_blank' rel="noreferrer">ZULFA</a>
          </Footer>
        </Layout>
      </Router>
    </>
  );
};

export default Main;
