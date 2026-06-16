import ImageItem from '../assets/home/premium-images/image-11.jpg'
const StickySection = () => {
  return (
    <>
        <div className='px-50'>
          <div className="heads">
            <h2 className="text-4xl font-bold py-5">For Your Unique Needs</h2>
          </div>
          <div className="left">
            <img src={ImageItem} alt="" className='w-1/2 h-[450px] object-cover rounded-2xl'/>
          </div>
          <div className="right">
            <ul>
              <li>Flexibility & Strength</li>
              <li>Pain Relief</li>
              <li>Stress Anxity & Meditation</li>
              <li>Weight Loss</li>
              
            </ul>
          </div>
        </div>
    </>
  )
}

export default StickySection
