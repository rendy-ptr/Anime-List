import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useFetchDetailManga = () => { 
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { mal_id } = useParams();
    const baseUrl = import.meta.env.VITE_API_URL
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`${baseUrl}/manga/${mal_id}/full`);
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            setData(result.data);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
        };
        fetchData();
    }, [mal_id]);
    return { data, error, isLoading };
};

export default useFetchDetailManga;