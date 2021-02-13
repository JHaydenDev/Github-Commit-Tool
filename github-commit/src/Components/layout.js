import { Layout } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import axios from 'axios';
const { Header, Footer, Content } = Layout;

function HomeLayout() {
  const [commitData, setCommitData] = useState();

  useEffect(() => {
    getAllData()
  }, []);

  const getAllData = () => {
    const URL = "https://api.github.com/repos/JHaydenDev/Github-Commit-Tool/commits"   // /repos/{owner}/{repo}/commits;
    axios
      .get(`${URL}`)
      .then((response) => {
          const allData = response;
          setCommitData(allData);
          console.log(commitData, "<------Commit Data")
      })
      .catch((error) => console.error(`Error: ${error}`));
  }


  return (
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default HomeLayout;
