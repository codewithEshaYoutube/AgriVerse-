import React, { useState } from 'react';
import GMail from '../Images/email.png';
import GitHub from '../Images/github.png';
import LinkedIn from '../Images/linkedin.png';
import AgriVerseBodyLogo from '../Images/AgriVerseBodyLogo.png';

const HomePage = ({ setCurrentPage }) => {
  const [activeProfile, setActiveProfile] = useState(null);

  const profiles = [
    {
      id: 1,
      name: 'Saqlain Abid',
      role: 'Software Developer',
      subtitle: 'Team Lead',
      email: 'saqlainabid143@gmail.com',
      linkedin: 'https://www.linkedin.com/in/saqlainabid143/',
      github: 'https://github.com/Saqlain143',
      imgSrc: 'https://avatars.githubusercontent.com/u/86692833?v=4',
      description: 'Software Engineer that loves AI powered apps',
    },
    {
      id: 2,
      name: 'Shumaila Batool',
      role: 'Data Scientist',
      email: 'shumaila.batool@wum.edu.pk',
      linkedin: 'https://www.linkedin.com/in/shumaila489/',
      github: 'https://github.com/shumailab489',
      imgSrc: 'https://avatars.githubusercontent.com/u/161557177?v=4',
      description: 'Turned random data into an actual tool',
    },
    {
      id: 3,
      name: 'Esha Tariq',
      role: 'Front End Developer',
      email: 'tariqeesha321@gmail.com',
      linkedin: 'https://www.linkedin.com/in/esha-tariqdev/',
      github: 'https://github.com/codewithEshaYoutube/',
      imgSrc: 'https://github.com/codewithEshaYoutube.png',
      description: 'Creating beautiful user interfaces',
    },
    {
      id: 4,
      name: 'Evan Li',
      role: 'Front End Developer',
      email: 'evan@example.com',
      linkedin: 'https://www.linkedin.com/in/evan-li-4588b4294/',
      github: 'https://github.com/L1Evan',
      imgSrc: 'https://assets.spaceappschallenge.org/media/images/IMG_3183_an1OjWp.2e16d0ba.fill-64x64.jpg',
      description: 'Just another CS major using ChatGPT',
    },
    {
      id: 5,
      name: 'Taizo Rashid',
      role: 'Front End Developer',
      email: 'taizo@example.com',
      linkedin: 'https://www.linkedin.com/in/taizorashid',
      github: 'https://github.com/taizorashid',
      imgSrc: 'https://avatars.githubusercontent.com/u/52359118?v=4',
      description: 'CS major who actually knew what he was doing',
    },
  ];

  const toggleProfile = (activeId) => {
    setActiveProfile(activeProfile === activeId ? null : activeId);
  };

  return (
    <div className="content">
      {/* Animated AgriVerse Body Logo */}
      <div className="logo-container">
        <img 
          src={AgriVerseBodyLogo} 
          alt="AgriVerse Logo" 
          className="animated-logo"
        />
      </div>

      <div style={{ height: '20px' }} /> {/* Reduced space between logo and team section */}

      <section key="3" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {profiles.map((profile) => (
            <div 
              key={profile.id} 
              onClick={() => toggleProfile(profile.id)}
              style={{ 
                position: 'relative', 
                cursor: 'pointer', 
                margin: '10px', 
                border: '1px solid rgba(255, 255, 255, 0.2)', 
                borderRadius: '12px', 
                padding: '12px', 
                width: '180px', 
                height: '250px', 
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)', 
                transition: 'all 0.3s ease', 
                textAlign: 'center',
                overflow: 'hidden',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                transform: activeProfile === profile.id ? 'scale(1.05)' : 'scale(1)', 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)'; 
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = activeProfile === profile.id ? 'scale(1.05)' : 'scale(1)'; 
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img src={profile.imgSrc} alt={profile.name} style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '8px' }} />
              <h3 style={{ margin: '6px 0', fontSize: '1.1rem', color: 'white' }}>{profile.name}</h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '6px', marginTop: '2px', fontSize: '0.85rem' }}>{profile.role}</p>
              {profile.subtitle && (
                <p style={{ color: 'rgba(255, 255, 255, 0.8)', marginBottom: '6px', marginTop: '0px', fontSize: '0.75rem', fontStyle: 'italic' }}>{profile.subtitle}</p>
              )}
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px' }}>
    <a href={`mailto:${profile.email}`} style={{ marginRight: '8px', color: 'white' }}>
        <img src={GMail} alt="Email" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
    </a>
    <a href={profile.linkedin} style={{ marginRight: '8px', color: 'white' }}>
        <img src={LinkedIn} alt="LinkedIn" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
    </a>
    <a href={profile.github} style={{ color: 'white' }}>
        <img src={GitHub} alt="GitHub" style={{ width: '20px', height: '20px', filter: 'brightness(0) invert(1)' }} />
    </a>
</div>
              {activeProfile === profile.id && 
                <div style={{ 
                  position: 'absolute', 
                  bottom: '10px', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  fontSize: '0.8rem', 
                  transition: 'opacity 0.3s', 
                  width: '90%', 
                  textAlign: 'center',
                  margin: '0 auto',
                  color: 'rgba(255, 255, 255, 0.8)',
                }}>
                  {profile.description}
                </div>}
            </div>
          ))}
      </section>
    </div>
  );
};

export default HomePage;
