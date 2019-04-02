import React, { useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { connect } from "react-redux";
import { getDrivers } from "../actions/driverActions";

const Drivers = ({ drivers, getDrivers }) => {
  useEffect(async () => {
    await getDrivers();
  }, []);
  return (
    <Container>
      <h1 className="text-center mt-5">Formula 1 Drivers</h1>
      {drivers.map(driver => console.log(driver))}
    </Container>
  );
};

const mapStateToProps = store => ({
  drivers: store.formula1.drivers
});

export default connect(
  mapStateToProps,
  { getDrivers }
)(Drivers);
