'use client'

import { useState, useEffect, use } from "react";
import { useParams } from "next/navigation";
import { fetchWithToken } from "@/lib/fetchWithToken";

export default function Home() {
    const { id } = useParams();
    const [materials, setMaterials] = useState([]);
    
    useEffect(() => {
        async function fetchMaterials() {
            try {
                const response = await fetchWithToken(`/materials/${id}`)
    
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
    }, [id]);

    
    return ('')
}