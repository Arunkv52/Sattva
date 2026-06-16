const Community = () => {
  return (
    <>
      <section className='bg-[#111] md:py-32 py-20 text-white'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='grid gap-16 lg:grid-cols-2'>
            <div>
              <p className='uppercase tracking-[0.3em] text-stone-400'>
                Community Stories
              </p>

              <h2 className='mt-4 md:text-6xl text-4xl font-light'>
                Experiences That
                <span className='font-serif italic'> Transform</span>
              </h2>
            </div>

            <div className='space-y-8'>
              <div className='rounded-[32px] border border-white/10 p-8'>
                <p className='text-xl leading-relaxed'>
                  "The sunrise retreat completely changed my relationship with
                  mindfulness."
                </p>

                <p className='mt-6 text-white/60'>— Sarah Williams</p>
              </div>

              <div className='rounded-[32px] border border-white/10 p-8'>
                <p className='text-xl leading-relaxed'>
                  "An experience that felt both luxurious and deeply personal."
                </p>

                <p className='mt-6 text-white/60'>— Emily Carter</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Community
