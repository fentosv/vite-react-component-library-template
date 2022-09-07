import { useState } from 'react'

import { Button } from '@components'
// import { Button } from 'vite-react-component-library-template'


function App() {

  const [count, setCount] = useState<number>(0)

  return (
    <main className="body">
      <div className="card">
        <a href="https://github.com/fentosv" target="_blank">
          <img src="logo.svg" className='card__logo' alt="logo" />
        </a>
        <h1 className='card__title'>Test your component here</h1>
      </div>

      <div className='container'>

        <Button
          text='Click'
          onClick={() => setCount(count + 1)}
        />

        <p className='container__text'>
          The current counter is: &nbsp;
          <em>
            {count.toString()}
          </em>
        </p>
      </div>
    </main>
  )
}

export default App
