import React from 'react';
import hero from '../assets/hero1.png';
import switches from '../assets/switches.png'
import industrial from '../assets/industrial.png'
import wireless from '../assets/wireless.png'
import cloud from '../assets/cloud.png'
import firewall from '../assets/firewall.png'
import fiber from '../assets/fiber.png'

// Updated Product data with AADONA Product Categories (12 products to match available images)
const products = [
  // Active Products
  {
    id: 1,
    title: "Wireless Access Points and Controllers",
    description: "Secure and fast wireless networking for enterprises and smart cities.",
    imageUrl: wireless,
    category: "Active Products"
  },
  {
    id: 2,
    title: "Network Switches",
    description: "Reliable and scalable switching solutions for SMB to Enterprise networks.",
    imageUrl: switches,
    category: "Active Products"
  },
  {
    id: 3,
    title: "Industrial Switches",
    description: "Durable, high-performance switches built for critical industrial environments.",
    imageUrl: industrial,
    category: "Active Products"
  },
  {
    id: 4,
    title: "UTM and Firewalls",
    description: "Next-generation security to protect your network from advanced threats and intrusions.",
    imageUrl: firewall,
    category: "Active Products"
  },
  {
    id: 5,
    title: "IP Cameras",
    description: "Advanced surveillance cameras for comprehensive security monitoring.",
    imageUrl: cloud,
    category: "Active Products"
  },
  {
    id: 6,
    title: "SFP Modules and Media Converters",
    description: "High-speed and reliable fiber transceivers for long-distance data transmission.",
    imageUrl: fiber,
    category: "Active Products"
  },
  {
    id: 7,
    title: "Surveillance Switches",
    description: "Specialized switches designed for IP surveillance systems.",
    imageUrl: switches,
    category: "Active Products"
  },
  {
    id: 8,
    title: "Network Attached Storages",
    description: "Centralized storage solutions for enterprise data management.",
    imageUrl: cloud,
    category: "Active Products"
  },
  {
    id: 9,
    title: "Servers and Work Stations",
    description: "High-performance computing infrastructure for business operations.",
    imageUrl: industrial,
    category: "Active Products"
  },
  // Passive Products
  {
    id: 10,
    title: "Ethernet Cables & Patch Cords",
    description: "Quality copper cabling solutions for reliable network connectivity.",
    imageUrl: fiber,
    category: "Passive Products"
  },
  {
    id: 11,
    title: "Fibre Cables & Patch Cords",
    description: "High-performance fiber optic cables for high-speed data transmission.",
    imageUrl: wireless,
    category: "Passive Products"
  },
  {
    id: 12,
    title: "Patch Panels and LIU's",
    description: "Professional cable management and termination solutions.",
    imageUrl: firewall,
    category: "Passive Products"
  },
];

// Product card component
const ProductCard = ({ product }) => {
  const { title, description, imageUrl } = product;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden flex flex-col">
      <div className="w-full h-32 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition duration-300 hover:scale-[1.02]"
        />
      </div>
      <div className="p-4 flex flex-col justify-between grow">
        <div>
          <h3 className="text-base font-bold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600 text-xs">{description}</p>
        </div>
        <div className="mt-3">
          <a
            href="#"
            className="text-green-600 hover:text-green-700 transition duration-150 text-xs font-semibold flex items-center group"
            onClick={(e) => e.preventDefault()}
          >
            {/* Explore Product */}
          </a>
        </div>
      </div>
    </div>
  );
};

// Main app component
const App = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 font-sans mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-green-700 sm:text-4xl inline-block pb-1">
            Our Solution Portfolio
          </h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;