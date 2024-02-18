"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PayableDetails() {
  const params = useParams<{ slug: string }>();

  const [payable, setPayable] = useState({
    id: 1,
    value: 100,
    issueDate: "2022-01-01",
    assignor: { id: "1", name: "John Doe" },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Payable Details
            </h3>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">ID</dt>
                <dd className="mt-1 text-sm text-gray-900">{payable.id}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Value</dt>
                <dd className="mt-1 text-sm text-gray-900">{payable.value}</dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">
                  Issue Date
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {payable.issueDate}
                </dd>
              </div>
              <div className="sm:col-span-1">
                <dt className="text-sm font-medium text-gray-500">Assignor</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <Link
                    className="text-indigo-600 hover:text-indigo-500"
                    href={`/assignor/${payable.assignor.id}`}
                  >
                    {payable.assignor.name}
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
