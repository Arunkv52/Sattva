const Luxury = () => {
  return (
    <>
      <section className='bg-[#f8f5f0] py-24'>
        <div className='mx-auto md:max-w-7xl max-w-full px-6'>
          <div className='md:grid grid grid-cols-2 md:gap-0 gap-20 text-center md:grid-cols-4'>
            <div>
              <h3 className='text-6xl font-light'>2500+</h3>
              <p className='mt-3 text-stone-600'>Active Members</p>
            </div>

            <div>
              <h3 className='text-6xl font-light'>150+</h3>
              <p className='mt-3 text-stone-600'>Yoga Sessions</p>
            </div>

            <div>
              <h3 className='text-6xl font-light'>25+</h3>
              <p className='mt-3 text-stone-600'>Wellness Retreats</p>
            </div>

            <div>
              <h3 className='text-6xl font-light'>4.9</h3>
              <p className='mt-3 text-stone-600'>Community Rating</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Luxury
