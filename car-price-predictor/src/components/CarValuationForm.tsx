import React, { useState } from "react";
import { carMakes, carModels } from "../data/carData";
import { usePricePrediction } from "../hooks/usePricePrediction";

export default function CarValuationForm({setIsPredicting, setPredictedPrice}) {
    const [Make, setMake] = useState("");
    const [Model, setModel] = useState("");
    const [ModelDetail, setModelDetail] = useState("");
    const [year, setYear] = useState(0);
    const [bodyType, setBodyType] = useState("");
    const [fuel, setFuel] = useState("");
    const [transmission, setTransmission] = useState("");
    const [power, setPower] = useState(0);
    const [mileage, setMileage] = useState(0);

    const {predictPrice, isPredicting, predictedPrice} = usePricePrediction();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const currentYear = new Date().getFullYear()
        const data = {
          make: Make,
          model_name: Model,
          subtype: ModelDetail,
          car_age: currentYear - year,
          bodyType: bodyType,
          mileage: mileage,
          transmission,
          fuel,
          power_ps: power,
        }
        
        setIsPredicting(true);
        predictPrice(data).then(() => {
            setIsPredicting(false);
            setPredictedPrice(predictedPrice);
        });

        console.log("Form submitted", data);
    };

    const handleMakeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setMake(e.target.value);
        setModel("");
        setYear(0);
        setBodyType("");
        setFuel("");
        setTransmission("");
        setPower(0);
        setMileage(0);
    };

    const handleModelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setModel(e.target.value);
        setModelDetail("");
        setYear(0);
        setBodyType("");
        setFuel("");
        setTransmission("");
        setPower(0);
        setMileage(0);
    };

    const handleModelDetailChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setModelDetail(e.target.value);
        setYear(0);
        setBodyType("");
        setFuel("");
        setTransmission("");
        setPower(0);
        setMileage(0);
    };

    const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setYear(Number(e.target.value));
        setBodyType("");
        setFuel("");
        setTransmission("");
        setPower(0);
        setMileage(0);
    };

    const handleBodyTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setBodyType(e.target.value);
        setFuel("");
        setTransmission("");
        setPower(0);
        setMileage(0);
    };

    const handleFuelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFuel(e.target.value);
        setTransmission("");
        setPower(0);
        setMileage(0);
    };

    const handleTransmissionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTransmission(e.target.value);
        setPower(0);
        setMileage(0);
    };

    const handlePowerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPower(Number(e.target.value));
        setMileage(0);
    };

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h2 className="card title mb-3">Autoankauf</h2>
        <form onSubmit={handleSubmit} className="container mt-4">
            {/* Marke */}
            <div className="mb-3">
                <label htmlFor="make" className="form-label">Marke</label>
                <select name="make" id="make" className="form-select" value={Make} onChange={handleMakeChange}>
                    <option value="">-- auswählen</option>
                    {carMakes.map((make) => (
                        <option key={make.id} value={make.name}>{make.name}</option>
                    ))}
                </select>
            </div>

            {/* Modell */}
            <div className="mb-3">
                <label htmlFor="model" className="form-label">Modell</label>
                <select name="model" id="model" className="form-select" value={Model} onChange={handleModelChange} disabled={!Make}>
                    <option value="">-- auswählen</option>
                    {carModels[Make]?.map((model) => (
                        <option key={model} value={model}>{model}</option>
                    ))}
                </select>
            </div>

            {/* Modell-Detail */}
            <div className="mb-3">
                <label htmlFor="modelDetail" className="form-label">Modell</label>
                <select name="modelDetail" id="modelDetail" className="form-select" value={ModelDetail} onChange={handleModelDetailChange} disabled={!Make}>
                    <option value="">-- auswählen</option>
                    <option value="116i">116i</option>
                    <option value="118i">118i</option>
                    <option value="120i">120i</option>
                </select>
            </div>

            {/* Baujahr */}
            <div className="mb-3">
                <label htmlFor="year" className="form-label">Baujahr</label>
                <select name="year" id="year" className="form-select" value={year} onChange={handleYearChange} disabled={!Model}>
                    <option value={0}>-- auswählen</option>
                    <option value={2010}>2010</option>
                    <option value={2011}>2011</option>
                </select>
            </div>

            {/* Karosserieform */}
            <div className="mb-3">
                <label htmlFor="bodyType" className="form-label">Karosserieform</label>
                <select name="bodyType" id="bodyType" className="form-select" value={bodyType} onChange={handleBodyTypeChange} disabled={!year}>
                    <option value="">-- auswählen</option>
                    <option value="Limousine">Limousine</option>
                    <option value="Kombi">Kombi</option>
                </select>
            </div>

            {/* Kraftstoff */}
            <div className="mb-3">
                <label htmlFor="fuel" className="form-label">Kraftstoff</label>
                <select name="fuel" id="fuel" className="form-select" value={fuel} onChange={handleFuelChange} disabled={!bodyType}>
                    <option value="">-- auswählen</option>
                    <option value="Benzin">Benzin</option>
                    <option value="Diesel">Diesel</option>
                </select>
            </div>

            {/* Getriebe */}
            <div className="mb-3">
                <label htmlFor="transmission" className="form-label">Getriebe</label>
                <select name="transmission" id="transmission" className="form-select" value={transmission} onChange={handleTransmissionChange} disabled={!fuel}>
                    <option value="">-- auswählen</option>
                    <option value="Automatik">Automatik</option>
                    <option value="Schaltgetriebe">Schaltgetriebe</option>
                </select>
            </div>

            {/* Leistung (PS) */}
            <div className="mb-3">
                <label htmlFor="power" className="form-label">Leistung (PS)</label>
                <input type="number" className="form-control" id="power" value={power} onChange={handlePowerChange} disabled={!transmission} />
            </div>

            {/* Kilometerstand */}
            <div className="mb-3">
                <label htmlFor="mileage" className="form-label">Kilometerstand</label>
                <input type="number" className="form-control" id="mileage" value={mileage} onChange={(e) => setMileage(Number(e.target.value))} disabled={!power} />
            </div>

            {/* Submit-Button */}
            <button type="submit" className="btn btn-primary" disabled={!mileage}>Berechnen</button>
        </form>
        </div>
        </div>
    );
}
