import React from "react";

const BillForm = () => {
  const handleSubmitBtn = (event) => {
    event.preventDefault();
    const date = event.target.date.value;
    const amount = event.target.amount.value;
    const payment = event.target.payment.value;
    const remark = event.target.remark.value;

    console.log(date, amount, payment, remark);
    event.target.reset();
  };
  const handleCancelBtn = (event) => {
    event.preventDefault();
    event.target.reset();
  };
  return (
    <div className="max-w-2xl mx-auto mt-24 p-8 bg-gray-200">
      <h2 className="underline text-2xl font-bold">Receipt Details</h2>

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

        <div className="flex justify-end gap-x-16 mt-8">
          <button
            onClick={() => handleCancelBtn}
            className="btn bg-red-400 border-0 hover:bg-red-500"
          >
            Cancel
          </button>
          <button
            onClick={() => handleSubmitBtn}
            className="btn bg-green-400 border-0 hover:bg-green-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillForm;
