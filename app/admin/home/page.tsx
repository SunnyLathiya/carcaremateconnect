"use client"
import React, { useState } from 'react'

const page: React.FC = () => {
    const [orders, setOrders] = useState<any[]>([]);

    
  // const getCompletedOrders = () => {
  //   AdminOrders.findCompletedOrders()
  //     .then((res) => {
  //       setOrders(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getCompletedOrders();
  // }, []);


  return (
    <div style={{marginTop:"80px", marginBottom:"20px"}}>
    <hr />
    <div style={{marginTop:"80px", textAlign: "center"}}>

    <h1>WELCOME ADMIN</h1>
    <h1>
      Your Total Earnings: &#8377;
      {orders
        .map((order) => order.servicePrice)
        .reduce((prev, next) => prev + next, 0)}
    </h1>
    <hr />
    </div>
  </div>
  )
}

export default page
