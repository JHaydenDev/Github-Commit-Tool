import { Layout } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import axios from 'axios';
import CommitCard from './commitCard'
const { Header, Footer, Content } = Layout;

function HomeLayout() {
  const [isLoading, setLoading] = useState(true)
  const [commitData, setCommitData] = useState();

  useEffect(() => {
    getAllData()
  },[isLoading]);

  async function getAllData(){
    const URL = "https://api.github.com/repos/JHaydenDev/Github-Commit-Tool/commits"   // /repos/{owner}/{repo}/commits;
    axios
      .get(`${URL}`)
      .then((response) => {
          const allData = response.data;
          setCommitData(allData);
          console.log(commitData, "<------Commit Data");
          setLoading(false);
      })
      .catch((error) => console.error(`Error: ${error}`));
  }

  
  return (
    <Layout>
      <Header>Header</Header>
      <Content><CommitCard commitData={commitData}/></Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default HomeLayout;
