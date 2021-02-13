import { Card } from "antd";
import "antd/dist/antd.css";

function CommitCard(commitData) {
  console.log(commitData, "<---from card component");
  const Data = commitData.commitData;
  if (Data) {
    return (
      <div>
        {Data.map((commit) => {
          return (
            <Card title="Default size card" style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          );
        })}
      </div>
    );
  }
  else{
      return(
          <div>Data was lost!</div>
      )
  }
}

export default CommitCard;
