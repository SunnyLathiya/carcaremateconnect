// import React from 'react'

// const page = () => {
//   return (
//     <div style={{position:"relative",width:"88%",overflow:"hidden",backgroundColor:"green", top:"81px", left:"11.5%", zIndex:"-1"}}>
//       <p></p>
//     </div>
//   )
// }

// export default page

"use client"
import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
// import MechanicOrders from "../../../services/member/Mechanic/Mechanic_Orders";
// import AuthService from "../../../services/member/auth_service";

function FindOrders() {
  const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const mechanic = AuthService.getCurrentMechanic();
//     MechanicOrders.getInProcessOrders(mechanic.userId)
//       .then((response) => {
//         setOrders(response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

  return (
    <div style={{position:"relative",width:"88%",overflow:"hidden",backgroundColor:"green", top:"81px", left:"11.5%", zIndex:"-1"}}>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>OrderId</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Car Name</TableCell>
            <TableCell>Car Number</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Service Name</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

            <TableRow key={1}>
              <TableCell>777</TableCell>
              <TableCell>sunny</TableCell>
              <TableCell>BMW</TableCell>
              <TableCell>0701</TableCell>
              <TableCell>surat</TableCell>
              <TableCell>full service</TableCell>
              <TableCell>700</TableCell>
              <TableCell>accept</TableCell>
            </TableRow>
            <TableRow key={1}>
              <TableCell>777</TableCell>
              <TableCell>sunny</TableCell>
              <TableCell>BMW</TableCell>
              <TableCell>0701</TableCell>
              <TableCell>surat</TableCell>
              <TableCell>full service</TableCell>
              <TableCell>700</TableCell>
              <TableCell>accept</TableCell>
            </TableRow>
            <TableRow key={1}>
              <TableCell>777</TableCell>
              <TableCell>sunny</TableCell>
              <TableCell>BMW</TableCell>
              <TableCell>0701</TableCell>
              <TableCell>surat</TableCell>
              <TableCell>full service</TableCell>
              <TableCell>700</TableCell>
              <TableCell>accept</TableCell>
            </TableRow>
            <TableRow key={1}>
              <TableCell>777</TableCell>
              <TableCell>sunny</TableCell>
              <TableCell>BMW</TableCell>
              <TableCell>0701</TableCell>
              <TableCell>surat</TableCell>
              <TableCell>full service</TableCell>
              <TableCell>700</TableCell>
              <TableCell>accept</TableCell>
            </TableRow>
            <TableRow key={1}>
              <TableCell>777</TableCell>
              <TableCell>sunny</TableCell>
              <TableCell>BMW</TableCell>
              <TableCell>0701</TableCell>
              <TableCell>surat</TableCell>
              <TableCell>full service</TableCell>
              <TableCell>700</TableCell>
              <TableCell>accept</TableCell>
            </TableRow>
            <TableRow key={1}>
              <TableCell>777</TableCell>
              <TableCell>sunny</TableCell>
              <TableCell>BMW</TableCell>
              <TableCell>0701</TableCell>
              <TableCell>surat</TableCell>
              <TableCell>full service</TableCell>
              <TableCell>700</TableCell>
              <TableCell>accept</TableCell>
            </TableRow>
            <TableRow key={1}>
              <TableCell>777</TableCell>
              <TableCell>sunny</TableCell>
              <TableCell>BMW</TableCell>
              <TableCell>0701</TableCell>
              <TableCell>surat</TableCell>
              <TableCell>full service</TableCell>
              <TableCell>700</TableCell>
              <TableCell>accept</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default FindOrders;

