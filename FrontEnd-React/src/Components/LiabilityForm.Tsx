import React, { useState } from 'react'
import { apiService } from '../Services/apiService';

const LiabilityForm = () => {
  const [value, setValue] = useState<number>(0);

  const handleInsertLiability = async () => {
    await apiService.insertLiability(value);
  }
 
  return (
    <div>
      <h2>LiabilityForm</h2>
      <input 
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={handleInsertLiability}>Insert Asset</button>
    </div>
  )
}

export default LiabilityForm