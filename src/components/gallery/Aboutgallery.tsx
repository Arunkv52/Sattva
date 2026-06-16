import GalleryImg from '../../assets/gallery/new-10.jpg'
import GalleryImg1 from '../../assets/gallery/new-11.jpg'
import GalleryImg2 from '../../assets/gallery/new-12.jpg'
import GalleryImg3 from '../../assets/gallery/new-13.jpg'
import GalleryImg4 from '../../assets/gallery/new-14.jpg'


const Aboutgallery = () => {

  return (
    <>
      <section className='bg-[#f8f5f0] md:py-32 py-20'>
        <div className='mx-auto max-w-7xl px-6'>
          <div className='mb-20'>
            <h2 className='md:text-5xl text-4xl font-light'>
              Capturing Moments of 
              <span className='font-serif italic'> Transformation</span>
            </h2>
          </div>

          <div className='grid gap-8 md:grid-cols-12'>
            {/* Large */}
            <div className='md:col-span-7'>
              <img
                src={GalleryImg}
                alt=''
                className='h-[650px] w-full rounded-[40px] object-cover'
              />
            </div>

            {/* Small Stack */}
            <div className='space-y-8 md:col-span-5'>
              <img
                src={GalleryImg1}
                alt=''
                className='h-[300px] w-full rounded-[40px] object-cover'
              />

              <img
                src={GalleryImg2}
                alt=''
                className='h-[340px] w-full rounded-[40px] object-cover'
              />
            </div>
          </div>

          <div className='mt-8 grid gap-8 md:grid-cols-12'>
            <div className='md:col-span-5'>
              <img
                src={GalleryImg3}
                alt=''
                className='h-[450px] w-full rounded-[40px] object-cover'
              />
            </div>

            <div className='md:col-span-7'>
              <img
                src={GalleryImg4}
                alt=''
                className='h-[450px] w-full rounded-[40px] object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutgallery
