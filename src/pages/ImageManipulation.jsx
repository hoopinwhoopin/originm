'use client';

import React, { useState, useRef } from 'react';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const MedicalImageAnalysis = () => {
  const [image, setImage] = useState(null);
  const [tool, setTool] = useState(null);
  const [brightness, setBrightness] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const stageRef = useRef(null);
  const imageRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new window.Image();
        img.onload = () => setImage(img);
        img.src = event.target?.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const applyBrightness = (value) => {
    setBrightness(value);
    if (imageRef.current) {
      imageRef.current.cache();
      imageRef.current.filters([Konva.Filters.Brighten]);
      imageRef.current.brightness(value);
      imageRef.current.getLayer().batchDraw();
    }
  };

  const applyZoom = (value) => {
    setZoom(value);
  };

  const handleDragEnd = (e) => {
    setPosition({ x: e.target.x(), y: e.target.y() });
  };

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900 py-12 px-6 relative">
      {/* Back Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400 transition duration-300"
      >
        <ArrowLeft size={32} />
      </Link>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Upload Input */}
        <div className="flex flex-col items-center mb-6">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="px-4 py-3 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Tools */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={() => applyBrightness(brightness + 0.1)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform duration-300 hover:scale-105"
          >
            Increase Brightness
          </button>
          <button
            onClick={() => applyBrightness(brightness - 0.1)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform duration-300 hover:scale-105"
          >
            Decrease Brightness
          </button>
          <button
            onClick={() => applyZoom(zoom + 0.1)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform duration-300 hover:scale-105"
          >
            Zoom In
          </button>
          <button
            onClick={() => applyZoom(zoom - 0.1)}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-transform duration-300 hover:scale-105"
          >
            Zoom Out
          </button>
        </div>

        {/* Stage */}
        <div className="bg-gray-200 border rounded">
          {image && (
            <Stage
              width={800}
              height={600}
              scaleX={zoom}
              scaleY={zoom}
              x={position.x}
              y={position.y}
              draggable
              onDragEnd={handleDragEnd}
              ref={stageRef}
            >
              <Layer>
                <KonvaImage
                  ref={imageRef}
                  image={image}
                  width={800}
                  height={600}
                  filters={[Konva.Filters.Brighten]}
                />
              </Layer>
            </Stage>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicalImageAnalysis;
