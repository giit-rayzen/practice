// Achievements.js
import React from 'react';
import './Achievements.css'; // Create a CSS file for styling

const achievementsData = [
  {
    title: "5G Network Launch",
    description: "Launched India's first indigenous 5G network, enhancing connectivity across urban and rural areas.",
    date: "August 2023",
    image: "path/to/image1.jpg" // Replace with actual image path
  },
  {
    title: "Best Telecom Provider",
    description: "Awarded the title of 'Best Telecom Provider' by the Telecom Regulatory Authority of India.",
    date: "January 2023",
    image: "path/to/image2.jpg" // Replace with actual image path
  },
  {
    title: "Expanded Fiber Network",
    description: "Expanded the fiber optic network to cover over 2 million homes, ensuring high-speed internet for all.",
    date: "June 2023",
    image: "path/to/image3.jpg" // Replace with actual image path
  },
  {
    title: "CSR Initiatives",
    description: "Launched various CSR initiatives focusing on digital education and women empowerment.",
    date: "March 2023",
    image: "path/to/image4.jpg" // Replace with actual image path
  }
];

const Achievements = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">BSNL Achievements</h1>
      <div className="row">
        {achievementsData.map((achievement, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card">
              <img src={achievement.image} className="card-img-top" alt={achievement.title} />
              <div className="card-body">
                <h5 className="card-title">{achievement.title}</h5>
                <p className="card-text">{achievement.description}</p>
                <p className="card-text text-muted">{achievement.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
