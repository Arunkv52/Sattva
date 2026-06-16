import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  FaPhone,
  FaEnvelope,
  FaChevronDown,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa'

type FormData = {
  fullName: string
  email: string
  countryCode: string
  phone: string
  message: string
}

const countryCodes = [
  { code: 'US', dial: '+1' },
  { code: 'IN', dial: '+91' },
  { code: 'UK', dial: '+44' },
  { code: 'AU', dial: '+61' },
  { code: 'CA', dial: '+1' },
  { code: 'DE', dial: '+49' },
  { code: 'FR', dial: '+33' },
]

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      countryCode: 'IN',
    },
  })

  const onSubmit = (data: FormData) => {
    console.log(data)

    setSubmitted(true)
    reset()

    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="min-h-screen  text-black">
      {/* Header */}
      <div className="text-center pt-20 pb-12 px-6">
        <h1 className="text-4xl md:text-5xl font-black uppercase leading-tight">
          Let's Work Together
          <br />
          With Sattva Holistics
        </h1>

        <p className="mt-5 text-gray-400 max-w-lg mx-auto">
          Learn powerful techniques for energy awareness, emotional wellbeing, and holistic self-care.
        </p>
      </div>

      {/* Contact Card */}
      <div className="max-w-5xl mx-auto px-5">
        <div className="grid md:grid-cols-2 gap-10 bg-[#1a1a1a] border border-[#2A2A2A] rounded-3xl p-8 md:p-12">
          {/* Left Side */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-black uppercase text-white">Let's Talk</h2>

              <p className="text-white/50 mt-3 mb-8">
                Ask us anything or just say hi 👋
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                >
                  <FaPhone className="text-[#E5173F]" />
                  +91 98765 43210
                </a>

                <a
                  href="mailto:team@sattvaholistics.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                >
                  <FaEnvelope className="text-[#E5173F]" />
                  team@sattvaholistics.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-8 mt-10 border-t border-[#2A2A2A]">
              <div className="flex gap-4">
                {[
                  FaFacebookF,
                  FaTwitter,
                  FaInstagram,
                  FaYoutube,
                ].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-11 h-11 rounded-full border border-[#2A2A2A] flex items-center justify-center text-white hover:text-white hover:border-[#E5173F] transition-all duration-300"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            noValidate
          >
            {/* Name */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                {...register('fullName', {
                  required: 'Full name is required',
                })}
                className={`w-full bg-[#111111] text-white border rounded-xl px-4 py-3 outline-none transition ${
                  errors.fullName
                    ? 'border-red-500'
                    : 'border-[#2A2A2A] focus:border-[#E5173F]'
                }`}
              />

              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: 'Enter a valid email',
                  },
                })}
                className={`w-full bg-[#111111] text-white border rounded-xl px-4 py-3 outline-none transition ${
                  errors.email
                    ? 'border-red-500'
                    : 'border-[#2A2A2A] focus:border-[#E5173F]'
                }`}
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Phone Number
              </label>

              <div
                className={`flex overflow-hidden rounded-xl border ${
                  errors.phone
                    ? 'border-red-500'
                    : 'border-[#2A2A2A] focus-within:border-[#E5173F]'
                }`}
              >
                <div className="relative">
                  <select
                    {...register('countryCode')}
                    className="appearance-none bg-[#111111] text-white text-white px-4 py-3 pr-8 outline-none"
                  >
                    {countryCodes.map((country) => (
                      <option
                        key={country.code}
                        value={country.code}
                        className="bg-[#1A1A1A]"
                      >
                        {country.dial}
                      </option>
                    ))}
                  </select>

                  <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 pointer-events-none" />
                </div>

                <input
                  type="tel"
                  placeholder="9876543210"
                  {...register('phone', {
                    required: 'Phone number is required',
                  })}
                  className="flex-1 bg-[#111111] text-white px-4 py-3 outline-none"
                />
              </div>

              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm mb-2 text-gray-300">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                {...register('message', {
                  required: 'Message is required',
                })}
                className={`w-full bg-[#111111] text-white border rounded-xl px-4 py-3 outline-none resize-none transition ${
                  errors.message
                    ? 'border-red-500'
                    : 'border-[#2A2A2A] focus:border-[#E5173F]'
                }`}
              />

              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#ffffff] hover:bg-[#c41235] py-4 rounded-xl uppercase tracking-wider font-bold transition-all duration-300 cursor-pointer"
            >
              {submitted ? '✓ Message Sent' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* Footer Info */}
      <div className="max-w-5xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-10 text-center">
        <div>
          <h3 className="uppercase font-bold tracking-widest mb-3">
            Opening Hours
          </h3>

          <p className="text-gray-400">
            Monday - Friday
            <br />
            10:00 AM - 6:00 PM
          </p>
        </div>

        <div>
          <h3 className="uppercase font-bold tracking-widest mb-3">
            Address
          </h3>

          <p className="text-gray-400">
            
            
            Coimbatore - 641014
          </p>
        </div>
      </div>
    </section>
  )
}