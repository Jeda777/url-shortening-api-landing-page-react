import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { illustrationWorking, iconBrandRecognition, IconDetailedRecords, iconFullyCustomizable } from './assets'
import Footer from './components/Footer'

const App = () => {
  const [input, setInput] = useState('')
  const [list, setList] = useState([])
  const [isError, setIsError] = useState(false)

  const shorteningHandler = async () => {
    if (input === '') {
      setIsError(true)
      setTimeout(() => setIsError(false), 3000)
      return
    }
    let shortLink
    await fetch(`https://api.shrtco.de/v2/shorten?url=${input}`)
      .then((res) => res.json())
      .then((res) => (shortLink = res.result.short_link))
    setList([...list, { long: input, short: shortLink }])
    setInput('')
  }

  useEffect(() => {
    if (list.length === 0) {
      const saved = localStorage.getItem('list')
      if (saved !== null) setList(JSON.parse(saved))
    }
  }, [])

  useEffect(() => {
    if (list.length !== 0) localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  const changeCopyButton = (e) => {
    let element = e.currentTarget
    element.innerText = 'Copied!'
    element.classList.remove('bg-primary')
    element.classList.remove('hover:opacity-70')
    element.classList.add('bg-secondary')
    setTimeout(() => {
      element.innerText = 'Copy'
      element.classList.add('bg-primary')
      element.classList.add('hover:opacity-70')
      element.classList.remove('bg-secondary')
    }, 3000)
  }

  return (
    <div>
      <Navbar />

      <main className='text-center lg:text-left text-lg lg:text-xl bg-[#eff1f7]'>
        <section className='bg-white'>
          <div className='custom-container flex flex-col gap-10 pb-40 lg:pb-48 lg:flex-row lg:pt-24 relative'>
            <img
              src={illustrationWorking}
              alt='Illustration Working'
              className='max-w-none w-[150%] lg:absolute lg:h-[480px] lg:w-auto lg:left-[55%] xl:left-[60%] lg:top-12'
            />
            <div className='flex flex-col gap-6 items-center lg:items-start'>
              <h1 className='text-veryDarkBlue text-4xl font-bold lg:text-6xl lg:leading-tight max-w-[500px]'>
                More than just shorter links
              </h1>
              <h2 className='text-grayCustom max-w-[500px] lg:mb-2'>
                Build your brand’s recognition and get detailed insights on how your links are performing.
              </h2>
              <a href='#input' className='bg-primary py-5 px-12 w-max rounded-full text-white hover:opacity-70 transition-all'>
                Get Started
              </a>
            </div>
          </div>
        </section>

        <section className='custom-container flex flex-col rounded-2xl pb-24 lg:pb-28 gap-6'>
          <div className='bg-secondary rounded-2xl -mt-20 lg:-mt-14 z-10'>
            <div id='shortening-container' className='flex flex-col p-6 lg:p-8 gap-4 rounded-2xl lg:flex-row lg:gap-6'>
              <div className={`lg:basis-4/5 rounded-lg relative transition-all ${isError ? 'error' : ''}`}>
                <input
                  id='input'
                  type='text'
                  placeholder='Shorten a link here...'
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className='p-4 rounded-lg w-full transition-all'
                />
              </div>

              <div className='bg-white rounded-lg w-full lg:basis-1/5'>
                <button
                  className='bg-primary py-4 w-full rounded-lg text-white hover:opacity-70 transition-all'
                  onClick={shorteningHandler}
                >
                  Shorten It!
                </button>
              </div>
            </div>
          </div>
          <ul className='flex flex-col gap-6 text-left'>
            {list.length !== 0
              ? list.map((i, index) => {
                  return (
                    <li key={index} className='bg-white rounded-lg lg:flex lg:justify-between lg:items-center'>
                      <p className='overflow-hidden text-ellipsis whitespace-nowrap max-w-full border-b border-b-grayCustom p-4 lg:border-none'>
                        {i.long}
                      </p>
                      <div className='p-4 flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-4'>
                        <p className='text-primary'>{i.short}</p>
                        <button
                          onClick={(e) => {
                            changeCopyButton(e)
                            if (navigator.clipboard) navigator.clipboard.writeText(i.short)
                          }}
                          className='bg-primary py-3 rounded-lg text-white transition-all hover:opacity-70 lg:px-8'
                        >
                          Copy
                        </button>
                      </div>
                    </li>
                  )
                })
              : ''}
          </ul>
        </section>

        <section className='custom-container pb-20 lg:pb-52 flex flex-col gap-28 lg:gap-36'>
          <div className='text-center flex flex-col items-center'>
            <h3 className='text-veryDarkBlue text-2xl font-bold mb-4 lg:text-4xl'>Advanced Statistics</h3>
            <p className='text-grayishViolet lg:text-xl max-w-[500px]'>
              Track how your links are performing across the web with our advanced statistics dashboard.
            </p>
          </div>
          <div className='flex flex-col gap-24 lg:flex-row lg:gap-8 lg:justify-between'>
            <div className='flex flex-col items-center bg-white rounded-xl gap-6 pb-10 px-8 lg:items-start z-10'>
              <div className='p-6 bg-secondary rounded-full -mt-11 mb-4'>
                <img src={iconBrandRecognition} alt='Brand Recognition' className='w-10 h-10' />
              </div>
              <h4 className='text-veryDarkBlue text-xl font-bold'>Brand Recognition</h4>
              <p className='text-grayishViolet'>
                Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence
                in your content.
              </p>
            </div>

            <div
              className='flex flex-col items-center bg-white rounded-xl gap-6 pb-10 px-8 lg:items-start lg:mt-12 lg:-mb-12
            relative after:absolute after:h-[200%] lg:after:h-2 after:w-2 lg:after:w-[200%] after:bg-primary after-div
            lg:after:top-[30%]'
            >
              <div className='p-6 bg-secondary rounded-full -mt-11 mb-4'>
                <img src={IconDetailedRecords} alt='Brand Recognition' className='w-10 h-10' />
              </div>
              <h4 className='text-veryDarkBlue text-xl font-bold'>Detailed Records</h4>
              <p className='text-grayishViolet'>
                Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform
                better decisions.
              </p>
            </div>

            <div className='flex flex-col items-center bg-white rounded-xl gap-6 pb-10 px-8 lg:items-start lg:mt-24 lg:-mb-24 z-10'>
              <div className='p-6 bg-secondary rounded-full -mt-11 mb-4'>
                <img src={iconFullyCustomizable} alt='Brand Recognition' className='w-10 h-10' />
              </div>
              <h4 className='text-veryDarkBlue text-xl font-bold'>Fully Customizable</h4>
              <p className='text-grayishViolet'>
                Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
              </p>
            </div>
          </div>
        </section>

        <section className='bg-secondary'>
          <div id='boost-section'>
            <div className='custom-container flex flex-col justify-center items-center py-20 lg:py-14 gap-6'>
              <h3 className='text-white font-bold text-xl lg:text-3xl'>Boost your links today</h3>
              <a href='#input' className='bg-primary py-5 px-12 w-max rounded-full text-white hover:opacity-70 transition-all'>
                Get Started
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
