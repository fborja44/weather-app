export const convertDegreesToCardinal = (degrees) => {
  // Define the cardinal directions and their corresponding degree ranges
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
  const degreeRanges = [0, 45, 90, 135, 180, 225, 270, 315, 360];

  // Adjust the degrees to fall within the range of 0 to 360
  degrees = (degrees + 360) % 360;

  // Find the index of the degree range that encompasses the given degrees
  const index = degreeRanges.findIndex(
    (range, i) => degrees >= range && degrees < degreeRanges[i + 1]
  );

  // Return the corresponding cardinal direction
  return directions[index];
};
