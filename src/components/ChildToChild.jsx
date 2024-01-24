
/* DATA CONTEXT */
import { createContext, useContext, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [sharedData, setSharedData] = useState(null);

    const updateSharedData = (newData) => {
        setSharedData(newData);
    }

    return (
        <DataContext.Provider value={{sharedData, updateSharedData}}>
            {children}
        </DataContext.Provider>
    )
}

const useData = () => {
    const context = useContext(DataContext);
    if(!context) throw new Error('useData debe estar dentro del proveedor DataProvider');
    return context;
};


/* PADRE */
export const ChildToChild = () => {
    return (
        <div className="card card-body">
            <DataProvider>
                <h5>Componente Padre</h5>
                <div className="row">
                    <div className="col-lg-6">
                        <Child1 />
                    </div>
                    <div className="col-lg-6">
                        <Child2 />
                    </div>
                </div>
            </DataProvider>
        </div>
    )
}

/* HIJO1 */

const Child1 = () => {
    const {sharedData, updateSharedData} = useData();
    return (
        <div className="card card-body">
            <h1>Componente Hijo 1</h1>
            <p className="alert small alert-warning">{sharedData}</p>
            <button className="btn btn-success" onClick={() => updateSharedData('Hola desde el hijo 1')}>Cambiar valor</button>
        </div>
    )
}

/* HIJO2 */

const Child2 = () => {

    const {sharedData, updateSharedData} = useData();
    return (
        <div className="card card-body">
            <h1>Componente Hijo 2</h1>
            <p className="alert small alert-warning">{sharedData}</p>
            <button className="btn btn-success" onClick={() => updateSharedData('Hola desde el hijo 2')}>Cambiar valor</button>
        </div>
    )
}