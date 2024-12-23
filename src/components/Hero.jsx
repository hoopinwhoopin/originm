// Updated Hero Component with Buttons Styled for White/Dark Mode Transitions

import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="w-full py-20 bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out dark:bg-blue-800">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Transforming Medical Imaging Analysis
        </h1>
        <p className="text-lg md:text-xl mb-8 text-blue-100">
          Empower your diagnostics with cutting-edge tools for annotation and precision measurement.
        </p>
      
      </div>
    </section>
  );
}
