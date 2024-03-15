const formatDate = (data) => {
  const currentDate = new Date(data);
  const options = {
    day: "2-digit",
    month: "short",
    hour: "numeric",
    hour12: false,
  };

  let formattedDate = currentDate.toLocaleDateString("pt-BR", options);
  return formattedDate.replace(",", " às") + "hrs";
};

const randomColor = (colors) => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const darkColors = () => {
  const palette = [
    "#000000",
    "#800080",
    "#FF0000",
    "#008000",
    "#000080",
    "#FF8C00",
    "#006400",
  ];

  return randomColor(palette);
};

const lightColors = () => {
    const palette = [
      "#D3D3D3",
      "#87CEFA",
      "#90EE90",
      "#F5DEB3",
      "#FFB6C1",
      "#FFA07A",
      "#E6E6FA",
    ];
  
    return randomColor(palette);
  };

export {formatDate, randomColor, lightColors, darkColors};
