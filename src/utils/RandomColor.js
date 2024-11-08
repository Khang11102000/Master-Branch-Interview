export const randomColor = (index) => {
    if (index % 3 === 0) {
      return ["#FFE4C8", "#0F4C81", "#f5f5f5"];
    } else if (index % 2 === 0) return ["#5684AE", "#E4F6ED", "#0F4C81"];
    return ["#0F4C81", "#F9BE81", "#0F4C81"];
  };