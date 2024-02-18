"use client";

import { FormEvent, useState } from "react";

export default function AddPayable() {
  const [value, setValue] = useState("");
  const [emissionDate, setEmissionDate] = useState("");
  const [assignorId, setAssignorId] = useState("");
  const [assignors, setAssignors] = useState([
    { id: "fba332ae-1bfc-4bbd-88bd-1f9e7f6379cc", name: "John Doe" },
  ]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const payable = {
      value: parseFloat(value),
      emissionDate,
      assignorId,
    };
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Add a Payable
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="value" className="sr-only">
                Value
              </label>
              <input
                id="value"
                name="value"
                type="number"
                step="0.01"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="emissionDate" className="sr-only">
                Emission Date
              </label>
              <input
                id="emissionDate"
                name="emissionDate"
                type="date"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={emissionDate}
                onChange={(e) => setEmissionDate(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="assignorId" className="sr-only">
                Assignor
              </label>
              <select
                id="assignorId"
                name="assignorId"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={assignorId}
                onChange={(e) => setAssignorId(e.target.value)}
              >
                <option value="">Select an assignor</option>
                {assignors.map((assignor) => (
                  <option key={assignor.id} value={assignor.id}>
                    {assignor.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Payable
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
