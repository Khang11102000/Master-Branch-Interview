import "./App.css";
import { Row, Col } from "antd";
import MinCalender from "./components/MinCalender";
import PrimaryCalender from "./components/PrimaryCalender";
import { useEffect, useState, useMemo } from "react";
import { data } from "./data";
import dayjs from "dayjs";
function App() {
  const [listEvents, setListEvents] = useState([]);
  const [date, setDate] = useState(dayjs());
  useEffect(() => {
    setListEvents(
      data.events.filter(({ start }) => start.getMonth() === date.month())
    );
  }, [date.month()]);

  const onSelect = (e) => {
    setDate(e);
  };
  return (
    <div className="App">
      <Row style={{ backgroundColor: "#5684AE" }}>
        <Col span={24} sm={8} style={{ padding: "10px" }}>
          <MinCalender
            events={listEvents.filter(
              ({ start }) => start.getDate() === date.date()
            )}
            date={date}
            setDate={setDate}
            onSelect={onSelect}
          ></MinCalender>
        </Col>
        <Col span={24} sm={16} style={{ padding: "10px" }}>
          {useMemo(() => {
            return <PrimaryCalender events={listEvents}></PrimaryCalender>;
          }, [listEvents])}
        </Col>
      </Row>
    </div>
  );
}

export default App;
