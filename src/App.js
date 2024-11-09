import "./App.css";
import { Row, Col } from "antd";
import MinCalender from "./components/MinCalender";
import PrimaryCalender from "./components/PrimaryCalender";
import { useEffect, useState, useMemo } from "react";
import dayjs from "dayjs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateEvent from "./components/CreateEvent";
import { getEventInMonth } from "./api/EventService";
function App() {
  const [listEvents, setListEvents] = useState([]);
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    getEventInMonth(new Date(date).getMonth()).then((response) => {
      setListEvents(response);
    });
  }, [date.month()]);

  const onSelect = (e) => {
    setDate(e);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <Row style={{ backgroundColor: "#5684AE" }}>
                  <Col span={24} sm={8} style={{ padding: "10px" }}>
                    <MinCalender
                      events={listEvents.filter(
                        ({ start }) => new Date(start).getDate() === new Date(date).getDate()
                      )}
                      date={date}
                      setDate={setDate}
                      onSelect={onSelect}
                    ></MinCalender>
                  </Col>
                  <Col span={24} sm={16} style={{ padding: "10px" }}>
                    {useMemo(() => {
                      return (
                        <PrimaryCalender
                          events={listEvents}
                          date={date}
                          setDate={setDate}
                        ></PrimaryCalender>
                      );
                    }, [listEvents])}
                  </Col>
                </Row>
              }
            />
            <Route path=":date" element={<CreateEvent></CreateEvent>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
