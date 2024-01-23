import React, { useState } from 'react';

function BmiCalculator() {
    const [heightValue, setHeightValue] = useState('');
    const [weightValue, setWeightValue] = useState('');
    const [bmiValue, setBmiValue] = useState('');
    const [bmiMessage, setBmiMessage] = useState('');

    const calculateBmi = () => {
        if (heightValue && weightValue) {
            const heightInMeters = heightValue / 100;
            const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2);
            setBmiValue(bmi);

            let message = '';
            if (bmi < 18.5) {
                message = 'You are Underweight';
            } else if (bmi >= 18.5 && bmi < 25) {
                message = 'You are Normal weight';
            } else if (bmi >= 25 && bmi < 30) {
                message = 'You are Overweight';
            } else {
                message = 'You are Obese';
            }
            setBmiMessage(message);
        } else {
            setBmiValue('');
            setBmiMessage('');
        }
    };

    return (
        <div className="container">
            <br></br>
            <h1>Calculate your BMI</h1>
            <div className="input-container">
                <label htmlFor="height" style={{color:"#f5f5f5"}}>Enter Your Height (cm):</label>
                <input
                    type="number"
                    id="height"
                    value={heightValue}
                    onChange={(e) => setHeightValue(e.target.value)}
                />
            </div>
            <br></br>
            <div className="input-container">
                <label htmlFor="weight" style={{color:"#f5f5f5"}}>Enter Your Weight (kg):</label>
                <input
                    type="number"
                    id="weight"
                    value={weightValue}
                    onChange={(e) => setWeightValue(e.target.value)}
                />
            </div>
            <br></br>
            <a className="shot" href="#!" onClick={calculateBmi}>
                Click to Calculate BMI
            </a>
            
            {bmiValue && bmiMessage && (
                
                <div className="result">
                    <br></br>
                    <p>
                        Your BMI: <span className="bmi-value">{bmiValue}</span>
                    </p>
                    <p>
                        Result: <span className="bmi-message">{bmiMessage}</span>
                    </p>
                </div>
            )}
        </div>
    );
}

export default BmiCalculator;
