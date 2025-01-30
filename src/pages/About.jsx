import React from 'react';

const About = () => {
    return (
        <div className="p-12 text-center max-w-4xl mx-auto min-h-screen flex flex-col justify-center">
            {/* Büyük Başlık */}
            <h1 className="text-6xl font-bold text-gray-800 mb-6">🐝 About HoneyDashboard</h1>

            {/* Eğlenceli Açıklama */}
            <p className="text-xl text-gray-700 leading-relaxed">
                Ever wondered what cybercriminals are up to while you're peacefully sipping your coffee? ☕  
                Well, we have! HoneyDashboard is your ultimate cyber-intelligence buddy, tracking, analyzing, and visualizing  
                honeypot data to expose sneaky attack attempts from around the world. 🌍💻  
                Whether it's brute force attacks, dictionary hacks, or malware drops, we've got them all covered!  
                So sit back, relax, and let us turn cyber threats into beautiful charts and insights! 📊✨  
            </p>
        </div>
    );
}

export default About;
