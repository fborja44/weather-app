export const convertHPAToInHg = (hPa) => {
  const inHg = hPa / 33.863886666667;
  return inHg.toFixed(0); // Round to 0 decimal places
};
