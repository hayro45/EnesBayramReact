import {useState} from 'react'
import './converter.css'
import axios from 'axios';

const BASE_URL = 'https://api.freecurrencyapi.com/v1/latest?apikey=';
const API_KEY = import.meta.env.VITE_API_KEY;
const FULL_URL = BASE_URL + API_KEY;

function CurrencyConverter() {

    const [amount, setAmount] = useState('')
    const [fromCurrency, setFromCurrency] = useState('USD')
    const [toCurrency, setToCurrency] = useState('TRY')
    const [result, setResult] = useState(null)

    

    const handleConvert = async () => {
        if (!amount && !fromCurrency && !toCurrency) return;
        const response = await axios.get(`${FULL_URL}&base_currency=${fromCurrency}`);
        setResult(amount * response.data.data[toCurrency]);
    }

    return (
        <div className='currency-container'>
            <div className='title'>Döviz Dönüştürücü</div>
            <input 
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                name='amount' type="number" className='amount-input' placeholder='Miktarı Girin' />
            <div className='select-groups'>
                <select onChange={(e)=>setFromCurrency(e.target.value)} className='from-currency-select'>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                </select>

                <select onChange={(e)=>setToCurrency(e.target.value)} className='to-currency-select'>
                    <option value="TRY">TRY</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
            <button onClick={handleConvert} className='convert-button'>Dönüştür</button>
            <div className='result-display'>
                Sonuç: {result !== null ? `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}` : ''}
            </div>

        </div>
    )
}

export default CurrencyConverter
