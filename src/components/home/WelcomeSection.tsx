import { useState } from "react";

import Space1 from "../../assets/home/premium-images/image-1.jpg";
import Space2 from "../../assets/home/premium-images/image-2.jpg";
import Space3 from "../../assets/home/premium-images/image-3.jpg";

const spaces = [
  {
    title: "Class Room / Chill Zone",
    image: Space1,
  },
  {
    title: "Healing",
    image: Space2,
  },
  {
    title: "Yoga + Pilates Studios",
    image: Space3,
  },
];

const WelcomeSection = () => {
  const [activeImage, setActiveImage] = useState(spaces[0].image);

  return (
    <section className="bg-[#f7f6f2] px-5 md:px-5 py-16">

      {/* Heading */}
      <h2
        className="mb-12 text-5xl md:text-5xl
        text-[#7b7f35] font-light"
      >
        Choose your <span className="italic">Course!
        </span>
      </h2>

      <div className="grid lg:grid-cols-[2fr_1fr] gap-10">

        {/* Left Image */}
        <div
          className="
          relative
          overflow-hidden
          aspect-[4/3]
          "
        >
          <img
            key={activeImage}
            src={activeImage}
            alt="space"
            className="
            w-full
            h-full
            object-cover
            animate-fade"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col">

          <h3 className="text-4xl md:text-4xl text-[#7b7f35]">
            Our Space.
          </h3>

          <p
            className="mt-8 mb-12
            text-lg
            leading-6
            text-[#7b7f35]"
          >
            A space built to inspire.
            Find calm and connection
            through our welcoming
            atmosphere and mindful
            experience.
          </p>

          <div className="border-t border-[#7b7f35]/40">

            {spaces.map((item) => (
              <button
                key={item.title}
                onMouseEnter={() =>
                  setActiveImage(item.image)
                }
                className="
                group
                w-full
                py-8
                text-left
                border-b
                border-[#7b7f35]/40
                transition"
              >

                <div
                  className="
                  flex
                  justify-between
                  items-center"
                >

                  <span
                    className="
                    text-base
                    text-[#7b7f35]
                    group-hover:translate-x-2
                    duration-500"
                  >
                    {item.title}
                  </span>

                  <span
                    className="
                    w-0
                    h-[2px]
                    bg-[#7b7f35]
                    group-hover:w-16
                    duration-500"
                  />

                </div>

              </button>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default WelcomeSection;