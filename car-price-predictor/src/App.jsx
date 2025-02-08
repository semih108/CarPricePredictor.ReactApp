import './App.css'
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CarValuationForm from './components/CarValuationForm';
import CarValuationResult from './components/CarValuationResult';

function App() {

  const [isPredicting, setIsPredicting] = useState(false)
  const [predictedPrice, setPredictedPrice] = useState(null)

  useEffect(() => {}, [predictedPrice])

  return (
    <div className='row'>
      <div className='col-md-6'>
        <CarValuationForm setIsPredicting={setIsPredicting} setPredictedPrice={setPredictedPrice}/>
      </div>
      <div className='col-md-6'>
        <CarValuationResult isPredicting={isPredicting} predictedPrice={predictedPrice}/>
      </div>
    </div>
  )
}

export default App
