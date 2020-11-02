import { memo } from 'react';

const Hero = () => {
  return (
    <main className="py-12 px-2 lg:py-32 lg:px-0">
      <div className="flex px-2">
        <div>
          <h1 className="text-lg font-hind">Hi, my name is Ramón Chancay</h1>
          <p className="text-3xl my-2 lg:w-4/6 font-sans lg:text-4xl">
            I’m a freelance web developer specializing in React & React Native.
          </p>
        </div>
      </div>
    </main>
  );
};

export default memo(Hero);
