import React, { useState } from 'react'
import { apiService } from '../Services/apiService';

const AssetForm: React.FC = () => {
  const [value, setValue] = useState<number>(0);


  const handleInsertAsset = async () => {
   await apiService.insertAsset(value);
  };

  return (
    <div>
      <h2>AssetForm</h2>
      <input 
      type="number"
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
      />
      <button onClick={handleInsertAsset}>Insert Asset</button>
      </div>
  )
}




export default AssetForm;