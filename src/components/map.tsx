'use client';

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface City {
  id: number;
  name: string;
  position: [number, number];
  preview: string;
  description: string;
}

const cities: City[] = [
  { 
    id: 1, 
    name: "Paris", 
    position: [48.8566, 2.3522], 
    preview: "Avg rent: €1,200", 
    description: "The City of Light, known for its art, fashion, and culture." 
  },
  { 
    id: 2, 
    name: "Berlin", 
    position: [52.5200, 13.4050], 
    preview: "Avg rent: €800", 
    description: "Creative hub with a vibrant startup scene and rich history." 
  },
  { 
    id: 3, 
    name: "Lisbon", 
    position: [38.7223, -9.1393], 
    preview: "Avg rent: €900", 
    description: "Coastal charm with beautiful beaches and affordable living." 
  },
];

export default function Map() {
  const [isClient, setIsClient] = useState(false);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-[500px] bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Side Panel for City Preview */}
      {selectedCity && (
        <div className="absolute top-4 right-4 z-[1000] w-80 bg-white rounded-lg shadow-xl p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-800">{selectedCity.name}</h3>
            <button 
              onClick={() => setSelectedCity(null)}
              className="text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>
          <p className="text-gray-600 mb-4">{selectedCity.description}</p>
          <div className="space-y-2 text-sm text-gray-500">
            <p>💶 {selectedCity.preview}</p>
            <p>🌡️ Mild climate</p>
            <p>📊 Visa-friendly</p>
          </div>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
            View Full Profile
          </button>
        </div>
      )}

      <MapContainer
        center={[48.8566, 2.3522]}
        zoom={4}
        style={{ height: '500px', width: '100%' }}
        className="rounded-lg shadow-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker 
            key={city.id} 
            position={city.position}
            eventHandlers={{
              click: () => setSelectedCity(city),
            }}
          >
            {/* Hover Tooltip */}
            <Tooltip 
              direction="top" 
              offset={[0, -10]} 
              opacity={1}
              permanent={false}
              className="custom-tooltip"
            >
              <div className="p-2">
                <h4 className="font-semibold text-sm">{city.name}</h4>
                <p className="text-xs text-gray-600">{city.preview}</p>
                <p className="text-xs text-gray-600">Michael, we can add more info here..</p>
              </div>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>

      {/* Add some custom styles for the tooltip */}
      <style jsx global>{`
        .custom-tooltip {
          background: white;
          border: none;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          padding: 0;
        }
        
        .custom-tooltip::before {
          border-top-color: white !important;
        }
        
        .leaflet-tooltip-top::before {
          border-top-color: white;
        }
        
        .leaflet-tooltip-bottom::before {
          border-bottom-color: white;
        }
      `}</style>
    </div>
  );
}