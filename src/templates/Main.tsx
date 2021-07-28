/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ReactNode } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroWithContactform from '../components/HeroWithContactform';
import MultiCards from '../components/MultiCards';
import Pricing from '../components/Pricing';

// import Link from 'next/link';

// import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  return (
    <div>
      {props.meta}
      <Header />
      <main className="mt-12 lg:mt-32">
        <HeroWithContactform />
        {/** Three card section */}
        <MultiCards gridSize={4} />
        {/** Pricing section */}
        <Pricing />

        {props.children}
        {/** Footer */}
        <Footer />
      </main>
    </div>
  );
};
export { Main };
