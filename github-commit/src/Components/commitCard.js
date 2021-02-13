import { Card } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";
import Zoom from "react-reveal/Zoom";

function CommitCard(commitData) {
  console.log(commitData, "<---from card component");
  const Data = commitData.commitData;
  if (Data) {
    return (
      <div>
        <Wrapper>
          {Data.map((c) => {
            return (
              <Wrapper>
                <Zoom bottom>
                  <Card title="Commit" style={{ width: 300 }}>
                    <p>Who Committed: {c.commit.committer.name}</p>
                    <div>
                      <img
                        src={c.author.avatar_url}
                        alt="avatar"
                        width="100"
                        height="100"
                      ></img>
                    </div>
                    <p>Date: {c.commit.committer.date}</p>
                    <p>Message: "{c.commit.message}"</p>
                    <p>
                      <a href={c.commit.url}>Check object info</a>
                    </p>
                  </Card>
                </Zoom>
              </Wrapper>
            );
          })}
        </Wrapper>
      </div>
    );
  } else {
    return <div>Data was lost!</div>;
  }
}

export default CommitCard;

const Wrapper = styled.section`
  padding: 2em;
  background: darkslategray;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;
