import { Flex, Avatar, Typography, Button } from "antd";
import Card from "antd/es/card/Card";
import Link from "antd/es/typography/Link";
import { VideoCameraOutlined } from "@ant-design/icons";
import "./EventCard.css";
import { randomColor } from "../../../utils/RandomColor";

const { Text } = Typography;

function EventCard({
  key,
  index,
  title,
  duration,
  type,
  client,
  clientAvatar,
}) {
  return (
    <Card className="custom-card" key={key} style={{ margin: "5px 0px" }}>
      <Flex style={{ width: "100%", backgroundColor: randomColor(index)[1] }}>
        <div
          style={{ width: "5px", backgroundColor: randomColor(index)[0] }}
        ></div>
        <Flex
          justify="space-between"
          style={{ width: "100%", padding: "15px" }}
        >
          <Flex vertical align="flex-start" style={{ width: "100%" }}>
            <Text style={{ color: randomColor(index)[2] }}>
              {title ? title : "First Session with Alex Stan"}
            </Text>
            <Text type="secondary">
              {duration ? duration : "9:00 AM - 09:30 AM GMT +8"}
            </Text>
            {type === "Appointment" && (
              <Flex align="center">
                <Avatar size={32} src={clientAvatar ? clientAvatar : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />
                <Link style={{ marginLeft: "10px" }} to={client ? client : "#"}>
                  View Client Profile
                </Link>
              </Flex>
            )}
          </Flex>
          <Flex justify="flex-end" style={{ width: "40px" }}>
            <Button
              onClick={() => {}}
              icon={<VideoCameraOutlined />}
              style={{
                color: randomColor(index)[1],
                backgroundColor: randomColor(index)[0],
                borderRadius: "24px",
              }}
            ></Button>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}

export default EventCard;
