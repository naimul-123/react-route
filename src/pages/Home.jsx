import Hero from '../components/hero/Hero'
import wave from '../assets/wave.svg'

const Home = () => {
  return (
    <div className='relative'>
        <Hero></Hero>
        <img src={wave} alt="" className='absolute bottom-0 w-full' />
    </div>
  )
}

export default Home