import React, { useState } from "react";
import DisplayBill from "../DisplayBill/DisplayBill";

const BillForm = () => {
  const [billData, setBillData] = useState([]);
  const allBill = [];
  const handleSubmitBtn = (event) => {
    event.preventDefault();
    const date = event.target.date.value;
    const amount = event.target.amount.value;
    const payment = event.target.payment.value;
    const remark = event.target.remark.value;
    const BillInfo = { date, amount, payment, remark };
    allBill.push(...billData, BillInfo);
    setBillData(allBill);
    event.target.reset();
  };
  console.log(billData);
  const handleCancelBtn = () => {
    setBillData([]);
  };
  return (
    <div className="max-w-2xl mx-auto mt-16 p-8 bg-gray-200">
      <h2 className="underline text-2xl font-bold mb-4">Receipt Details</h2>

      <form onSubmit={handleSubmitBtn}>
        <div className="flex flex-row justify-between gap-24 items-center mb-4">
          <p>
            Date<span className="text-red-500">*</span>
          </p>
          <input
            className="input input-bordered w-full max-w-xs"
            type="date"
            placeholder="Enter Date"
            name="date"
            required
          />
        </div>
        <div className="flex flex-row justify-between gap-24 items-center mb-4">
          <p>
            Amount<span className="text-red-500">*</span>
          </p>
          <input
            className="input input-bordered w-full max-w-xs"
            type="number"
            placeholder="Enter Amount (in INR)"
            name="amount"
            required
          />
        </div>
        <div className="flex flex-row justify-between gap-24 items-center mb-4">
          <p>
            Payment Mode<span className="text-red-500">*</span>
          </p>
          <select
            className="select select-bordered w-full max-w-xs"
            name="payment"
            id="payment"
            required
          >
            <option value="Cash">Cash</option>
            <option value="Paytm">Paytm</option>
          </select>
        </div>
        <div className="flex flex-row justify-between gap-24 items-center mb-4">
          <p>Remark</p>
          <input
            className="input input-bordered w-full max-w-xs"
            type="text"
            placeholder="Enter remark"
            name="remark"
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => handleSubmitBtn}
            className="btn bg-green-400 border-0 hover:bg-green-500"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="flex justify-end mt-2">
        <button
          onClick={() => handleCancelBtn([])}
          className="btn bg-red-400 border-0 hover:bg-red-500"
        >
          Cancel
        </button>
      </div>
      <DisplayBill billData={billData} />
    </div>
  );
};

export default BillForm;
