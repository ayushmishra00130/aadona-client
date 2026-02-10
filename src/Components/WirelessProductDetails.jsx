import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Check, Wifi, Shield, Zap } from 'lucide-react';
import hero from '../assets/hero.jpg';
import Footer from './Footer';
import Navbar from './Navbar';
import asw1200 from '../assets/ProductsImg/Wireless/IO/asw-1200.png';

// This would typically come from props or API based on product ID
const productData = {
  id: 1,
  model: 'ASW-1200',
  fullName: 'ASW-1200 Indoor In-Wall Access Point',
  category: 'Indoor Access Point',
  series: 'APOLLO Series',
  description: 'Compact and powerful 11ac Wave2 indoor access point designed for seamless in-wall installation.',
  mainImage: asw1200,
  images: [asw1200,asw1200,asw1200,asw1200],
  
  overview: {
    title: 'Product Overview',
    content: `The ASW-1200 is a high-performance indoor in-wall access point designed for modern business environments. With its compact form factor and 1200Mbps dual-band capability, it delivers reliable wireless connectivity while maintaining an unobtrusive profile. Perfect for hotels, offices, dormitories, and residential deployments where aesthetics and performance matter equally.

The device features 11ac Wave2 technology with 2x2 MU-MIMO, enabling simultaneous data transmission to multiple devices for improved network efficiency. Its in-wall design eliminates the need for visible mounting hardware, providing a clean, professional appearance.

Built with enterprise-grade components, the ASW-1200 ensures stable performance even in high-density user environments. It supports advanced wireless features including band steering, airtime fairness, and seamless roaming capabilities when managed through AADONA wireless controllers.`
  },
  features: [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Dual-Band 1200Mbps',
      description: 'Simultaneous 2.4GHz (300Mbps) and 5GHz (867Mbps) operation for maximum flexibility and performance.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '11ac Wave2 MU-MIMO',
      description: 'Multi-user MIMO technology enables simultaneous communication with multiple clients, improving overall network efficiency.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enterprise Security',
      description: 'Supports WPA/WPA2/WPA3 encryption, 802.1X authentication, and advanced security policies for comprehensive network protection.'
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'Compact In-Wall Design',
      description: 'Flush-mount installation with minimal visual footprint, ideal for hospitality and residential deployments.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'PoE Powered',
      description: 'IEEE 802.3af/at Power over Ethernet support eliminates the need for separate power cables, simplifying installation.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Centralized Management',
      description: 'Seamlessly integrates with AADONA wireless controllers for unified configuration, monitoring, and firmware updates.'
    }
  ],
  specifications: {
    'Hardware Specifications': {
      'Processor': 'Dual-core 880MHz',
      'Memory': '128MB RAM, 16MB Flash',
      'Wireless Standards': 'IEEE 802.11a/b/g/n/ac Wave2',
      'Antenna': 'Internal dual-band antennas',
      'Antenna Gain': '2.4GHz: 3dBi, 5GHz: 4dBi',
      'Interfaces': '1 x 10/100/1000 Mbps Ethernet Port (RJ-45)',
      'Power Supply': 'IEEE 802.3af/at PoE or DC 12V/1A adapter',
      'Power Consumption': 'Max 12W',
      'Dimensions': '86mm x 86mm x 29mm',
      'Weight': '150g'
    },
    'Wireless Specifications': {
      'Operating Frequency': '2.4GHz: 2.412~2.472GHz, 5GHz: 5.180~5.825GHz',
      'Max TX Power': '2.4GHz: 20dBm, 5GHz: 23dBm',
      'MIMO Configuration': '2x2:2',
      'Data Rates': '2.4GHz: up to 300Mbps, 5GHz: up to 867Mbps',
      'Wireless Modes': 'Access Point, Monitor',
      'SSIDs': 'Up to 16 SSIDs per radio',
      'Wireless Security': 'WPA/WPA2-Personal, WPA/WPA2-Enterprise, WPA3',
      'Wireless Features': 'Band Steering, Load Balancing, Airtime Fairness, Fast Roaming'
    },
    'Management & Features': {
      'Management': 'AADONA Wireless Controller (AWG/AWM Series)',
      'Management Protocols': 'CAPWAP, SNMP v1/v2c/v3, Syslog',
      'Guest Portal': 'Captive Portal with customizable splash page',
      'QoS': 'WMM, DSCP marking',
      'VLAN': '802.1Q VLAN support',
      'Advanced Features': 'Rate Limiting, MAC Filtering, Rogue AP Detection',
      'Firmware Upgrade': 'Automatic via controller or manual upload'
    },
    'Environmental': {
      'Operating Temperature': '0°C to 40°C (32°F to 104°F)',
      'Storage Temperature': '-40°C to 70°C (-40°F to 158°F)',
      'Operating Humidity': '10% to 90% (non-condensing)',
      'Storage Humidity': '5% to 95% (non-condensing)',
      'Certifications': 'CE, FCC, RoHS'
    }
  },
  downloads: [
    {
      name: 'Product Datasheet',
      size: '2.4 MB',
      format: 'PDF',
      description: 'Complete product specifications and features'
    },
    {
      name: 'Quick Installation Guide',
      size: '1.8 MB',
      format: 'PDF',
      description: 'Step-by-step installation instructions'
    },
    {
      name: 'User Manual',
      size: '5.2 MB',
      format: 'PDF',
      description: 'Comprehensive configuration and management guide'
    },
    {
      name: 'Firmware Updates',
      size: 'Varies',
      format: 'BIN',
      description: 'Latest firmware version and release notes'
    }
  ]
};

const ProductDetailPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedImage, setSelectedImage] = useState(0);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Features' },
    { id: 'specifications', label: 'Specifications' }
  ];

  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-gray-50">

        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="text-sm text-gray-600">
              Home / Wireless / {productData.model}
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/products" className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex items-center justify-center">
  <img
    src={productData.mainImage}
    alt={productData.model}
    className="w-full h-full object-contain"
  />
</div>
            </div>

            {/* Right Column - Product Info */}
            <div className="space-y-6">
              {/* Series Badge */}
              <div>
                <span className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                  {productData.series}
                </span>
              </div>

              {/* Product Title */}
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{productData.model}</h1>
                <p className="text-xl text-gray-600">{productData.fullName}</p>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Category</div>
                  <div className="font-semibold text-gray-900">{productData.category}</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Speed</div>
                  <div className="font-semibold text-gray-900">1200 Mbps</div>
                </div>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="text-sm text-gray-600 mb-1">Standard</div>
                  <div className="font-semibold text-gray-900">Wi-Fi 5 (11ac)</div>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-gray-700 leading-relaxed">{productData.description}</p>
              </div>

              {/* Key Highlights */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  Key Highlights
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>1200Mbps Dual Band (2.4GHz + 5GHz)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>11ac Wave2 2X2 MU-MIMO Technology</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Compact in-wall design for seamless integration</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>PoE Powered (802.3af/at) for easy installation</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>Enterprise-grade security and management</span>
                  </li>
                </ul>
              </div>

              {/* CTA Button */}
              <div className="flex gap-4">
                <button
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  Download Datasheet
                </button>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="mt-16">
            {/* Tab Headers */}
            <div className="border-b border-gray-200 flex gap-1 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-4 font-semibold text-lg whitespace-nowrap transition-all border-b-2 ${
                    activeTab === tab.id
                      ? 'border-green-600 text-green-600 bg-white'
                      : 'border-transparent text-gray-600 hover:text-green-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-b-xl shadow-lg p-8 min-h-[400px]">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="prose max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">{productData.overview.title}</h2>
                  {productData.overview.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-lg text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              {/* Features Tab */}
              {activeTab === 'features' && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Product Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {productData.features.map((feature, idx) => (
                      <div key={idx} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-green-300 transition-colors">
                        <div className="text-green-600 mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-base text-gray-700 leading-relaxed">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specifications Tab */}
              {activeTab === 'specifications' && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Specifications</h2>
                  <div className="space-y-8">
                    {Object.entries(productData.specifications).map(([category, specs]) => (
                      <div key={category}>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-600">
                          {category}
                        </h3>
                        <div className="bg-gray-50 rounded-lg overflow-hidden">
                          {Object.entries(specs).map(([key, value], idx) => (
                            <div
                              key={key}
                              className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-4 ${
                                idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                              }`}
                            >
                              <div className="text-base font-semibold text-gray-900">{key}</div>
                              <div className="md:col-span-2 text-base text-gray-700">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductDetailPage;