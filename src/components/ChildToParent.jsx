import { useState } from "react";

export const ChildToParent = () => {

    const [data, setData] = useState([]);

    const handleData = (newData) => {
        setData([...data, newData]);
    }

    return (
        <div className="card card-body">
            <h1>Child to Parent</h1>
            <Child handleData={handleData} />
            <ol>
                {
                    data.map((item, index) => <li key={index}>{item}</li>)
                }
            </ol>
        </div>
    )
}

const Child = ({ handleData }) => {
    
    const [dataInput, setDataInput] = useState('');

    const sendData = () => {
        if(dataInput.trim() === '') {
            alert('El campo no puede estar vacío');
            return;
        };
        
        handleData(dataInput);
        setDataInput('');
    }


    return (
        <div className="card card-body">
            <h5>Componente hijo</h5>
            <div className="row">
                <div className="col-md-8">
                    <input type="text" className="form-control my-2" value={dataInput} onChange={(e) => setDataInput(e.target.value)} />
                </div>
                <div className="col-md-4">
                <button className="btn btn-success my-2" onClick={sendData}>Send data</button>
                </div>
            </div>
            
            
        </div>
    )
}
