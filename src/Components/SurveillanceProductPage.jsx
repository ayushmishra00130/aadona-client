import React, { useState } from 'react';
import ProductCard from './ProductCard';
import hero from '../assets/hero.jpg';

// Indoor / Outdoor
import asw1200 from '../assets/ProductsImg/Wireless/IO/asw-1200.png'
import aix3000 from '../assets/ProductsImg/Wireless/IO/AIX-3000 .png'
import aix62800T from '../assets/ProductsImg/Wireless/IO/AIX-6280-T.png'
import aoxi1800 from '../assets/ProductsImg/Wireless/IO/AOXI-1700.png'
import aoxe1800 from '../assets/ProductsImg/Wireless/IO/AOXE-1800.png'
import asc1200LV2 from '../assets/ProductsImg/Wireless/IO/ASC-1200L V2.png'
import axc1800 from '../assets/ProductsImg/Wireless/IO/AXC-1800..png'
import axc1800L from '../assets/ProductsImg/Wireless/IO/AXC-1800L.png'
import aos1200 from '../assets/ProductsImg/Wireless/IO/AOS-1200.png'
import axc3000 from '../assets/ProductsImg/Wireless/IO/AXC-3000L.png'
import axo1800L from '../assets/ProductsImg/Wireless/IO/AXO-1800L.png'
import axc3600 from '../assets/ProductsImg/Wireless/IO/AXC-3600.png'
import aoe1700t from '../assets/ProductsImg/Wireless/IO/aoe-1700-t.png'
import aic1200 from '../assets/ProductsImg/Wireless/IO/aic-1200.png'

// Controller
import awg3000 from '../assets/ProductsImg/Wireless/Controller/awg-3000.png';
import awg5000 from '../assets/ProductsImg/Wireless/Controller/awg-5000.png';
import awg7000 from '../assets/ProductsImg/Wireless/Controller/awg-7000.png';
import awg9000 from '../assets/ProductsImg/Wireless/Controller/awg-9000.png';
import awg9800 from '../assets/ProductsImg/Wireless/Controller/awg-9800.png';
import awm8000 from '../assets/ProductsImg/Wireless/Controller/awm-8000.png';

const wirelessProducts = [
  // Indoor Products
  {
    id: 1,
    model: 'ASW-1200',
    category: 'Indoor',
    description: 'Indoor In-Wall Access Point.',
    imageUrl: asw1200,
    features: ['1200Mbps Dual Band', '11ac Wave2 2X2 MU-MIMO', 'Compact design, better connectivity'],
  },
  {
    id: 2,
    model: 'ASC-1200L V2',
    category: 'Indoor',
    description: 'Indoor Ceiling Mount Access Point.',
    imageUrl: asc1200LV2,
    features: ['1200Mbps Dual Band', '11ac Wave2 2X2 MU-MIMO', 'Extended range with budget'],
  },
  {
    id: 3,
    model: 'AXW-3000',
    category: 'Indoor',
    description: 'Indoor In-Wall / Wall Mount Access Point.',
    imageUrl: hero,
    features: ['3000Mbps Dual Band', 'Wi-Fi 6 2X2 MU-MIMO', 'High Performance'],
  },
  {
    id: 4,
    model: 'ASC-1200',
    category: 'Indoor',
    description: 'Indoor Ceiling Mount Access Point.',
    imageUrl: hero,
    features: ['1200Mbps Dual Band', '11ac Wave2 2X2 MU-MIMO', 'High Performance'],
  },
  {
    id: 5,
    model: 'AXC-3600',
    category: 'Indoor',
    description: 'Indoor Ceiling Mount Access Point.',
    imageUrl: axc3600,
    features: ['3600Mbps Dual Band', 'Wi-Fi 6 4X4 MU-MIMO', 'High User Density'],
  },
  {
    id: 6,
    model: 'ABEC-3600L',
    category: 'Indoor',
    description: 'Indoor Ceiling Mount Access Point.',
    imageUrl: hero,
    features: ['3600Mbps Dual Band', 'Wi-Fi 7 4X4 MU-MIMO', 'High Traffic Throughput'],
  },
  {
    id: 7,
    model: 'AXC-7800',
    category: 'Indoor',
    description: 'Indoor Ceiling Mount Access Point.',
    imageUrl: hero,
    features: ['7800Mbps Dual Band', 'Wi-Fi 7 4X4 MU-MIMO', 'High User Density Throughput'],
  },
  {
    id: 8,
    model: 'AIC-1200',
    category: 'Indoor',
    description: 'Indoor Wall / Ceiling Mount Access Point.',
    imageUrl: aic1200,
    features: ['1200Mbps Dual Band', '11ac Wave2 2X2 MU-MIMO', 'Compact Design, Better Connectivity'],
  },
  {
    id: 9,
    model: 'AIX-1700',
    category: 'Indoor',
    description: 'Indoor Wall / Ceiling Mount Access Point.',
    imageUrl: hero,
    features: ['1700Mbps Dual Band', 'Wi-Fi 6 2X2 MU-MIMO', 'High Performance'],
  },
  {
    id: 10,
    model: 'AIX-3000',
    category: 'Indoor',
    description: 'Indoor Wall / Ceiling Mount Access Point.',
    imageUrl: aix3000,
    features: ['3000Mbps Dual Band', 'Wi-Fi 6 4X4 MU-MIMO', 'High Performance'],
  },
  {
    id: 11,
    model: 'AIX-6820-T',
    category: 'Indoor',
    description: 'Indoor Wall / Ceiling Mount Access Point.',
    imageUrl: aix62800T,
    features: ['7800Mbps Tri Band', 'Wi-Fi 6 4X4 MU-MIMO', 'High Performance'],
  },

  // Outdoor Products
  {
    id: 12,
    model: 'AOS-1200',
    category: 'Outdoor',
    description: 'Outdoor Pole / Wall Mount Access Point.',
    imageUrl: aos1200,
    features: ['1200Mbps Dual Band', 'Wi-Fi 6 2X2 MU-MIMO With External Antenna', 'Extended Coverage'],
  },
  {
    id: 13,
    model: 'AXC-1800L',
    category: 'Outdoor',
    description: 'Outdoor Pole / Wall Mount Access Point.',
    imageUrl: axc1800L,
    features: ['1800Mbps Dual Band', 'Wi-Fi 6 2X2 MU-MIMO With External Antenna', 'High Performance'],
  },
  {
    id: 14,
    model: 'AXO-3000AOM',
    category: 'Outdoor',
    description: 'Outdoor Pole / Wall Mount Access Point.',
    imageUrl: hero,
    features: ['3000Mbps Dual Band', 'Wi-Fi 6 2X2 MU-MIMO With Internal Antenna', 'High Performance'],
  },
  {
    id: 15,
    model: 'AXO-3000L',
    category: 'Outdoor',
    description: 'Outdoor Pole / Wall Mount Access Point.',
    imageUrl: hero,
    features: ['3000Mbps Dual Band', 'Wi-Fi 6 2X2 MU-MIMO With Internal Antenna', 'Compact Design, High Performance'],
  },
  {
    id: 16,
    model: 'APT-9143',
    category: 'Outdoor',
    description: 'Outdoor Pole Mount CPE.',
    imageUrl: hero,
    features: ['900Mbps Single 5G Band', '11ac Wave2 With Internal Antenna', '14dBi Dual Polarized High Gain Antenna, Distance up to 4000m'],
  },
  {
    id: 17,
    model: 'AOE-1700-T',
    category: 'Outdoor',
    description: 'Outdoor Pole / Wall Mount Access Point.',
    imageUrl: aoe1700t,
    features: ['1700Mbps Tri Band', '11ac Wave2 2X2 MU-MIMO With External Antenna', '2 x GE Ports + 1 x SFP Fiber Port'],
  },
  {
    id: 18,
    model: 'AOXI-1800',
    category: 'Outdoor',
    description: 'Outdoor Pole / Wall Mount Access Point.',
    imageUrl: aoxi1800,
    features: ['1800Mbps Dual Band', 'Wi-Fi 6 2X2 MU-MIMO With Internal Antenna', '1 x GE Port + 1 x SFP Fiber Port'],
  },
  {
    id: 19,
    model: 'AOXE-1800',
    category: 'Outdoor',
    description: 'Outdoor Pole / Wall Mount Access Point.',
    imageUrl: aoxe1800,
    features: ['1800Mbps Dual Band', 'Wi-Fi 6 2X2 MU-MIMO With External Antenna', '1 x GE Port + 1 x SFP Fiber Port'],
  },

  // Controller Products
  {
    id: 20,
    model: 'AWG-3000',
    category: 'Controller',
    description: 'SMB Wireless Unified Controller.',
    imageUrl: awg3000,
    features: ['Max 64 Access Points', 'AAA Hotspot, Multi WAN Load Balancing & Failover', '5 x GE RJ-45 Ports'],
  },
  {
    id: 21,
    model: 'AWG-5000',
    category: 'Controller',
    description: 'SMB Wireless Unified Controller.',
    imageUrl: awg5000,
    features: ['Max 128 Access Points', 'AAA Hotspot, Multi WAN Load Balancing & Failover', '5 x GE RJ-45 Ports'],
  },
  {
    id: 22,
    model: 'AWG-7000',
    category: 'Controller',
    description: 'SMB Wireless Unified Controller.',
    imageUrl: awg7000,
    features: ['Max 512 Access Points', 'AAA Hotspot, Multi WAN Load Balancing & Failover', '5 x GE RJ-45 Ports'],
  },
  {
    id: 23,
    model: 'AWG-9000',
    category: 'Controller',
    description: 'SMB Wireless Unified Controller',
    imageUrl: awg9000,
    features: ['Max 1024 Access Points', 'AAA Hotspot,Multi WAN Load Balancing and Fail Over', '5 x 10/100/1000 Mbps RJ-45 Ports'],
  },
  {
    id: 24,
    model: 'AWG-9800',
    category: 'Controller',
    description: 'SMB Wireless Unified Controller',
    imageUrl: awg9800,
    features: ['Max 3072 Access Points', 'AAA Hotspot,Multi WAN Load Balancing and Fail Over', '6 x 100/1000/2500 Mbps RJ-45 Ports and 2 x 10G SFP + Ports'],
  },
  {
    id: 25,
    model: 'AWM-6000-C',
    category: 'Controller',
    description: 'L3 Enterprise Wireless Controller',
    imageUrl: awg3000,
    features: ['Max 256 Access Points','High Availability,Load Balancing, Captive Portal', '24 x 10/100/1000 Base-T Ports, 24 x 10/100/1000 Base-T Ports and 2 x 10G SFP + Ports'],
  },
  {
    id: 26,
    model: 'AWM-8000',
    category: 'Controller',
    description: 'L3 Enterprise Wireless Controller',
    imageUrl: awm8000,
    features: ['Max 2048 Access Points','High Availability,Load Balancing, Captive Portal', '16 x 10/100/1000 Base-T Combo(GE/SFP) Ports, 8 x10G SFP Ports and 4 x 10G SFP + Ports'],
  },

];


const ProductCategoryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts =
    activeCategory === 'All'
      ? wirelessProducts
      : wirelessProducts.filter((product) => product.category === activeCategory);

  return (
    <>
    <div className="min-h-screen mt-20 bg-gray-50">
      {/* Header & Filters */}
      <div className="bg-white py-12 shadow-md ">
          {/* Added text-center here */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4 border-b-4 border-green-500 inline-block pb-1">
              Wireless Solutions
            </h1>
            {/* Added mx-auto here to center the p element because it has a max-width */}
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the APOLLO Series — high-performance access points and controllers for scalable, secure wireless infrastructure.
                    </p>
          </div>
        </div>
         {/* Filter Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            {['All', 'Indoor', 'Outdoor', 'Controller'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-md font-medium transition ${
                  activeCategory === category
                    ? 'bg-green-600 text-white shadow-md'
                    : 'bg-white text-green-600 border border-green-500 hover:bg-green-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured APOLLO Products
        </h2> */}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductCategoryPage;