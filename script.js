document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("bmiForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const weight = parseFloat(document.getElementById('weight').value);
        const heightFeet = parseInt(document.getElementById('height-feet').value);
        const heightInches = parseInt(document.getElementById('height-inches').value);

        if (weight > 0 && heightFeet > 0) {
            
            const heightInMeters = (heightFeet * 12 + heightInches) * 0.0254;

            const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2); 
            const resultElement = document.getElementById('result');

            let category = "";
            if (bmi < 18.5) {
                category = "Underweight ";
            } else if (bmi < 24.9) {
                category = "Normal Weight ";
            } else if (bmi < 29.9) {
                category = "Overweight ";
            } else {
                category = "Obese";
            }

            resultElement.innerHTML = `Your BMI: <b>${bmi}</b> <br> Category: <b>${category}</b>`;
        } else {
            document.getElementById('result').innerHTML = "Please enter valid values!";
        }
    });
});