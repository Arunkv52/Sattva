const offerings = [
  {
    title: "Mat Pilates",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
  },
  {
    title: "Reformer Pilates",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a",
  },
  {
    title: "Yoga",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
  },
]

const OfferingsSection = () => {
  return (
    <section className="px-5 md:px-5 py-16 ">

      {/* Top Content */}
      <div className=" max-w-3xl grid lg:grid-cols-2 gap-10 mb-14">

        <div>
          <h2 className="text-4xl md:text-5xl font-light text-[#7a7346]">
            Our Offerings
          </h2>

          <p className="mt-4 text-xl text-[#7a7346]">
            Come in. Let go.
            <span className="italic ml-2">
              Connect.
            </span>
          </p>
        </div>

        <div className="max-w-xl">
          <p className="text-[#7a7346] text-lg leading-8">
            Check in, check out. Find your flow in Yoga,
            discover stability in Reformer Pilates,
            and connect to your body in Mat Pilates.
          </p>

          <div className="mt-8 flex gap-10">

            <button
              className="
              text-sm
              border-b
              border-[#7a7346]
              hover:opacity-70"
            >
              See All Classes
            </button>

            <button
              className="
              text-sm
              border-b
              border-[#7a7346]
              hover:opacity-70"
            >
              View Our Timetable
            </button>

          </div>
        </div>

      </div>

      {/* Cards */}
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-5"
      >

        {offerings.map((item) => (
          <div key={item.title}>

            <div
              className="
              overflow-hidden
              aspect-[4/5]
              bg-gray-200"
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                w-full
                h-full
                object-cover
                hover:scale-105
                duration-700"
              />
            </div>

            <div
              className="
              mt-5
              flex
              items-center
              justify-between"
            >

              <div className="flex items-center gap-3">

                <span
                  className="
                  w-2
                  h-2
                  rounded-full
                  border
                  border-[#7a7346]"
                />

                <span className="text-[#7a7346]">
                  {item.title}
                </span>

              </div>

              {item.title === "Reformer Pilates" && (
                <button
                  className="
                  text-sm
                  italic
                  text-[#7a7346]"
                >
                  View Classes →
                </button>
              )}

            </div>

          </div>
        ))}

      </div>
    </section>
  )
}

export default OfferingsSection