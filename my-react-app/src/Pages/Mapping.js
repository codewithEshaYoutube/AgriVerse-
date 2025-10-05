import React, { useState } from 'react';
import Container from '../Components/Container'; // Correct import path
import '../ComponentCss/Mapping.css'; // Correct path for your CSS file

// Import new data insights images
import VegetationImage from '../Images/Vegetation_map.PNG';
import SevereStormsImage from '../Images/Severe Storms_map.PNG';
import FiresThermalImage from '../Images/Fires and Thermal Anomalies_map.PNG';
import DustStormImage from '../Images/Dust Storm_map.PNG';
import DroughtHazardsImage from '../Images/Drought Hazards_map.PNG';

// Import new legend images
import VegetationLegend from '../Images/Vegetation Legend.png';
import SevereStormsLegend from '../Images/Severe Storm.png';
import FiresThermalLegend from '../Images/Fires and Thermal Anomalies.png';
import DustStormLegend from '../Images/Dust Storm.png';
import DroughtHazardsLegend from '../Images/Drought Hazard.png';

const MappingPage = () => {
    const [view, setView] = useState('map'); // State to track the current view
    const [selectedImageIndex, setSelectedImageIndex] = useState(0); // State for selected image index

    // Array of preset images imported
    const presetImages = [
        VegetationImage,
        SevereStormsImage,
        FiresThermalImage,
        DustStormImage,
        DroughtHazardsImage,
    ];

    // Array of new legend images
    const legendImages = [
        VegetationLegend,
        SevereStormsLegend,
        FiresThermalLegend,
        DustStormLegend,
        DroughtHazardsLegend,
    ];

    // Array of insight names
    const insightNames = [
        'Vegetation',
        'Severe Storms',
        'Fires and Thermal Anomalies',
        'Dust Storm',
        'Drought Hazards',
    ];

    // Button handlers
    const handleSelectMap = () => {
        setView('map');
    };

    const handleSelectInsights = () => {
        setView('image');
        setSelectedImageIndex(0);
    };

    const handleSelectInsightIndex = (index) => {
        setSelectedImageIndex(index);
    };

    return (
        <div className="content page-centered">
            <Container height={300} className="glass" content={[
                <h2 key="1">Mapping Data</h2>,
                <div key="controls" className="mapping-controls">
                    <div className="controls-surface">
                        <button onClick={handleSelectMap} className={`glass-button ${view === 'map' ? 'active' : ''}`}>Google Map</button>
                        <button onClick={handleSelectInsights} className={`glass-button ${view === 'image' ? 'active' : ''}`}>Data Insights</button>
                    </div>
                    {view === 'image' && (
                        <div className="controls-surface" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                            {insightNames.map((name, index) => (
                                <button key={name} onClick={() => handleSelectInsightIndex(index)} className={`glass-button ${selectedImageIndex === index ? 'active' : ''}`}>
                                    {name}
                                </button>
                            ))}
                        </div>
                    )}
                </div>,
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
                </div>
            ]} />
        </div>
    );
};

export default MappingPage;
