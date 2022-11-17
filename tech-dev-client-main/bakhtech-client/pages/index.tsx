import type { NextPage } from 'next'
import Main from '../components/layout/Main/Main'
import Services from '../components/layout/Services/Services'
import Team from '../components/layout/Team/Team'
import About from '../components/layout/About/About'
import Technologies from '../components/layout/Technologies/Technologies'

const Home: NextPage = () => {
  return (
    <>
      <Main />
      <Technologies />
      <Services/>
      <About/>
      <Team/>
    </>
  )
}
export default Home
