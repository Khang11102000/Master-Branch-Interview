import { Calendar, Flex, Button, Typography, Select } from "antd";
import { getCurrentDate } from "../../utils/CompareDate";
import "./PrimaryCalendar.css";
import { randomColor } from "../../utils/RandomColor";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { monthLongName } from "../../utils/ShortMonth";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
function PrimaryCalender({ events, date, setDate }) {
  const navigate = useNavigate();
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month" onClick={() => console.log("G")}>
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = events.filter(
      (date) =>
        getCurrentDate(new Date(date.start)) ===
          getCurrentDate(new Date(value)) ||
        (date.repeat === "year" &&
          new Date(date.start).getDate() === new Date(value).getDate() &&
          new Date(date.start).getMonth() === new Date(value).getMonth()) ||
        (date.repeat === "month" &&
          new Date(date.start).getDate() === new Date(value).getDate()) ||
        (date.repeat === "week" &&
          new Date(date.start).getDay() === new Date(value).getDay()) ||
        date.repeat === "day"
    );
    return (
      <div className="events" style={{ whiteSpace: "nowrap" }}>
        {listData.map((item, index) => (
          <Flex
            key={item.content}
            style={{ backgroundColor: randomColor(index)[0] }}
          >
            <div
              style={{
                backgroundColor: randomColor(index)[1],
                minWidth: "5px",
              }}
            >
              &nbsp;
            </div>
            <p style={{ fontSize: "12px", color: randomColor(index)[1] }}>
              {item.title}
            </p>
          </Flex>
        ))}
      </div>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };
  const handleChange = () => {};
  return (
    <div id="pri-calendar">
      <Calendar
        value={date}
        cellRender={cellRender}
        onSelect={(e) => navigate(`/${e.toString()}`)}
        headerRender={({ value, type, onChange, onTypeChange }) => (
          <Flex
            className="flex-header"
            justify="space-between"
            align="center"
            style={{ padding: "5px 20px" }}
          >
            <Flex
              align="center"
              justify="space-between"
              style={{ width: "35%", minWidth: "250px" }}
            >
              <Button onClick={() => setDate(dayjs())}>Today</Button>
              <Flex>
                <Button
                  type="link"
                  onClick={() => setDate(date.add(-1, "months"))}
                  icon={<LeftOutlined />}
                  style={{ color: "#0F4C81" }}
                ></Button>
                <Button
                  type="link"
                  onClick={() => setDate(date.add(1, "months"))}
                  icon={<RightOutlined />}
                  style={{ color: "#0F4C81" }}
                ></Button>
              </Flex>
              <Typography.Text
                className="date-text"
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "#0F4C81",
                }}
              >{`${
                monthLongName[value.month()]
              }, ${value.year()}`}</Typography.Text>
            </Flex>
            <Select
              defaultValue="month"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: "day", label: "Day", disabled: true },
                { value: "month", label: "Month" },
                { value: "year", label: "Year", disabled: true },
              ]}
            />
          </Flex>
        )}
      />
    </div>
  );
}

export default PrimaryCalender;
