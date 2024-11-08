import { Badge, Calendar, Flex } from "antd";
import { getCurrentDate } from "../../utils/CompareDate";
import "./PrimaryCalendar.css";
import { randomColor } from "../../utils/RandomColor";

const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
function PrimaryCalender({ events }) {
  console.log("re-render", events);
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = events.filter(
      (date) =>
        getCurrentDate(new Date(date.start)) === getCurrentDate(new Date(value))
    );
    return (
      <div className="events" style={{ whiteSpace: "nowrap" }}>
        {listData.map((item, index) => (
          <Flex
            key={item.content}
            style={{ backgroundColor: randomColor(index)[0] }}
          >
            <div
              style={{ backgroundColor: randomColor(index)[1], minWidth: "5px" }}
            >&nbsp;</div>
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
  return (
    <div id="pri-calendar">
      <Calendar cellRender={cellRender} />
    </div>
  );
}

export default PrimaryCalender;
