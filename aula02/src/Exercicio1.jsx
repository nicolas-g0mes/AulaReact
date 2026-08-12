export default function Exercicio1({fahrenheit}) 
{
    let celsius = (fahrenheit-32)*5/9;
    
    return (
        <div>
            <p>
                A temperatura {fahrenheit}°F foi convertida em {celsius}°C
            </p>
        </div>
    );
}