import '../App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import IllustrationSignUpDesktop from '../assets/img/illustration-sign-up-desktop'

export function Home () {

  const[email, setEmail] = useState('')
  const [validate, setValidate] = useState(true)

  useEffect(() => {
    login()
  },[email])

  const handleInput = (ev) => {
    setEmail(ev.target.value)
  }

  const login = () => {
    if(email.includes('@company.com') && email.length > 14) setValidate(true)
    else if(email.length == 0) setValidate(true)
    else setValidate(false)
  }

  return (
    <main>
    <section className='section-text'>
      <h1>Stay update!</h1>
      <p>
        Join 60,000+ product managers receiving monthly updates on:
      </p>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a sucess</li>
        <li>And much more!</li>
      </ul>

      <form 
        onSubmit={ev => {
          ev.preventDefault()
        }}
      >
        <div className='wrapped-message-email'>
          <span>Email address</span>
          {
            !validate && <span className='message-required'>Valid email required</span>
          }
        </div>
        <input
          placeholder='email@company.com'
          type='email'
          name='email'
          autoComplete='off'
          value={email}
          onChange={handleInput}
          className={ !validate ? 'Red-input' : '' }
        />
        <button
          type='submit'
          className={ !validate ? 'Disabled-button' : ''}
        >
          <Link to='/success' state={{ email: email }} >
            Subscrite to monthly newsletter
          </Link>
        </button>
      </form>

    </section>
    <section className='section-img'>
      <IllustrationSignUpDesktop />
    </section>
  </main>
  )
}
