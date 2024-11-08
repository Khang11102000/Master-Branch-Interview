import { Flex, Button, Typography } from "antd";
import { getCurrentDate } from "../../../utils/CompareDate";
import { monthShortName } from "../../../utils/ShortMonth";

const { Text } = Typography;

function UpcomingEvent({ date }) {
  return (
    <Flex>
      <Flex vertical align="start" style={{ width: "50%" }}>
        <Text
          level={4}
          style={{ color: "#0F4C81", fontWeight: "bold", fontSize: "18px" }}
        >
          Upcoming Events
        </Text>
        <Text type="secondary">{`${
          getCurrentDate(new Date(date)) === getCurrentDate(new Date())
            ? "Today"
            : `${date.date()}, ${monthShortName[date.month()]}`
        }`}</Text>
      </Flex>
      <Flex justify="flex-end" style={{ width: "50%" }}>
        <Button
          type="primary"
          size="large"
          style={{
            borderRadius: "50px",
            backgroundColor: "#0F4C81",
          }}
        >
          View All
        </Button>
      </Flex>
    </Flex>
  );
}

export default UpcomingEvent;
