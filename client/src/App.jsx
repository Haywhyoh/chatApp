import { useState } from 'react';
import RegisterAndLoginForm from './RegisterandLogin';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-red-500'>
        <RegisterAndLoginForm />
    </div>
  )
}

export default App
