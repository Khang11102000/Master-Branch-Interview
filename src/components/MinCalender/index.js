import { Flex, Calendar, Divider, Row, Button, Col, Typography } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import Card from "antd/es/card/Card";
import UpcomingEvent from "./UpcomingEvent";
import EventCard from "./EventCard";
import { monthShortName } from "../../utils/ShortMonth";
import { getCurrentTime } from "../../utils/CompareDate";
const { Text } = Typography;

function MinCalender({ events, onSelect, setDate, date }) {
  return (
    <Card style={{ padding: "0px 10px" }}>
      <Flex vertical>
        <Calendar
          value={date}
          fullscreen={false}
          onSelect={onSelect}
          headerRender={({ value, type, onChange, onTypeChange }) => (
            <Flex justify="center" align="center" className="p-1">
              <Button
                type="link"
                onClick={() => setDate(date.add(-1, "months"))}
                icon={<LeftOutlined />}
                style={{ color: "#0F4C81" }}
              ></Button>
              <Text style={{ color: "#0F4C81", fontWeight: "bold" }}>{`${
                monthShortName[value.month()]
              }, ${value.year()}`}</Text>
              <Button
                type="link"
                onClick={() => setDate(date.add(1, "months"))}
                icon={<RightOutlined />}
                style={{ color: "#0F4C81" }}
              ></Button>
            </Flex>
          )}
        />

        <Divider />
        <UpcomingEvent date={date}></UpcomingEvent>
        {/*Need call api */}
        {Array.isArray(events) &&
          events.map((item, index) => (
            <EventCard
              key={'k' + index}
              index={index}
              title={item.title}
              duration={`${getCurrentTime(item.start)} - ${getCurrentTime(
                item.end
              )} GMT+${new Date(item.start).getUTCDate()}`}
              type={item.type}
              client={item.client}
              clientAvatar={item.clientAvatar}
            ></EventCard>
          ))}
      </Flex>
    </Card>
  );
}

export default MinCalender;
