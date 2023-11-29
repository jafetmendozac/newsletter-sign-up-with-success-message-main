import IconSuccess from '../assets/img/icon-success.jsx'
import '../App.css'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export function Success () {
  
  let { state } = useLocation();

  return (
    <main>
      <section className='text-subscribe'>
        <IconSuccess />
        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to
          <span> { state.email } </span>Please open it and click
          the button inside to confirm your subscription.
        </p>
        <button>
          <Link to='/'>
            Dimiss message
          </Link>
        </button>
      </section>
    </main>
  )
}
