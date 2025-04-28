'use client'

import { useState, useEffect, use } from "react";
import { fetchWithToken } from "@/lib/fetchWithToken";

export default function Home() {
    const url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
    const [materials, setMaterials] = useState([]);
    
    useEffect(() => {
        async function fetchMaterials() {
            try {
                const response = await fetchWithToken(`/materials`)
    
                if(!response.ok){
                    console.error('gagal banh')
                    return;
                }
    
                const data = await response.json();
                
                setMaterials(data);
            } catch (error) {
                console.error('Error fetching materials:', error);
            }
        }
        fetchMaterials();
    }, [url]);

    
    return ('')
}