const celciusInput = document.getElementById('celcius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

const inputs = document.getElementsByClassName('input');

for(let x = 0; x < inputs.length; x++){
    let input = inputs[x];

    input.addEventListener('input', function(e){
        let value = parseFloat(e.target.value);

        switch (e.target.id) {
            case 'celcius':
                fahrenheitInput.value = (value * 1.8) + 32;
                kelvinInput.value = value + 273.15;
                break;
            case 'fahrenheit':
                celciusInput.value = (value - 32) / 1.8;
                kelvinInput.value = ((value - 32) / 1.8) + 273.15
                break;
            case 'kelvin':
                celciusInput.value = value - 273.15;
                fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
                break;
        
            default:
                break;
        }
    });
}


// Formula

// C - F = (C * 1.8) + 32
// C - K = C + 273.15

// F - C = (F - 32) / 1.8
// F - K = ((F - 32) / 1.8) + 273.15

// K - C = K - 273.15
// K - F = ((K - 273.15) * 1.8) + 32