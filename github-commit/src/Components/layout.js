import { Layout } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import axios from 'axios';
import CommitCard from './commitCard'
import styled from "styled-components";
const { Header, Content } = Layout;

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
      <HeaderBox>GitHub Commit Tracker (That tracks its own commits)</HeaderBox>
      <Content><CommitCard commitData={commitData}/></Content>
    </Layout>
  );
}

export default HomeLayout;


const HeaderBox = styled(Header)`
color: white;
font-size: 1.5em;
`;
