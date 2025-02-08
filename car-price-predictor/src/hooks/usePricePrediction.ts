import { useState } from "react";

interface PredictionData {
    make: string
    model_name: string
    subtype: string
    car_age: number
    bodyType: string
    fuel: string
    power_ps: number
    mileage: number
}

export function usePricePrediction() {
    const [isPredicting, setIsPredicting] = useState(false);
    const [predictedPrice, setPredictedPrice] = useState< {from: number; to:number} | null>(null);

    const predictPrice = async (data: PredictionData) => {
        setIsPredicting(true);
        try{
            const response = await fetch("https://car-price-prediction-4j5ivpj3ta-ew.a.run.app/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            })
            const result = await response.json();
            if (result.predicted_price) {
                const fromPrice = Math.round((result.predicted_price * 0.75) / 100) * 100
                const toPrice = Math.round((result.predicted_price * 0.85) / 100) * 100
                setPredictedPrice({ from: fromPrice, to: toPrice })
                console.log("Predicted price:", result.predicted_price)
              } else {
                console.error("Error predicting price:", result.error)
                setPredictedPrice(null)
              }
        }
        catch (error) {
            console.error("Prediction failed", error);
        }
        finally {
            setIsPredicting(false);
        }
    }

    return { isPredicting, predictedPrice, predictPrice }
}
