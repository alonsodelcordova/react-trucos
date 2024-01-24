import { ParentToChild } from './components/ParentToChild'
import { ChildToParent } from './components/ChildToParent'
import { ChildToChild } from './components/ChildToChild'

function App() {

  return (
    <div className='container my-3'>
      <h2>Comunicación de Componentes en REACT JS</h2>
      <h4>De padre a HIJO</h4>
      <ParentToChild />
      <br />
      <h4>De Hijo a Padre</h4>
      <ChildToParent />
      <br />
      <h4>De Hijo A Hijo</h4>
      <ChildToChild />
    </div>
  )
}

export default App
