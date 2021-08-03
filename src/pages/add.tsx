/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

import MainLayout from '../layout/MainLayout';

const Index = () => {
  return (
    <MainLayout>
      <section className="container mx-auto px-6 mb-20">
        <div>Add new member</div>
        <div className="container mx-auto flex flex-wrap">
          <div className="w-full md:w-1/2 pr-2">
            <label className="block mt-6">
              <span className="text-gray-700">Title</span>
              <select
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
              >
                <option>Select One</option>
                <option>Mr</option>
                <option>Mrs</option>
                <option>Dr</option>
              </select>
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Surname</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">First name</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Middle name</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Father&apos;s name</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Email address</span>
              <input
                type="email"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder="john@example.com"
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Birth year</span>
              <input
                type="number"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Mosal</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Profession</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
              />
            </label>
          </div>
          <div className="w-full md:w-1/2 pl-2">
            <label className="block mt-6">
              <span className="text-gray-700">Address line 1</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Address line 2</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Town</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">County</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Post Code</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Telephone No.</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Mobile No.</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
              />
            </label>
            <div className="grid grid-cols-2 gap-2">
              <label className="block mt-6">
                <span className="text-gray-700">Send Newsletter?</span>
                <input type="checkbox" className="mt-0 mx-4" />
              </label>
              <label className="block mt-6">
                <span className="text-gray-700">Publish Directory?</span>
                <input type="checkbox" className="mt-0 mx-4" />
              </label>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-wrap flex-row-reverse bg-gray-50 p-4 m-4">
          <label className="block">
            <button
              type="button"
              className="py-2 px-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white text-lg"
            >
              Save
            </button>
          </label>
          <label className="block">
            <button
              type="button"
              className="py-2 px-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white text-lg mx-2"
            >
              Cancel
            </button>
          </label>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
