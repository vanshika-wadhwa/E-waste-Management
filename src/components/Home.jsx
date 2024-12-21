import bigimage from '../assets/bigimage.png'

const Home = () => {
  return (
    <div>
      <div className="homeImg w-100% h-100% static">
        <img src={bigimage} alt="bigimage" />
      </div>
      <div className=' button bg-red-500 rounded-full font-bold h-10% w-10% mx-10 my-30 p-3 absolute top-96'>
        Let's begin!
      </div>
    </div>
  )
}

export default Home
