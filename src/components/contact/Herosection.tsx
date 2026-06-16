import { useForm } from 'react-hook-form'
import { ArrowRight } from 'lucide-react'

type FormData = {
  name: string
  email: string
  mobile: string
  message: string
}

export default function HeroSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
    reset()
  }

  return (
    <section className="bg-[#f6f6f4] py-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Side */}
          <div className="relative">
            {/* Background Logo */}
            <div className="absolute left-0 top-20 opacity-10">
              <div className="w-[350px] h-[180px] bg-[#d8d4e0] rounded-[80px]" />
            </div>

            <div className="relative z-10">
              <h2 className="text-5xl md:text-5xl font-light text-[#8a8750]">
                Contact Us
              </h2>

              <p className="mt-8 text-3xl md:text-2xl text-[#8a8750] font-light">
                We'd{' '}
                <span className="italic font-serif">
                  love
                </span>{' '}
                to hear from you.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div>
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-20 mb-20 text-[#8a8750]">
              <div>
                <p>admin@sattvaholistics.com</p>
                <p>+91 99940 53595</p>
              </div>

              <div>
                <p>102/17 Main Road</p>
                <p>Coimbatore, Tamil Nadu</p>
              </div>

              <div>
                <a
                  href="#"
                  className="block hover:underline"
                >
                  Instagram
                </a>

                <a
                  href="#"
                  className="block hover:underline"
                >
                  Facebook
                </a>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-10"
            >
              <div className="grid md:grid-cols-2 gap-10">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    {...register('name', {
                      required: 'Name is required'
                    })}
                    className="w-full bg-transparent border-b border-[#8a8750]/60 py-3 outline-none text-[#8a8750] placeholder:text-[#8a8750]/50"
                  />

                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value:
                          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    className="w-full bg-transparent border-b border-[#8a8750]/60 py-3 outline-none text-[#8a8750] placeholder:text-[#8a8750]/50"
                  />

                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  {...register('mobile', {
                    required: 'Mobile number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Enter a valid mobile number'
                    }
                  })}
                  className="w-full bg-transparent border-b border-[#8a8750]/60 py-3 outline-none text-[#8a8750] placeholder:text-[#8a8750]/50"
                />

                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.mobile.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows={4}
                  placeholder="Message"
                  {...register('message', {
                    required: 'Message is required'
                  })}
                  className="w-full bg-transparent border-b border-[#8a8750]/60 py-3 outline-none resize-none text-[#8a8750] placeholder:text-[#8a8750]/50"
                />

                {errors.message && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="group flex items-center gap-4 border border-[#8a8750] rounded-full px-8 py-4 text-[#8a8750] hover:bg-[#8a8750] hover:text-white transition-all duration-300"
              >
                Submit

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}