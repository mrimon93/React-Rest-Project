import { useState } from 'react';
import './App.css';
import AssetForm from './Components/AssetForm';
import LiabilityForm from './Components/LiabilityForm';
import DayDisplay from './Components/DayDisplay';

const App: React.FC = () => {
  return (
    <div>
      <h1>Financial Tracker </h1>
      <AssetForm />
      <LiabilityForm />
      <DayDisplay />
    </div>
  );
};

export default App;
