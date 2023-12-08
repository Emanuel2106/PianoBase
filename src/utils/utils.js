export const getInitials = (text) => {
  const split = text.split(" ");

  if(split.length > 1) {
    const letters = `${split[0][0]}${split[1][0]}`;
    return `${letters.toUpperCase()}`;
  } else {
    const letters = text.substring(0,2);
    return `${letters.toUpperCase()}`;
  }
};

export const getImageExtension = (uri) => {
  const imgCopy = uri.slice();
  const extension = imgCopy.split("/").pop().split(".").pop();
  return extension;
};

export const formatLocateDate = (date) => {
  if(!date) return null;

  if(typeof date === "string") {
    date = Date.parse(date);
  }

  return date.toLocaleString("es-ES", {day: "numeric", month: "long", year: "numeric"});
};