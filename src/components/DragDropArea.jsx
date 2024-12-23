// DragDropArea with Enhanced UI for Modern Design

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import MetadataDisplay from './MetaDataDisplay';
import toast from 'react-hot-toast';

export default function DragDropArea() {
  const [file, setFile] = useState(null);
  const [metadata, setMetadata] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/dicom': ['.dcm'] },
    multiple: false,
  });

  const uploadFile = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('dicomFile', file);

    try {
      const response = await axios.post(
        'https://originmedical-2.onrender.com/v1/api/dicom/upload',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      setMetadata(response.data.metadata);
      if (response.status == 200) {
        toast.success('File uploaded successfully and extracted metadata');
      } else {
        toast.error('Failed to upload file');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="mt-8">
      <div
        {...getRootProps()}
        className={`p-10 border-2 rounded-lg text-center cursor-pointer shadow-lg transition duration-300 ease-in-out ${
          isDragActive
            ? 'border-blue-600 bg-blue-50 dark:border-blue-400 dark:bg-gray-800'
            : 'border-gray-300 bg-gray-100 dark:border-gray-700 dark:bg-gray-900'
        } dark:text-gray-200`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p className="text-blue-600 dark:text-blue-400 font-medium">
            Drop the DICOM file here...
          </p>
        ) : (
          <p className="text-gray-700 dark:text-gray-300 font-medium">
            Drag and drop a DICOM file here, or click to select a file
          </p>
        )}
      </div>
      {file && (
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Selected file: {file.name}
          </p>
          <div className="flex justify-center mt-4 space-x-6">
            <button
              onClick={uploadFile}
              className="px-6 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-full hover:from-blue-500 hover:to-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-600 dark:focus:ring-blue-400 shadow-md transform hover:scale-105 transition-all"
            >
              Upload & Extract Metadata
            </button>
            <button
              className="px-6 py-3 text-gray-700 bg-gray-300 rounded-full hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-500 dark:text-gray-900 dark:bg-gray-600 dark:hover:bg-gray-500 shadow-md transform hover:scale-105 transition-all"
            >
              Reset
            </button>
          </div>
        </div>
      )}
      {metadata && <MetadataDisplay metadata={metadata} />}
    </div>
  );
}
