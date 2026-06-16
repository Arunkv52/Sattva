const Benefitsbalance = () => {
  const steps = [
    {
      step: 'Step 1',
      title: 'Reiki First Degree',
      bg: 'bg-gray-100',
      items: [
        'Four initiations for permanent Reiki attunement.',
        'Introduction to aura and chakra understanding.',
        'Foundation for all future Reiki learning.'
      ]
    },
    {
      step: 'Step 2',
      title: 'Reiki Second Degree',
      bg: 'bg-gray-200',
      items: [
        'Advanced Reiki attunements.',
        'Distant healing techniques.',
        'Mental and emotional healing practices.',
        'Introduction to sacred Reiki symbols.'
      ]
    },
    {
      step: 'Step 3',
      title: 'Reiki Third Degree',
      bg: 'bg-[#B7D4CC]',
      textColor: 'text-white',
      items: [
        'Higher vibrational energy attunements.',
        'Reiki Box and Reiki Ball techniques.',
        'Crystal Grid formation and maintenance.',
        'Psychic surgery and advanced healing methods.'
      ]
    },
    {
      step: 'Step 4',
      title: 'Reiki Fourth Degree',
      bg: 'bg-[#5E92A9]',
      textColor: 'text-white',
      items: [
        'Master-level healing attunement.',
        'Connection with powerful healing mantras.',
        'Enhanced intuition and spiritual growth.',
        'Greater clarity, focus, and transformational healing.'
      ]
    }
  ]

  return (
    <section className='bg-white py-16 md:py-24'>
      <div className='container mx-auto md:px-20 px-5'>
        {/* Header */}
        <div className='max-w-3xl mx-auto text-center'>
          <p className='text-gray-500 md:text-sm text-base tracking-wide mb-4'>
            Steps To Becoming A Teacher
          </p>

          <h2 className='text-[#003B49] font-bold leading-tight text-4xl md:text-4xl'>
            Steps to Becoming a
            <br />
            Certified Reiki Healing Teacher
          </h2>

          <p className='mt-2 text-gray-700 text-base md:text-base leading-relaxed max-w-4xl'>
            Your Reiki Learning Path
          </p>
        </div>

        {/* Cards */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-4 gap-6'>
          {steps.map((item, index) => (
            <div
              key={index}
              className={`${item.bg} rounded-2xl p-4 lg:p-10 min-h-[420px] flex flex-col`}
            >
              <div>
                <p
                  className={`font-medium text-sm ${
                    item.textColor || 'text-[#003B49]'
                  }`}
                >
                  {item.step}
                </p>

                <h3
                  className={`mt-2 md:text-2xl text-3xl font-semibold leading-snug ${
                    item.textColor || 'text-[#003B49]'
                  }`}
                >
                  {item.title}
                </h3>
              </div>

              <div className='flex-grow' />

              <ul
                className={`space-y-4 list-disc pl-5 md:text-base text-lg leading-5 ${
                  item.textColor || 'text-[#003B49]'
                }`}
              >
                {item.items.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefitsbalance
