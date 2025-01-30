import React, { useEffect, useState } from 'react';
import { fetchAttackDistribution } from '../api/api';
import './PodiumComponent.css'; // CSS dosyası

const PodiumComponent = () => {
    const [topAttacks, setTopAttacks] = useState([]);

    useEffect(() => {
        fetchAttackDistribution().then((data) => {
            if (data) {
                // Gelen veriyi önce kopyalayıp sonra sıralıyoruz
                const sortedData = [...data] // Orijinal veriyi değiştirmemek için kopyaladık
                    .sort((a, b) => b.attack_count - a.attack_count) // Büyükten küçüğe sıralama
                    .slice(0, 3); // İlk 3'ü al

                // 1. ve 2. sırayı ters çevirerek doğru yerleştirme yapıyoruz
                if (sortedData.length >= 2) {
                    [sortedData[0], sortedData[1]] = [sortedData[1], sortedData[0]];
                }

                setTopAttacks(sortedData);
            }
        });
    }, []);

    // Madalya ve kürsü sıralaması
    const podiumPlaces = [
        { className: "second-place", medal: "🥈" },  // Gümüş Madalya
        { className: "first-place", medal: "🥇" },    // Altın Madalya
        { className: "third-place", medal: "🥉" }    // Bronz Madalya
    ];

    return (
        <div className="podium-container">
            {topAttacks.map((attack, index) => (
                <div key={index} className={`podium ${podiumPlaces[index].className}`}>
                    <h3 className="attack-name">
                        {attack.attack_type.replace(/_/g, " ").toUpperCase()} {/* Büyük harf */}
                    </h3>
                    <span className="medal-icon">{podiumPlaces[index].medal}</span>
                    <p className="attack-count">{attack.attack_count} Attacks</p>
                </div>
            ))}
        </div>
    );
};

export default PodiumComponent;
