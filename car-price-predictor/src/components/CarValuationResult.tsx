import React from "react";

export default function CarValuationResult({ isPredicting, predictedPrice }) {
    if (isPredicting && predictedPrice === null) {
        return <div className="alert alert-info text-center">Berechnung läuft...</div>;
    }

    if (predictedPrice === undefined || predictedPrice === null) {
        return <div className="alert alert-secondary text-center">Noch keine Berechnung durchgeführt.</div>;
    }

    return (
        <div className="alert alert-success text-center mt-4">
            <h4>Geschätzter Preis:</h4>
            <h4>{predictedPrice.from} € bis {predictedPrice.to} </h4>
        </div>
    );
}
