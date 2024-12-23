// Updated HowItWorks Component for Better UI

import { Upload, Search, FileOutput } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload',
   
  },
  {
    icon: Search,
    title: 'Analyze',
   
  },
  {
    icon: FileOutput,
    title: 'Download',
  
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          Simple 3 Steps 
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
            >
              <div className="flex justify-center items-center mb-6 w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full shadow-lg">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
