function Contact() {
  return (
    <div className="min-h-screen flex justify-center items-center p-8">
      <div className="w-full max-w-2xl">
        {/* Titre CONTACT centré au-dessus du formulaire */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">CONTACT</h1>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-6 rounded-lg"></div>
          <p className="text-gray-300 text-lg max-w-lg mx-auto">
            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible !
          </p>
        </div>

        {/* Formulaire agrandi */}
        <form className="bg-white p-8 rounded-md shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              className="w-full rounded-md bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring focus:ring-purple-500/20 p-4 text-base"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              className="w-full rounded-md bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring focus:ring-purple-500/20 p-4 text-base"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={8}
              placeholder="Enter Your Message"
              className="w-full rounded-md bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring focus:ring-purple-500/20 p-4 text-base resize-none"
              required
            ></textarea>
          </div>

          {/* Bouton aligné à droite */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-purple-500 text-white font-semibold py-3 px-8 rounded-md hover:bg-purple-600 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;