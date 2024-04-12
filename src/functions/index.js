export const currentCoordinates = (setCoordinates) => {
  navigator.geolocation.getCurrentPosition(
    (item) => {
      const coordinates = {
        latitude: item.coords.latitude.toFixed(2),
        longitude: item.coords.longitude.toFixed(2),
      };
      setCoordinates(coordinates);
    },
    (error) => {
      console.log(error);
    }
  );
};
