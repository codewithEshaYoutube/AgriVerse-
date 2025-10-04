import React, { useState } from 'react';
import Container from '../Components/Container'; // Correct import path
import PageChangeButton from '../Components/PageChangeButton'; // Correct import path
import GMail from '../Images/email.png';
import GitHub from '../Images/github.png';
import LinkedIn from '../Images/linkedin.png';

const HomePage = ({ setCurrentPage }) => {
  const [activeProfile, setActiveProfile] = useState(null);

  const profiles = [
    {
      id: 1,
      name: 'Alex Zou',
      role: 'Front End Developer & Team Leader',
      email: 'xuekaizou@gmail.com',
      linkedin: 'https://www.linkedin.com/in/xuekaizou/',
      github: 'https://github.com/FireguyZou123',
      imgSrc: 'https://assets.spaceappschallenge.org/media/images/The_Chargin_Bull.2e16d0ba.fill-64x64.png',
      description: 'Just a finance bro wandering around a bit',
    },
    {
      id: 2,
      name: 'Ava Lin',
      role: 'Graphic & UI Designer',
      email: 'linrxa@gmail.com',
      linkedin: 'https://www.linkedin.com/in/ava-lin/',
      github: 'https://github.com/ava-lin',
      imgSrc: 'https://assets.spaceappschallenge.org/media/images/images_XFrOhXk.2e16d0ba.fill-64x64.jpg',
      description: 'Was doodling some random stuff',
    },
    {
      id: 3,
      name: 'Evan Li',
      role: 'Front End Developer',
      email: 'evan@example.com',
      linkedin: 'https://www.linkedin.com/in/evan-li-4588b4294/',
      github: 'https://github.com/L1Evan',
      imgSrc: 'https://assets.spaceappschallenge.org/media/images/IMG_3183_an1OjWp.2e16d0ba.fill-64x64.jpg',
      description: 'Just another CS major using ChatGPT',
    },
    {
      id: 4,
      name: 'Taizo Rashid',
      role: 'Front End Developer',
      email: 'taizo@example.com',
      linkedin: 'https://www.linkedin.com/in/taizorashid',
      github: 'https://github.com/taizorashid',
      imgSrc: 'https://avatars.githubusercontent.com/u/52359118?v=4',
      description: 'CS major who actually knew what he was doing',
    },
    {
      id: 5,
      name: 'Shumaila Batool',
      role: 'Data Scientist',
      email: 'shumaila.batool@wum.edu.pk',
      linkedin: 'https://www.linkedin.com/in/shumaila489/',
      github: 'https://github.com/shumailab489',
      imgSrc: 'https://avatars.githubusercontent.com/u/161557177?v=4',
      description: 'Turned random data into an actual tool',
    },
    {
      id: 6,
      name: 'Saqlain Abid',
      role: 'Software Developer',
      email: 'saqlainabid143@gmail.com',
      linkedin: 'https://www.linkedin.com/in/saqlainabid143/',
      github: 'https://github.com/Saqlain143',
      imgSrc: 'https://avatars.githubusercontent.com/u/86692833?v=4',
      description: 'Software Engineer that loves AI powered apps',
    },
  ];

  const toggleProfile = (activeId) => {
    setActiveProfile(activeProfile === activeId ? null : activeId);
  };

  return (
    <div className="content">
      <Container height={300} content={[
        <h2 key="1">Navigation</h2>,
        <PageChangeButton 
          text="Go to Mapping Page" 
          onClick={() => setCurrentPage('Mapping')}
          key="mapping"
        />,
        <PageChangeButton 
          text="Go to Groups Page" 
          onClick={() => setCurrentPage('Groups')}
          key="groups"
        />,
        <PageChangeButton 
          text="Support" 
          onClick={() => setCurrentPage('Support')}
          key="support"
        />
      ]} />

      {/* Support Page Content */}
      <div style={{ padding: '0px', fontFamily: 'Arial, sans-serif' }}>
        <Container height={300} content={[ // Combined Header and About Section
          <header key="1" style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '2rem' }}>Agriview</h1>
            <p style={{ fontSize: '1rem', maxWidth: '600px', margin: 'auto' }}>
              Empowering farmers with Earth Observation Data for informed decision-making.
            </p>
            <section style={{ textAlign: 'center', marginTop: '20px' }}>
              <h2>About the Project</h2>
              <p style={{ maxWidth: '800px', margin: 'auto' }}>
                This project leverages Earth Observation data to help farmers make informed decisions regarding water-related challenges.
                By providing tools to analyze data from NASA and other sources, we aim to improve crop health, optimize water usage,
                and enhance overall agricultural practices. Our goal is to empower farmers with actionable insights to navigate
                unpredictable weather and environmental conditions.
              </p>
            </section>
          </header>
        ]} />

        <div style={{ height: '20px' }} /> {/* Reduced space between containers */}

        <section key="3" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {profiles.map((profile) => (
            <div 
              key={profile.id} 
              onClick={() => toggleProfile(profile.id)}
              style={{ 
                position: 'relative', 
                cursor: 'pointer', 
                margin: '10px', 
                border: '1px solid #ccc', 
                borderRadius: '8px', 
                padding: '8px', 
                width: '180px', 
                height: '250px', 
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
                transition: 'transform 0.2s', 
                textAlign: 'center',
                overflow: 'hidden',
                backgroundColor: '#fff',
                transform: activeProfile === profile.id ? 'scale(1.05)' : 'scale(1)', 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'; 
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = activeProfile === profile.id ? 'scale(1.05)' : 'scale(1)'; 
              }}
            >
              <img src={profile.imgSrc} alt={profile.name} style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '8px' }} />
              <h3 style={{ margin: '6px 0', fontSize: '1.1rem' }}>{profile.name}</h3>
              <p style={{ color: '#555', marginBottom: '6px', fontSize: '0.85rem' }}>{profile.role}</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '6px' }}>
    <a href={`mailto:${profile.email}`} style={{ marginRight: '8px', color: '#333' }}>
        <img src={GMail} alt="Email" style={{ width: '20px', height: '20px' }} />
    </a>
    <a href={profile.linkedin} style={{ marginRight: '8px', color: '#333' }}>
        <img src={LinkedIn} alt="LinkedIn" style={{ width: '20px', height: '20px' }} />
    </a>
    <a href={profile.github} style={{ color: '#333' }}>
        <img src={GitHub} alt="GitHub" style={{ width: '20px', height: '20px' }} />
    </a>
</div>
              {activeProfile === profile.id && 
                <div style={{ 
                  position: 'absolute', 
                  bottom: '10px', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  color: '#555', 
                  fontSize: '0.8rem', 
                  transition: 'opacity 0.3s', 
                  width: '90%', 
                  textAlign: 'center',
                  margin: '0 auto',
                }}>
                  {profile.description}
                </div>}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default HomePage;
