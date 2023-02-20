import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetch(url);
                const result = await data.json();
                if (result) {
                    setData(result);
                    setLoading(false);
                }
            } catch (e) {
                setError(e.message);
                setLoading(false);
            }
        }
        setLoading(true);
        fetchData();
    }, [url]);

    return [loading, error, data];
}
