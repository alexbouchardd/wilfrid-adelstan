const font_size = 18;
const spacing_unit = 4;

export const getPixelToRem = (pixel) => `${pixel / font_size}rem`;
export const getSpacing = (multiple) => getPixelToRem(multiple * spacing_unit);

const theme = {
  font_size: `${font_size}px`,
  border: '1px solid #F2F2F2',
  colors: {
    dark: "black",
    primary: "#AC7E25",
    light_primary: '#f2ebde',
    white: "white",
  },
};

export default theme;
