import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Me</h1>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {/* Email Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-gray-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p className="text-gray-700">youremail@example.com</p>
          </div>

          {/* Phone Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <FontAwesomeIcon icon={faPhone} className="text-2xl text-gray-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Phone</h2>
            <p className="text-gray-700">+1 (555) 123-4567</p>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-gray-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">LinkedIn</h2>
            <p className="text-gray-700">linkedin.com/in/yourprofile</p>
          </div>

          {/* Kakao Channel Card */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <FontAwesomeIcon icon={faGithub} className="text-2xl text-gray-600 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Kakao Channel</h2>
            <p className="text-gray-700">Kakao Channel ID</p>
          </div>
        </div>

        {/* Location and Map */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Location & Map</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <FontAwesomeIcon icon={faLocationDot} className="text-2xl text-gray-600 mb-4" />
            <p className="text-gray-700">123 Main Street, Anytown, USA</p>
            {/* Replace with your map embed code */}
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.554423099473!2d3.3756997147734966!3d6.577584725258804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4b427a90321%3A0x49c013a6a59a9b2f!2sLagos!5e0!3m2!1sen!2sng!4v1678883983424!5m2!1sen!2sng"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
