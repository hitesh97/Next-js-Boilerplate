/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import MainLayout from '../layout/MainLayout';

// import { IMember }from '../mssql/member';

const Index = () => {
  const [Title, setTitle] = useState('');
  const [Surname, setSurname] = useState('');
  const [Firstname, setFirstname] = useState('');
  const [Middlename, setMiddlename] = useState('');
  const [FathersName, setFathersName] = useState('');
  const [EmailAddress, setEmailAddress] = useState('');
  const [BirthYear, setBirthYear] = useState('');
  const [Mosal, setMosal] = useState('');
  const [Profession, setProfession] = useState('');
  const [AddressLine1, setAddressLine1] = useState('');
  const [AddressLine2, setAddressLine2] = useState('');
  const [Town, setTown] = useState('');
  const [County, setCounty] = useState('');
  const [PostCode, setPostCode] = useState('');
  const [TelNo, setTelNo] = useState('');
  const [MobileNo, setMobileNo] = useState('');
  const [SendNewsletter, setSendNewsletter] = useState(false);
  const [PublishInDirectory, setPublishInDirectory] = useState(false);

  console.log(Surname);
  console.log(Firstname);
  console.log(Middlename);
  console.log(FathersName);
  console.log(EmailAddress);
  console.log(BirthYear);
  console.log(Mosal);
  console.log(Profession);
  console.log(AddressLine1);
  console.log(AddressLine2);
  console.log(Town);
  console.log(County);
  console.log(PostCode);
  console.log(TelNo);
  console.log(MobileNo);
  console.log(SendNewsletter);
  console.log(PublishInDirectory);

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
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                  setTitle(event.target.value)
                }
              >
                <option>Select One</option>
                <option selected={Title === 'Mr'}>Mr</option>
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
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSurname(event.target.value)
                }
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">First name</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setFirstname(event.target.value)
                }
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Middle name</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setMiddlename(event.target.value)
                }
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Father&apos;s name</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setFathersName(event.target.value)
                }
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Email address</span>
              <input
                type="email"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder="john@example.com"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setEmailAddress(event.target.value)
                }
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Birth year</span>
              <input
                type="number"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setBirthYear(event.target.value)
                }
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Mosal</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setMosal(event.target.value)
                }
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Profession</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setProfession(event.target.value)
                }
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
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setAddressLine1(event.target.value)
                }
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Address line 2</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setAddressLine2(event.target.value)
                }
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Town</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setTown(event.target.value)
                }
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">County</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setCounty(event.target.value)
                }
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Post Code</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setPostCode(event.target.value)
                }
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Telephone No.</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setTelNo(event.target.value)
                }
              />
            </label>
            <label className="block mt-6">
              <span className="text-gray-700">Mobile No.</span>
              <input
                type="text"
                className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                placeholder=""
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setMobileNo(event.target.value)
                }
              />
            </label>
            <div className="grid grid-cols-2 gap-2">
              <label className="block mt-6">
                <span className="text-gray-700">Send Newsletter?</span>
                <input
                  type="checkbox"
                  className="mt-0 mx-4"
                  checked={SendNewsletter === true}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setSendNewsletter(event.target.checked)
                  }
                />
              </label>
              <label className="block mt-6">
                <span className="text-gray-700">Publish Directory?</span>
                <input
                  type="checkbox"
                  className="mt-0 mx-4"
                  checked={PublishInDirectory === true}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setPublishInDirectory(event.target.checked)
                  }
                />
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
