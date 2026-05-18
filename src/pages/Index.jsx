import Nav from '../components/Nav'
import Footer from '../components/Footer'

function FeatureChase() {
  return (
    <div>
      <div>
        <h2>Cut to the chase!</h2>
        <p>No more long videos, boil it down to the essentials! Find videos for your specific problems to work faster and more efficient than ever!</p>
      </div>
      <div><img /></div>
    </div>
  )
}

function FeatureInteractive() {
  return (
    <div>
      <div><img /></div>
      <div>
        <h2>Interactive problem solving</h2>
        <p>Get interactive tasks from the lessons you encounter as well as explanations for the given task at hand!</p>
      </div>
    </div>
  )
}

function Cards() {
  return (
    <>
      <div>
        <div>
          <img alt='Personalized icon' src='/src/assets/personalized.svg'/>
          <h2>Personalized</h2>
          <p>Have algorithms recommend topics and tasks best fit for your needs!</p>
        </div>
        <div>
          <img alt='Efficient icon' src='/src/assets/speed.svg'/>
          <h2>Efficient</h2>
          <p>Efficient by design, remove friction with natural workflows that accelerate learning!</p>
        </div>
        <div>
          <img alt='Intuitive icon' src='/src/assets/star.svg'/>
          <h2>Intuitive</h2>
          <p>Make learning intuitive by having custom curriculums for your needs!</p>
        </div>
      </div>
    </>
  )
}

function Hero() {
  return (
    <div>
      <div>
        <h1>Learn Better Faster</h1>
        <p>Scrollarship is a platform tailored for people wanting to improve their academic performance through engaging and interactive learning</p>
        <button className='heroButton'>
          <NavLink to='/explore' state={{ signUp: true }}>Get Started</NavLink>
        </button>
      </div>
      <div>
        <img src='/src/assets/scrolling.svg' />
      </div>
    </div>
  )
}

function Index() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Cards />
        <FeatureInteractive />
        <FeatureChase />
      </main>
      <Footer />
    </>
  )
}

export default Index
