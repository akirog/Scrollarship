import Nav from './Nav'
import Hero from './Hero'
import Cards from './Cards'
import FeatureInteractive from './FeatureInteractive'
import FeatureChase from './FeatureChase'
import Footer from './Footer'

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
