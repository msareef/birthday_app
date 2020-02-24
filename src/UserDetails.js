import React from "react";
import { Divider, Typography } from "antd";

const { Title } = Typography;

function UserDetails() {
  return (
    <React.Fragment>
      <Title>User Details</Title>
      <Divider />
      <h1>User Details</h1>
    </React.Fragment>
  );
}

export default UserDetails;
