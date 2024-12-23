// Enhanced Measurements Page with Real-World Scaling and Modern UI

'use client';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function MeasurementsPage() {
  const [measurementUnit, setMeasurementUnit] = useState("mm");
  const [measurements, setMeasurements] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [pixelSpacing, setPixelSpacing] = useState(1); // Default 1 pixel = 1 unit

  const handleAddMeasurement = () => {
    if (inputValue.trim()) {
      const realWorldValue = (parseFloat(inputValue.trim()) * pixelSpacing).toFixed(2);
      setMeasurements((prev) => [
        ...prev,
        { id: Date.now(), value: `${realWorldValue} ${measurementUnit}` },
      ]);
      setInputValue("");
    }
  };

  const handleRemoveMeasurement = (id) => {
    setMeasurements((prev) => prev.filter((measurement) => measurement.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-6 sm:px-10 relative">
      <Link
        to="/"
        className="absolute top-6 left-6 text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400 transition duration-300"
      >
        <ArrowLeft size={32} />
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-300 mb-6">
          Manage Measurements
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-10">
          Add, view, and manage your measurements effectively. Consider pixel spacing for real-world conversions.
        </p>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Measurement Unit:
          </label>
          <select
            value={measurementUnit}
            onChange={(e) => setMeasurementUnit(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
          >
            <option value="mm">Millimeters (mm)</option>
            <option value="cm">Centimeters (cm)</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Pixel Spacing (units per pixel):
          </label>
          <input
            type="number"
            step="0.01"
            value={pixelSpacing}
            onChange={(e) => setPixelSpacing(parseFloat(e.target.value) || 1)}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
            placeholder="e.g., 0.026 for 26 micrometers per pixel"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Enter Measurement (in pixels):
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300"
              placeholder="e.g., 250 pixels"
            />
            <button
              onClick={handleAddMeasurement}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 transition duration-300"
            >
              Add
            </button>
          </div>
        </div>

        {measurements.length > 0 && (
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
              Measurements List
            </h2>
            <ul className="space-y-2">
              {measurements.map((measurement) => (
                <li
                  key={measurement.id}
                  className="flex items-center justify-between px-4 py-2 border rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600"
                >
                  <span className="text-gray-700 dark:text-gray-300">
                    {measurement.value}
                  </span>
                  <button
                    onClick={() => handleRemoveMeasurement(measurement.id)}
                    className="text-red-500 hover:text-red-600 focus:outline-none"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
