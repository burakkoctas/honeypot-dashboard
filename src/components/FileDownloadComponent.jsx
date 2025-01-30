import React from 'react';
import AttackChart from './AttackChart';
import TopList from './TopList';
import AttackInsights from './AttackInsights';

const FileDownloadComponent = () => {
    return (
        <div className="flex flex-col gap-10 p-8">
            <h1 className="text-3xl font-bold text-center">📂 File Download Attack Analysis</h1>

<p className="text-lg text-gray-600 my-4 ml-60">In a file download attack, attackers attempt to retrieve sensitive files from a system by exploiting vulnerabilities in file handling mechanisms.</p>

            {/* Saat Bazlı File Download Saldırı Grafiği */}
            <div className="flex justify-center items-start gap-8">
                <AttackChart attackType="file-download" />
                <AttackInsights attackType="file-download" />
            </div>

            {/* En çok saldırı yapılan ülkeler ve indirilen dosyalar */}
            <div className="flex justify-center gap-8">
                <TopList 
                    attackType="file-download" 
                    endpoint="top-files" 
                    title="Top Downloaded Files" 
                    columns={[
                        { title: "File", dataIndex: "destfile", key: "destfile" },
                        { title: "Count", dataIndex: "count", key: "count" } // Count Sütunu Eklendi
                    ]}
                />
                <TopList 
                    attackType="file-download" 
                    endpoint="top-countries" 
                    title="Top Attacking Countries" 
                    columns={[
                        { title: "Country", dataIndex: "country", key: "country" },
                        { title: "Count", dataIndex: "count", key: "count" } // Count Sütunu Eklendi
                    ]}
                />
            </div>
        </div>
    );
};

export default FileDownloadComponent;
