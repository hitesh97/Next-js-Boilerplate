import React from 'react';

// import HeroWithContactform from '../components/HeroWithContactform';
// import MultiCards from '../components/MultiCards';
// import Pricing from '../components/Pricing';
import MembersList from '../components/bmuk/MembersList';
import MainLayout from '../layout/MainLayout';

const Index = () => {
  return (
    <MainLayout>
      {/* <HeroWithContactform /> */}
      {/** Three card section */}
      {/* <MultiCards gridSize={4} /> */}
      {/** Pricing section */}
      {/* <Pricing /> */}
      <MembersList />
    </MainLayout>
  );
};

export default Index;
