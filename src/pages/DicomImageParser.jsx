// Enhanced DICOM Parser Page with Modern UI and Dropzone

'use client';

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import * as dicomParser from 'dicom-parser';

export default function MedicalImageAnalysis() {
  const [file, setFile] = useState(null);
  const [dicomMetadata, setDicomMetadata] = useState(null);

  const onDrop = (acceptedFiles) => {
    const selectedFile = acceptedFiles[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = (event) => {
      const arrayBuffer = event.target.result;
      const byteArray = new Uint8Array(arrayBuffer);
      const dataSet = dicomParser.parseDicom(byteArray);

      // Extract metadata
      const patientName = dataSet.string('x00100010') || 'Unknown';
      const studyDate = dataSet.string('x00080020') || 'Unknown';
      setDicomMetadata({ patientName, studyDate });
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/dicom': ['.dcm'] },
    multiple: false,
  });

  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900 py-12 px-6 sm:px-10 relative">
      <Link
        to="/"
        className="absolute top-6 left-6 text-blue-600 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-400 transition duration-300"
      >
        <ArrowLeft size={32} />
      </Link>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-300 mb-6">
          Upload Your DICOM Image
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 text-center mb-10">
          Please upload a DICOM (.dcm) image file for analysis. Our tool will process and provide detailed metadata for your image.
        </p>

        <div
          {...getRootProps()}
          className={`p-8 border-2 rounded-lg text-center cursor-pointer transition duration-300 ease-in-out ${
            isDragActive
              ? 'border-blue-500 bg-blue-100 dark:bg-blue-800'
              : 'border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800'
          }`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p className="text-blue-500 dark:text-blue-300 font-medium">
              Drop your file here...
            </p>
          ) : (
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              Drag and drop your DICOM file here, or click to select one.
            </p>
          )}
        </div>

        {file && (
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Selected file: <span className="font-semibold">{file.name}</span>
            </p>
          </div>
        )}

        {dicomMetadata && (
          <div className="mt-6 bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">DICOM Metadata</h2>
            <p><strong>Patient Name:</strong> {dicomMetadata.patientName}</p>
            <p><strong>Study Date:</strong> {dicomMetadata.studyDate}</p>
          </div>
        )}
      </div>
    </div>
  );
}
