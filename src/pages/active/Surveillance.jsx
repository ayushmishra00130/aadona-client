import React from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const Surveillance = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen pt-20 px-4">
        <div className="container mx-auto py-12">
          <h1 className="text-4xl font-bold text-center mb-8">Surveillance Solutions</h1>
          <p className="text-center text-gray-600 mb-12">
            Explore our IP cameras, network video recorders (NVRs), and video analytics solutions.
          </p>
          {/* Add your surveillance product content here */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Surveillance
