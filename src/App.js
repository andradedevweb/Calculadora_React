import React, { useState } from 'react';
import '../src/index.css';

function Calculadora() {
    const [visor, setVisor] = useState('');

    const handleButtonClick = (value) => {
        setVisor(visor + value);
    };

    const reset = () => {
        setVisor('');
    };

    const calcula = () => {
        try {
            const resultado = eval(visor);
            setVisor(resultado.toString());
        } catch (error) {
            setVisor('Erro');
        }
    };

    return (
        <div>
            <div id="calculadora">
                <input type="text" id="visor" name="visor" value={visor} readOnly />
                <div id="primeira">
                    <input type="button" value="7" className="botao borda" onClick={() => handleButtonClick('7')} />
                    <input type="button" value="8" className="botao borda" onClick={() => handleButtonClick('8')} />
                    <input type="button" value="9" className="botao borda" onClick={() => handleButtonClick('9')} />
                    <input type="button" value="/" className="botao borda" onClick={() => handleButtonClick('/')} />
                </div>
                <div id="segunda">
                    <input type="button" value="4" className="botao borda" onClick={() => handleButtonClick('4')} />
                    <input type="button" value="5" className="botao borda" onClick={() => handleButtonClick('5')} />
                    <input type="button" value="6" className="botao borda" onClick={() => handleButtonClick('6')} />
                    <input type="button" value="*" className="botao borda" onClick={() => handleButtonClick('*')} />
                </div>
                <div id="terceira">
                    <input type="button" value="1" className="botao borda" onClick={() => handleButtonClick('1')} />
                    <input type="button" value="2" className="botao borda" onClick={() => handleButtonClick('2')} />
                    <input type="button" value="3" className="botao borda" onClick={() => handleButtonClick('3')} />
                    <input type="button" value="-" className="botao borda" onClick={() => handleButtonClick('-')} />
                </div>
                <div id="quarta">
                    <input type="button" value="C" className="botao borda" onClick={reset} />
                    <input type="button" value="0" className="botao borda" onClick={() => handleButtonClick('0')} />
                    <input type="button" value="=" className="botao borda" onClick={calcula} />
                    <input type="button" value="+" className="botao borda" onClick={() => handleButtonClick('+')} />
                </div>
            </div>
        </div>
    );
}

export default Calculadora;