import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import bg from "../../assets/bg.jpg";
import API_BASE_URL from '../../config/api';

const WhistleBlowerButton = () => {
  const navigate = useNavigate();
  const [attachmentFile, setAttachmentFile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    telephone: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setAttachmentFile(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create FormData object
    const formDataToSend = new FormData();
    
    // Append all form fields
    formDataToSend.append('name', formData.name);
    formDataToSend.append('telephone', formData.telephone);
    formDataToSend.append('comment', formData.comment);
    
    // Append file if selected
    if (attachmentFile) {
      formDataToSend.append('attachmentFile', attachmentFile);
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/forms/whistle-blower`, {
        method: 'POST',
        body: formDataToSend
      });
      
      const data = await response.json();
      
      if (response.ok) {
        console.log('✅ Whistle blower report submitted:', data);
        alert(`Report submitted successfully! Report Number: ${data.data.reportNumber}\nKeep this number for tracking.`);
        setAttachmentFile(null);
        setFormData({
          name: '',
          telephone: '',
          comment: ''
        });
      } else {
        console.error('❌ Error:', data);
        alert(`Error: ${data.message || 'Failed to submit'}`);
      }
    } catch (error) {
      console.error('❌ Network error:', error);
      alert('Network error. Please ensure backend is running.');
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />

      {/* Full-page background */}
      <div
        className="min-h-screen bg-gray-100"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-700 to-green-800 pt-32 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Whistle Blower
            </h1>
            <p className="mt-4 text-white text-base md:text-lg max-w-3xl mx-auto">
              Report issues confidentially — provide details and upload evidence (optional).
            </p>
          </div>
        </div>

        {/* Form Container */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            {/* Form Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-teal-800">
                Whistle Blower Form
              </h2>
              <button
                onClick={() => navigate(-1)}
                className="text-gray-600 hover:text-green-700 transition text-sm font-medium"
              >
                ← Back
              </button>
            </div>

            <p className="text-sm text-gray-600 mb-8">
              If you have confidential information about a policy or compliance issue, please share details here. Upload files (PDF/JPG/PNG) as supporting evidence (optional).
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700"
                />
              </div>

              {/* Telephone Field */}
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2">
                  Telephone *
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  required
                  placeholder="Enter your telephone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700"
                />
              </div>

              {/* Comment Section */}
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2">
                  Comment *
                </label>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Please describe your concern in detail..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-gray-700 resize-none"
                />
              </div>

              {/* File Upload Area */}
              <div>
                <label className="block text-sm font-semibold text-green-800 mb-2">
                  Upload Evidence (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors bg-gray-50">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400 mb-3"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="text-green-700 font-medium mb-1">
                      {attachmentFile ? attachmentFile.name : 'Click to upload or drag and drop'}
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF, JPG, PNG — max 15MB
                    </p>
                  </label>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-green-800">Privacy Notice:</span> Your submission is encrypted and will be delivered directly to the CEO. We maintain strict confidentiality for all whistle blower reports.
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-200"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                    />
                  </svg>
                  Submit Application
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default WhistleBlowerButton;