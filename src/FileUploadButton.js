import React from 'react';
import './FileUploadButton.css';

const FileUploadButton = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('Selected file:', file.name);
    }
  };

  return (
    <div className="file-upload-button">
      <label htmlFor="file-upload" className="custom-file-upload">
        upload your Resume
      </label>
      <input id="file-upload" type="file" onChange={handleFileChange} />
    </div>
  );
};

export default FileUploadButton;
