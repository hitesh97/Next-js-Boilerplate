/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ReactNode } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { Meta } from './Meta';

type IMainProps = {
  children: ReactNode;
};

const MainLayout = (props: IMainProps) => {
  return (
    <div>
      <Meta title="eCommerce site" description="eCommerce site using nextJs" />
      <Header />
      <main className="mt-12 lg:mt-32">{props.children}</main>
      <Footer />
    </div>
  );
};
export default MainLayout;
