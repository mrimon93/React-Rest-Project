import React from 'react'

const API_BASE_URL = 'http://localhost:7299/api';

export const apiService = {
  
  insertAsset: async (value:number) => {
    const response = await fetch(`${API_BASE_URL}/transactions/insertAsset`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value }),
    });
    return response.json();
  },

  insertLiability: async (value: number) => {
    const response = await fetch(`${API_BASE_URL}/transactions/insertLiability`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({ value }), 
    });

    return response.json();
  },

  getCurrentDay: async () => {
    const response = await fetch(`${API_BASE_URL}/transactions/getCurrentDay`);
    return response.json()
  },
};