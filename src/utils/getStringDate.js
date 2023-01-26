export default function getStringDate(date) {
    const options = { day: "2-digit", month: "2-digit", year: "2-digit" };
    const result = date
      ? new Date(date).toLocaleDateString("ru-RU", options)
      : "--.--.--";
    return result;
  };