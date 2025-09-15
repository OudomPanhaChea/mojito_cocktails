import gsap from 'gsap'
import './App.css'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <div className='flex-center h-[100vh]'>
      <h1 className='text-4xl'>Hello, GSAP</h1> 
    </div>
  )
}

export default App
