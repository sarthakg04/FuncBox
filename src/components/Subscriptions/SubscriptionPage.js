import React from "react";
import Navbar from "../Navbar/Navbar";
import "../Subscriptions/SubscriptionPage.css";
function SubscriptionPage() {
  const data = [
    {
      plan: "basic",
      price: "999",
      payment: "success",
      date: new Date().toUTCString(),
      std: 4,
      boxCode: 13209,
    },
    {
      plan: "deluxe",
      price: "1499",
      payment: "success",
      date: new Date().toUTCString(),
      std: 4,
      boxCode: 13209,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="subscriptions">
        <h1 className="subs_header">My Subscriptions</h1>
        <table className="subs_table">
          <tr>
            <th className="plans_column">Plans</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Standard</th>
            <th>Box Code</th>
            <th>Payment Status</th>
          </tr>
          {data.map((val, i) => (
            <tr>
              <td>
                {i + 1}. {val.plan.toUpperCase()}
              </td>
              <td>₹{val.price}</td>
              <td>{val.date}</td>
              <td>{val.std}</td>
              <td>{val.boxCode}</td>
              <td className={val.payment === "success" ? "green" : "red"}>
                {val.payment}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default SubscriptionPage;
