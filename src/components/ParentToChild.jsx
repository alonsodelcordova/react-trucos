import { useState } from "react"

export const ParentToChild = () => {
    const [text, setText] = useState('Texto desde el padre')
    return (
        <div className="card card-body">
            <h5>Componente Padre</h5>
            <Child text={text} />
        </div>
    )
}

const Child = (props) => {
    return (
        <div className="card card-body">
            <h5>Componente HIJO</h5>
            <h6>{props.text}</h6>
        </div>
    )
}