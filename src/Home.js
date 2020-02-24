import React from "react";
import { Divider, Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const PageTitle = styled.h1`
  color: black;
  padding: 6px 6px 6px 20px;
  background-color: #f2f2f2;
  font-size: 2em;
`;

const LiTag = styled.li`
  list-style: none;
`;

const items = [
  { id: 1, name: "Mohammed Sareef", dob: "05 Oct 1985" },
  { id: 2, name: "Ajay Kumar Singh", dob: "05 Oct 1985" },
  { id: 3, name: "Gaurav Goyal", dob: "05 Oct 1985" },
  { id: 4, name: "Ankur Kadiyan", dob: "05 Oct 1985" },
  { id: 5, name: "Lalit Pratap Singh", dob: "05 Oct 1985" }
];

function List({ items, renderItem }) {
  return <ul>{items.map(renderItem)}</ul>;
}

List.defaultProps = {
  renderItem: item => (
    <LiTag key={item.id}>
      <PageTitle>
        {item.name} - {item.dob}
      </PageTitle>
    </LiTag>
  )
};

function Dashboard() {
  return (
    <>
      <Title>Home</Title>
      <Divider />
      <h1>Upcoming Birthday List</h1>
      <List items={items} />
    </>
  );
}

export default Dashboard;
