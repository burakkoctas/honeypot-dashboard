import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/analyze"; // API'nin temel adresi

export const fetchAttackDistribution = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/attack-distribution`);
        return response.data;
    } catch (error) {
        console.error("API ERROR:", error);
        return null;
    }
};

export const fetchAttackRatios = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/attack-ratios`);
        return response.data;
    } catch (error) {
        console.error("API ERROR:", error);
        return null;
    }
};

export const fetchTopBruteForceCombinations = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/brute-force/top-combinations`);
        return response.data;
    } catch (error) {
        console.error("API ERROR:", error);
        return [];
    }
};

export const fetchBruteForceByHour = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/brute-force/by-hour`);
        return response.data;
    } catch (error) {
        console.error("API ERROR:", error);
        return {};
    }
};

export const fetchTopBruteForceCountries = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/brute-force/top-countries`);
        return response.data;
    } catch (error) {
        console.error("API ERROR:", error);
        return [];
    }
};


export const fetchTopSuccessfulBruteForce = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/brute-force/top-successful`);
        return response.data;
    } catch (error) {
        console.error("API ERROR:", error);
        return null;
    }
};

export const fetchTopFailedBruteForce = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/brute-force/top-failed`);
        return response.data;
    } catch (error) {
        console.error("API ERROR:", error);
        return null;
    }
};

export const fetchLoginSuccessRate = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/login-success-rate`);
        return response.data;
    } catch (error) {
        console.error("API ERROR:", error);
        return null;
    }
};

// Dictionary Attack API Fonksiyonları
export const fetchTopDictionaryAttackCountries = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/dictionary-attack/top-countries`);
        return response.data;
    } catch (error) {
        console.error("API ERROR:", error);
        return [];
    }
};

export const fetchTopDictionaryAttackCombinations = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/dictionary-attack/top-combinations`);
        return response.data;
    } catch (error) {
        console.error("API ERROR:", error);
        return [];
    }
};

export const fetchDictionaryAttackByHour = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/dictionary-attack/by-hour`);
        return response.data;
    } catch (error) {
        console.error("API ERROR:", error);
        return {};
    }
};

export const fetchDictionaryAttackSuccessRate = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/login-success-rate`);
        return response.data;
    } catch (error) {
        console.error("API ERROR:", error);
        return null;
    }
};

export const fetchTopSuccessfulDictionaryAttack = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/dictionary-attack/top-successful`);
        return response.data;
    } catch (error) {
        console.error("API ERROR:", error);
        return null;
    }
};

export const fetchTopFailedDictionaryAttack = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/dictionary-attack/top-failed`);
        return response.data;
    } catch (error) {
        console.error("API ERROR:", error);
        return null;
    }
};

// Dinamik API Çağrısı
export const fetchAttackData = async (attackType, endpoint) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/${attackType}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error(`API ERROR (${attackType}/${endpoint}):`, error);
        return null;
    }
};
// **Attacker Login Success API'sini Çağırma**
export const fetchAttackerLoginSuccess = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/attacker-login-success`);
        return response.data;
    } catch (error) {
        console.error("API ERROR (attacker-login-success):", error);
        return null;
    }
};

export const fetchSessionProtocols = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/analyze/session-connect/top-protocols");
        return response.data;
    } catch (error) {
        console.error("API ERROR (session-connect/top-protocols):", error);
        return [];
    }
};

export const fetchCommandInjectionByHour = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/analyze/command-injection/by-hour");
        return response.data;
    } catch (error) {
        console.error("API ERROR (command-injection/by-hour):", error);
        return {};
    }
};

export const fetchCommandInjectionTopInputs = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/analyze/command-injection/top-inputs");
        return response.data;
    } catch (error) {
        console.error("API ERROR (command-injection/top-inputs):", error);
        return [];
    }
};

export const fetchCommandInjectionTopCountries = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/analyze/command-injection/top-countries");
        return response.data;
    } catch (error) {
        console.error("API ERROR (command-injection/top-countries):", error);
        return [];
    }
};

export const fetchAttackByHour = async (attackType) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/analyze/${attackType}/by-hour`);
        return response.data;
    } catch (error) {
        console.error(`API ERROR (${attackType}/by-hour):`, error);
        return {};
    }
};

export const fetchTopList = async (attackType, endpoint) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/analyze/${attackType}/${endpoint}`);
        return response.data;
    } catch (error) {
        console.error(`API ERROR (${attackType}/${endpoint}):`, error);
        return [];
    }
};
