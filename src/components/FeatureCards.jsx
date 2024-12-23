import { Crop, FileImage, Ruler } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  {
    icon: Crop,
    title: 'Image Manipulation Tools',
    description: 'Crop, zoom, pan, and adjust brightness and contrast effortlessly.',
    link: '/image-manipulation'
  },
  {
    icon: FileImage,
    title: 'DICOM Support',
    description: 'Upload, view, and analyze DICOM images with metadata.',
    link: '/dicom-image-parser'
  },
  {
    icon: Ruler,
    title: 'Real-World Measurements',
    description: 'Convert pixel data into accurate real-world units. cm , mm , pixels etc.',
    link: '/real-world-measurements'
  },
]

export default function FeatureCards() {
  return (
    <section id="features" className="w-full py-12 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-rows-1 md:grid-rows-3 gap-8 hover:cursor-pointer">
          {features.map((feature, index) => (
            <Link to={`${feature.link}`} key={index}>
              <div
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            >
              <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              <button className='bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md m-1'>Explore</button>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

