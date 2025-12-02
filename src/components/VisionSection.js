// components/VisionSection.tsx
import { Trophy, Users, Award, Star, UserCheck, Sparkles } from 'lucide-react';
import { FaEye } from 'react-icons/fa';
import { PiUsersThreeFill } from 'react-icons/pi';
import { MdPets } from 'react-icons/md';

export default function VisionSection() {
  const stats = [
    {
      number: "150+",
      label: "Happy Clients",
      description: "Satisfied customers",
      icon: PiUsersThreeFill,
    },
    {
      number: "10+",
      label: "Kota Breed Goats",
      description: "Premium breeding stock",
      icon: Award, // Changed from GiGoat to Award (represents quality/excellence)
    },
    {
      number: "2",
      label: "Generations",
      description: "Of breeding expertise",
      icon: Users,
    },
    {
      number: "25+",
      label: "Years Experience",
      description: "In goat breeding",
      icon: Trophy, // Changed from Award to Trophy (represents achievement)
    },
  ];

  return (
    <section className="vision-section">
      <div className="vision-bg-pattern"></div>
      
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="sub-title">
            <FaEye size={30} className="me-2" />
            Our Vision
          </span>
          <h2>Where Heritage Meets Excellence in Goat Breeding</h2>
          <p className="section-description">
            Shalimar Goat Farm has been at the forefront of preserving and enhancing the legendary Kota breed for over two decades. Our commitment to excellence, traditional breeding practices, and modern animal husbandry techniques has made us the most trusted name in premium goat breeding across India.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="row g-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="col-6 col-md-3">
                <div className="stat-card">
                  <div className="stat-icon-wrapper">
                    <IconComponent size={40} color="#34d399" />
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-description">{stat.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}