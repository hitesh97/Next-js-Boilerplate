/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

type ICardsProp = {
  gridSize: number;
};

const generateCards = (totalNoOfCards: number, gridSize: number) => {
  return [...Array(totalNoOfCards)].map((i) => {
    return (
      <div
        className={`w-full md:w-1/${gridSize} p-6 flex flex-col flex-grow flex-shrink`}
        // eslint-disable-next-line react/no-array-index-key
        key={`cardItem=${i}`}
      >
        <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <p className="w-full text-gray-600 text-xs md:text-sm px-6">
              xGETTING STARTED
            </p>
            <div className="w-full font-bold text-xl text-gray-800 px-6">
              Lorem ipsum dolor sit amet.
            </div>
            <p className="text-gray-800 text-base px-6 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </a>
        </div>
        <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="bg-gradient-to-r from-green-400 to-blue-500 mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transition hover:scale-105 duration-300 ease-in-out"
            >
              Action
            </button>
          </div>
        </div>
      </div>
    );
  });
};

const MultiCards = ({ gridSize }: ICardsProp) => {
  return (
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Title
        </h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
        </div>
        {generateCards(8, gridSize)}
      </div>
    </section>
  );
};
export default MultiCards;
