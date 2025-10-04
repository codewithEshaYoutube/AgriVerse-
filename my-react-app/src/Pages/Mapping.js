import React, { useState } from 'react';
import Container from '../Components/Container'; // Correct import path
import '../ComponentCss/Mapping.css'; // Correct path for your CSS file

// Import SVG images
import DamsImage from '../Images/Dams.svg';
import DroughtImage from '../Images/Drought.svg';
import FloodingImage from '../Images/Flooding.svg';
import PrecipitationImage from '../Images/Precipitation.svg';
import SoilMoistureImage from '../Images/Soil Moisture.svg';

// Import new legend images
import DamsLegend from '../Images/DamsLegend.svg';
import DroughtLegend from '../Images/DroughtLegend.svg';
import FloodingLegend from '../Images/FloodingLegend.svg';
import PrecipatationLegend from '../Images/PrecipatationLegend.svg'; // Updated path
import SoilMoistureLegend from '../Images/Soil MoistureLegend.svg'; // Updated path

const MappingPage = () => {
    const [view, setView] = useState('map'); // State to track the current view
    const [selectedImageIndex, setSelectedImageIndex] = useState(0); // State for selected image index

    // Array of preset images imported
    const presetImages = [
        DamsImage,
        DroughtImage,
        FloodingImage,
        PrecipitationImage,
        SoilMoistureImage,
    ];

    // Array of new legend images
    const legendImages = [
        DamsLegend,
        DroughtLegend,
        FloodingLegend,
        PrecipatationLegend, // Updated path
        SoilMoistureLegend, // Updated path
    ];

    // Array of insight names
    const insightNames = [
        'Dam Information',
        'Drought Risk Analytics',
        'Flood Risk Analytics',
        'Precipitation Analytics',
        'Soil Moisture Analytics',
    ];

    // Handle view change
    const handleViewChange = (event) => {
        const selectedView = event.target.value;
        setView(selectedView);

        // Reset to the first image if switching back to images
        if (selectedView !== 'map') {
            setSelectedImageIndex(0);
        }
    };

    // Handle image selection
    const handleImageChange = (event) => {
        setSelectedImageIndex(event.target.value);
    };

    return (
        <div className="content page-centered">
            <Container height={300} content={[
                <h2 key="1">Mapping Data</h2>,
                <div className="map-container" key="2">
                    {view === 'map' ? (
                        <iframe
                            title="Google Maps"
                            width="90%"
                            height="450"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?width=90%25&amp;height=450&amp;hl=en&amp;q=+(United%20States)&amp;t=&amp;z=4&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        >
                            <a href="https://www.gps.ie/">gps vehicle tracker</a>
                        </iframe>
                    ) : (
                        <div className="data-insights-container">
                            <img 
                                src={presetImages[selectedImageIndex]} 
                                alt={insightNames[selectedImageIndex]} 
                                className="data-insights-map"
                            />
                            <img 
                                src={legendImages[selectedImageIndex]} 
                                alt={`Legend for ${insightNames[selectedImageIndex]}`} 
                                className="data-insights-legend"
                            />
                        </div>
                    )}
                </div>,
                <div key="3" style={{ marginTop: '20px', textAlign: 'center' }}>
                    <select 
                        id="view-select" 
                        value={view} 
                        onChange={handleViewChange} 
                        className="dropdown"
                    >
                        <option value="map">Google Map</option>
                        <option value="image">Data Insights</option> {/* Updated label */}
                    </select>

                    {view === 'image' && (
                        <select 
                            id="image-select" 
                            value={selectedImageIndex} 
                            onChange={handleImageChange} 
                            className="dropdown"
                            style={{ marginTop: '10px' }} // Additional margin for spacing
                        >
                            {insightNames.map((name, index) => ( // Use insight names
                                <option key={index} value={index}>
                                    {name} {/* Update to use names */}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
            ]} />
        </div>
    );
};

export default MappingPage;
