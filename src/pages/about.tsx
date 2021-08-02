import React from 'react';

import MainLayout from '../layout/MainLayout';
import { useTitles } from '../lib/swr-hooks';

const About = () => {
  const { entries, isLoading } = useTitles();
  if (isLoading) return <div>Loading......</div>;
  return (
    <MainLayout>
      <section className="container mx-auto px-6">
        <table className="min-w-max w-full table-auto">
          <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Id</th>
              <th className="py-3 px-6 text-left">Code</th>
              <th className="py-3 px-6 text-left">Description</th>
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
                  {entry.Code}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {entry.Description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </MainLayout>
  );
};

export default About;
