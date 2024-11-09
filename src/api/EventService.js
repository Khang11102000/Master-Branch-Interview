import { message } from "antd";
import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const baseRequest = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  // headers: {
  //     'Content-type': 'application/json',
  // },
});
export const getEventInMonth = async (month) => {
  const result = await axios.get(`${BASE_URL}/events`);
  return result.data.filter(
    (item) =>
      new Date(item.start).getMonth() === month ||
      item.repeat === "month" ||
      item.repeat === "day" ||
      item.repeat === "week"
  );
};
export const getEventInDate = async (date) => {
  const result = axios.get(`${BASE_URL}/events`);
  return result;
};
export const createNewEvent = async (payload) => {
  try {
    const result = await axios.post(`${BASE_URL}/events`, payload);
    return { ...result, message: "Success" };
  } catch (error) {
    return { ...error, message: "Success" };
  }
};
