import React, { useState, Dispatch, SetStateAction } from "react";
import { Row, Col } from "antd";
import { carMakes, carModels } from "../../data/carData";
import { usePricePrediction } from "../../hooks/usePricePrediction";
import { ContactContainer, FormGroup, ButtonContainer } from "./styles";

interface CarValuationFormProps {
  setIsPredicting: (value: boolean) => void;
  setPredictedPrice: Dispatch<SetStateAction<{from: number, to: number} | null>>;
}

export default function CarValuationForm({ setIsPredicting, setPredictedPrice }: CarValuationFormProps) {
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
        <ContactContainer>
            <Row justify="space-between" align="middle">
                <Col lg={24} md={24} sm={24} xs={24}>
                    <FormGroup onSubmit={handleSubmit}>
                        <h2 className="title">Autoankauf</h2>
                        <p className="subtitle">Finden Sie den Wert Ihres Fahrzeugs</p>
                        
                        <div className="form-elements">
                            <div className="form-item">
                                <select name="make" id="make" value={Make} onChange={handleMakeChange}>
                                    <option value="">Marke auswählen</option>
                                    {carMakes.map((make) => (
                                        <option key={make.id} value={make.name}>{make.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-item">
                                <select name="model" id="model" value={Model} onChange={handleModelChange} disabled={!Make}>
                                    <option value="">Modell auswählen</option>
                                    {carModels[Make]?.map((model) => (
                                        <option key={model} value={model}>{model}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-item">
                                <select name="modelDetail" id="modelDetail" value={ModelDetail} onChange={handleModelDetailChange} disabled={!Make}>
                                    <option value="">Modell-Detail auswählen</option>
                                    <option value="116i">116i</option>
                                    <option value="118i">118i</option>
                                    <option value="120i">120i</option>
                                </select>
                            </div>

                            <div className="form-item">
                                <select name="year" id="year" value={year} onChange={handleYearChange} disabled={!Model}>
                                    <option value={0}>Baujahr auswählen</option>
                                    <option value={2010}>2010</option>
                                    <option value={2011}>2011</option>
                                </select>
                            </div>

                            <div className="form-item">
                                <select name="bodyType" id="bodyType" value={bodyType} onChange={handleBodyTypeChange} disabled={!year}>
                                    <option value="">Karosserieform auswählen</option>
                                    <option value="Limousine">Limousine</option>
                                    <option value="Kombi">Kombi</option>
                                </select>
                            </div>

                            <div className="form-item">
                                <select name="fuel" id="fuel" value={fuel} onChange={handleFuelChange} disabled={!bodyType}>
                                    <option value="">Kraftstoff auswählen</option>
                                    <option value="Benzin">Benzin</option>
                                    <option value="Diesel">Diesel</option>
                                </select>
                            </div>

                            <div className="form-item">
                                <select name="transmission" id="transmission" value={transmission} onChange={handleTransmissionChange} disabled={!fuel}>
                                    <option value="">Getriebe auswählen</option>
                                    <option value="Automatik">Automatik</option>
                                    <option value="Schaltgetriebe">Schaltgetriebe</option>
                                </select>
                            </div>

                            <div className="form-item">
                                <input 
                                    type="number" 
                                    id="power" 
                                    placeholder="Leistung (PS)"
                                    value={power} 
                                    onChange={handlePowerChange} 
                                    disabled={!transmission} 
                                />
                            </div>

                            <div className="form-item">
                                <input 
                                    type="number" 
                                    id="mileage" 
                                    placeholder="Kilometerstand"
                                    value={mileage} 
                                    onChange={(e) => setMileage(Number(e.target.value))} 
                                    disabled={!power} 
                                />
                            </div>

                            <ButtonContainer>
                                <button type="submit" disabled={!mileage}>
                                    Berechnen
                                </button>
                            </ButtonContainer>
                        </div>
                    </FormGroup>
                </Col>
            </Row>
        </ContactContainer>
    );
} 