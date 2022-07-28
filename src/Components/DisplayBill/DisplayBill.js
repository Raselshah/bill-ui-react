import React from "react";

const DisplayBill = ({ billData }) => {
  return (
    <div>
      <h2 className="text-center text-green-400 mt-6 text-lg">Your Bill</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Remark</th>
            </tr>
          </thead>
          <tbody>
            {billData.map((bill, index) => (
              <>
                <tr key={index}>
                  <th>{bill.date}</th>
                  <td>{bill.amount}</td>
                  <td>{bill.payment}</td>
                  <td>{bill?.remark}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DisplayBill;
