export const compareDayAndMonth = (date1, date2) => {
  if (
    date1.getDate() === date2.getDate &&
    date1.getMonth() === date2.getMonth()
  )
    return true;
  return false;
};

export const getCurrentDate = (date) => {
  const day = ("0" + date.getDate()).slice(-2);
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
export const getCurrentTime = (date) => {
  const hour = ("0" + date.getHours()).slice(-2);
  const min = ("0" + date.getMinutes()).slice(-2);
  return `${hour}:${min}`;
};
