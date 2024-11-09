import { Flex, Button, Typography, Input, DatePicker, Select } from "antd";
import React, { useState } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { createNewEvent } from "../../api/EventService";
const initialState = {
  title: "",
  start: new Date(),
  end: new Date(),
  repeat: "None",
  type: "Event",
  client: "",
};
const CreateEvent = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(initialState);

  const handleChangeInput = (value, name) => {
    setData({ ...data, [name]: value });
  };
  const handleSubmit = () => {
    createNewEvent(data).then((response) => alert(response.message));
  };
  return (
    <Flex
      vertical
      align="flex-start"
      justify="center"
      className="p-1"
      style={{ width: "50%", minWidth: "450px" }}
    >
      <Flex align="center" justify="center">
        <Button
          type="link"
          onClick={() => {
            navigate(-1);
          }}
          icon={<LeftOutlined />}
          style={{ color: "#0F4C81" }}
        ></Button>
        <Typography.Text style={{ fontSize: "28px" }}>
          Create New Event
        </Typography.Text>
      </Flex>
      <br />
      <label>Title</label>
      <Input
        name="title"
        placeholder="Add title"
        onChange={(e) => handleChangeInput(e.target.value, "title")}
      />
      <br />
      <label>Start/End Date</label>

      <Flex
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <DatePicker
          format="DD/MM/YYYY hh:mm A"
          onChange={(date, dateString) =>
            handleChangeInput(dateString, "start")
          }
          showTime
          style={{ width: "45%" }}
        />
        <Typography.Text>To</Typography.Text>
        <DatePicker
          format="DD/MM/YYYY hh:mm A"
          onChange={(date, dateString) => handleChangeInput(dateString, "end")}
          showTime
          style={{ width: "45%" }}
        />
      </Flex>
      <br />
      <label>Repeat</label>
      <Select
        name="repeat"
        defaultValue="None"
        onChange={(value) => handleChangeInput(value, "repeat")}
        options={[
          { value: "None", label: "None" },
          { value: "Day", label: "Day" },
          { value: "Week", label: "Week" },
          { value: "Month", label: "Month" },
          { value: "Year", label: "Year" },
        ]}
        style={{ width: "100%" }}
      />
      <br />

      <label>Type</label>
      <Select
        name="type"
        defaultValue="Event"
        onChange={(value) => handleChangeInput(value, "type")}
        options={[
          { value: "Event", label: "Event" },
          { value: "Appointment", label: "Appointment" },
        ]}
        style={{ width: "100%" }}
      />
      <br />

      {data.type === "Appointment" && (
        <>
          {" "}
          <label>Client</label>
          <Input
            placeholder="Add client"
            onChange={(e) => handleChangeInput(e.target.value, "client")}
          />
        </>
      )}
      <br />

      <Button onClick={handleSubmit} style={{ width: "100%" }}>
        Save
      </Button>
    </Flex>
  );
};

export default CreateEvent;
