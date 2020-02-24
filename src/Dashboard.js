import React, { useState } from "react";
import { Table, Divider, Typography } from "antd";

import firebase from "firebase/app";
import "firebase/database";

const newColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Birthday",
    dataIndex: "birthday",
    key: "birthday"
  },
  {
    title: "Current Amount",
    dataIndex: "camount",
    key: "camount"
  },
  {
    title: "Pre Amount",
    dataIndex: "pbalances",
    key: "pbalances"
  },
  {
    title: "Total Balance",
    dataIndex: "tbalances",
    key: "tbalances"
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status"
  }
];

// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name",
//     key: "name",
//     render: text => <a href="https://google.com">{text}</a>
//   },
//   {
//     title: "Pre Balance",
//     dataIndex: "pbalances",
//     key: "pbalances",
//     render: pbalances => (
//       <span>
//         {pbalances.map(pbalance => {
//           let color = pbalance.length > 5 ? "red" : "green";
//           if (pbalance === 0) {
//             color = "green";
//           } else if (pbalance > 0) {
//             color = "red";
//           }
//           return (
//             <span style={{ color: color }} key={pbalance}>
//               {"Rs. " + pbalance.toUpperCase()}
//             </span>
//           );
//         })}
//       </span>
//     )
//   },
//   {
//     title: "Current Balance",
//     dataIndex: "camount",
//     key: "camount",
//     render: camount => (
//       <span>
//         {camount.map(amount => {
//           let color = amount.length > 5 ? "red" : "green";
//           if (amount === 0) {
//             color = "red";
//           } else if (amount < 0) {
//             color = "red";
//           }
//           return (
//             <span style={{ color: color }} key={amount}>
//               {"Rs. " + amount.toUpperCase()}
//             </span>
//           );
//         })}
//       </span>
//     )
//   },
//   {
//     title: "Total Balance",
//     dataIndex: "tbalances",
//     key: "tbalances",
//     render: tbalances => (
//       <span>
//         {tbalances.map(tbalance => {
//           let color = tbalance.length > 5 ? "red" : "green";
//           if (tbalance === 0) {
//             color = "red";
//           } else if (tbalance < 0) {
//             color = "red";
//           }
//           return (
//             <span style={{ color: color }} key={tbalance}>
//               {"Rs. " + tbalance.toUpperCase()}
//             </span>
//           );
//         })}
//       </span>
//     )
//   },
//   {
//     title: "Payment Type",
//     dataIndex: "pType",
//     key: "pType"
//   },
//   {
//     title: "Status",
//     key: "tags",
//     dataIndex: "tags",
//     render: tags => (
//       <span>
//         {tags.map(tag => {
//           let color = tag.length > 5 ? "red" : "green";
//           if (tag === "pending") {
//             color = "red";
//           } else if (tag === "paid") {
//             color = "green";
//           }
//           return (
//             <Tag color={color} key={tag}>
//               {tag.toUpperCase()}
//             </Tag>
//           );
//         })}
//       </span>
//     )
//   }
// ];

const { Title } = Typography;

// const data = [
//   {
//     key: "1",
//     name: "Ajay Kumar Singh",
//     birthday: "24 Jan 2019",
//     pbalances: ["0"],
//     tags: ["pending"],
//     camount: ["100"],
//     pType: "Cash",
//     tbalances: ["-100"]
//   },
//   {
//     key: "2",
//     name: "Ankur Kadiyan",
//     birthday: "30 Jan 2019",
//     pbalances: ["0"],
//     tags: ["Paid"],
//     camount: ["100"],
//     pType: "Cash",
//     tbalances: ["100"]
//   },
//   {
//     key: "3",
//     name: "Abhinav Saini",
//     birthday: "24 Jan 2019",
//     pbalances: ["100"],
//     tags: ["pending"],
//     camount: ["100"],
//     pType: "PayTM",
//     tbalances: ["-200"]
//   },
//   {
//     key: "4",
//     name: "Mohammed Sareef",
//     birthday: "05 Oct 1985",
//     pbalances: ["0"],
//     tags: ["Paid"],
//     camount: ["100"],
//     pType: "PayTM",
//     tbalances: ["100"]
//   },
//   {
//     key: "5",
//     name: "Monika Sharma",
//     birthday: "24 Jan 2019",
//     pbalances: ["200"],
//     tags: ["pending"],
//     camount: ["100"],
//     pType: "PayTM",
//     tbalances: ["-300"]
//   },
//   {
//     key: "6",
//     name: "Sanjeev",
//     birthday: "24 Jan 2019",
//     pbalances: ["100"],
//     tags: ["pending"],
//     camount: ["100"],
//     pType: "Cash",
//     tbalances: ["-200"]
//   },
//   {
//     key: "7",
//     name: "Lalit",
//     birthday: "24 Jan 2019",
//     pbalances: ["100"],
//     tags: ["pending"],
//     camount: ["100"],
//     pType: "PayTM",
//     tbalances: ["-200"]
//   },
//   {
//     key: "8",
//     name: "Gaurav Goyal",
//     birthday: "24 Jan 2019",
//     pbalances: ["300"],
//     tags: ["pending"],
//     camount: ["100"],
//     pType: "Cash",
//     tbalances: ["-400"]
//   }
// ];

function Dashboard() {
  const [dataObj, setDataObj] = useState();

  firebase
    .database()
    .ref()
    .child("team-member")
    .once("value", snap => {
      //console.log(snap.val());
      setDataObj(snap.val());
    });

  // rootRef.on("value", snap => {
  //   setDataObj([snap.val()]);
  //   console.log("Name: " + snap.val());
  //   //console.log("DataObj: " + dataObj.name);
  // });

  return (
    <React.Fragment>
      <Title>Dashboard</Title>
      <Divider />
      <Table columns={newColumns} dataSource={dataObj} size="small" />
    </React.Fragment>
  );
}

export default Dashboard;
