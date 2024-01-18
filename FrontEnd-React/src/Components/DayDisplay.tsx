import React, { useEffect, useState } from 'react'
import { apiService } from '../Services/apiService';

const DayDisplay: React.FC = () => {
  const [currentDay, setCurrentDay] = useState<number>(0);

  const fetchCurrentDay = async () => {
    const result = await apiService.getCurrentDay();
    setCurrentDay(result.day)
  }

  useEffect(() => {
    fetchCurrentDay();
  } [])



  return (
    <div>
      <h2>Current Day</h2>
      <p>[currentDay]</p>
    </div>
  )
}

export default DayDisplay