import {Button, Calculator} from './Calculator';
import { useState } from 'react';

export default function Body() {
    const [input, setInput] = useState<string>("");

    const handleButtonClick = (value: string) => {
        setInput((prevInput) => prevInput + value);
    };

    const handleClear = () => {
        setInput("");
    };

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput("Error");
        }
    };

    const ops = [
        {sign : "÷", value : "/"},
        {sign : "×", value : "*"},
        {sign : "-", value : "-"},
        {sign : "=", value : "="},
        {sign : "+", value : "+"},
    ]

    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="w-96">      
                <div className="bg-[#7e7b75] h-16 flex items-center justify-end px-4 text-3xl">
                    {input}
                </div>

                <div className="grid grid-cols-[1fr_100px] h-140 gap-0.5">
                    <div className="grid grid-cols-3 gap-0.5">
                        <Button onClick={handleClear} value="AC" />
                        <Button value="+/-" />
                        <Button onClick={() => handleButtonClick("%")} value="%"/>
                        
                        <Button onClick={() => handleButtonClick("7")} value={7} />
                        <Button onClick={() => handleButtonClick("8")} value={8} />
                        <Button onClick={() => handleButtonClick("9")} value={9} />
                            
                        <Button onClick={() => handleButtonClick("4")} value={4} />
                        <Button onClick={() => handleButtonClick("5")} value={5} />
                        <Button onClick={() => handleButtonClick("6")} value={6} />

                        <Button onClick={() => handleButtonClick("1")} value={1} />
                        <Button onClick={() => handleButtonClick("2")} value={2} />
                        <Button onClick={() => handleButtonClick("3")} value={3} />

                        <div className='flex gap-0.5'>
                            <Button className='px-21.5' onClick={() => handleButtonClick("0")} value={0} />
                            <Button className='px-11' onClick={() => handleButtonClick(".")} value="." />
                        </div>

                    </div>

                
                    <div className=" grid grid-col-4 gap-0.5">
                        {ops.map((item) => {
                            return <Calculator key={item.sign} sign={item.sign} onClick = {item.value === "=" ? handleCalculate : () => handleButtonClick(item.value)}/>
                        })}

                        {/* <Calculator sign="+" onClick={() => handleButtonClick("+")} />
                        <Calculator sign="-" onClick={() => handleButtonClick("-")} />
                        <Calculator sign="X" onClick={() => handleButtonClick("*")} />
                        <Calculator sign="/" onClick={() => handleButtonClick("/")} />
                        <Calculator sign="=" onClick={handleCalculate} /> */}

                    </div>

                </div>
            </div>
        </div>
    );
}