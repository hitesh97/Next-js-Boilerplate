/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import Link from 'next/link';

import { useHeadMembers } from '../../lib/swr-hooks';

const DeleteMember = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  );
};
const EditDetails = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      />
    </svg>
  );
};
const ShowDetails = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
};

const MembersList = () => {
  const { entries, isLoading } = useHeadMembers();
  if (isLoading) return <div>Loading......</div>;

  return (
    <section className="container mx-auto px-6">
      <div className="flex flex-wrap flex-row justify-between">
        <div className="py-3 px-6 text-left">Members List</div>
        <div className="py-3 px-6 text-left">
          <Link href="/add" passHref>
            <button
              type="button"
              className="py-2 px-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white text-lg"
            >
              Add new
            </button>
          </Link>
        </div>
      </div>

      <table className="min-w-max w-full table-auto">
        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Id</th>
            <th className="py-3 px-6 text-left">Last Name</th>
            <th className="py-3 px-6 text-left">First Name</th>
            <th className="py-3 px-6 text-left">Middle Name</th>
            <th className="py-3 px-6 text-left">Fathers Name</th>
            <th className="py-3 px-6 text-left">Email Address</th>
            <th className="py-3 px-6 text-left">Post Code</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {entries.map((entry) => (
            <tr
              key={entry.Id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {entry.Id}
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {entry.Surname}
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {entry.FirstName}
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {entry.MiddleName}
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {entry.FathersName}
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {entry.EmailAddress}
              </td>
              <td className="py-3 px-6 text-left whitespace-nowrap">
                {entry.Postcode}
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex item-center justify-center">
                  <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                    <ShowDetails />
                  </div>
                  <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                    <EditDetails />
                  </div>
                  <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                    <DeleteMember />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default MembersList;
