import { GET_DRIVERS } from "./types";
import { driversRef } from "../firebase";

export const getDrivers = () => {
  const drivers = [];
  driversRef.on("value", snapshot => {
    snapshot.forEach(driver => {
      drivers.push(driver.val());
    });
  });
  return {
    type: GET_DRIVERS,
    payload: drivers
  };
};
