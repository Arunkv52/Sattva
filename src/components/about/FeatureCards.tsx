
const FeatureCards = () => {
  const cards = [
    {
      title: 'Flexibility & Strength',
      button: 'Responsibility',
      image:
        'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Pain Relief',
      button: 'Careers',
      image:
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Stress Anxity & Meditation',
      button: 'Careers',
      image:
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1400&auto=format&fit=crop',
    },
    {
      title: 'Weight Loss',
      button: 'Careers',
      image:
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1400&auto=format&fit=crop',
    },
  ]

  return (
    <section className='w-full py-6'>
      <div className='mx-auto md:grid md:grid-cols-4 grid grid-cols-1 gap-4 px-4'>
        {cards.map((card, index) => (
          <div
            key={index}
            className='group relative h-[400px] overflow-hidden rounded-[30px]'
          >
            {/* Background Image */}
            <img
              src={card.image}
              alt={card.title}
              className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-105'
            />

            {/* Dark Overlay */}
            <div className='absolute inset-0 bg-black/30' />

            {/* Content */}
            <div className='absolute inset-0 flex flex-col justify-between p-8 md:p-10'>
              {/* Heading */}
              <h2 className=' whitespace-pre-line text-2xl font-bold leading-tight text-white md:text-3xl'>
                {card.title}
              </h2>

             
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeatureCards