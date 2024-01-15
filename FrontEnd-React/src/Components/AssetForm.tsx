import React, { useState } from 'react'

const AssetForm: React.FC = () => {
  const [value, setValue] = useState<number>(0);


  const handleInsert = async () => {
    const response = await apiService.insertAsset(value);
  };



  return (
    <div>AssetForm</div>
  )
}




export default AssetForm;