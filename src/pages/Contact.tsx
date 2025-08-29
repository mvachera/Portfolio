function Contact() {
	return (
		<div className="min-h-screen flex justify-center items-center">
			<form className="w-full max-w-md bg-gray-900 p-6 rounded-2xl shadow-lg space-y-4">
  				<div>
  				  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
  				  <input
  				    type="text"
  				    id="name"
  				    name="name"
  				    className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-gray-200 focus:border-yellow-400 focus:ring focus:ring-yellow-400/20 p-2"
  				    required
  				  />
  				</div>
  				<div>
  				  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
  				  <input
  				    type="email"
  				    id="email"
  				    name="email"
  				    className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-gray-200 focus:border-yellow-400 focus:ring focus:ring-yellow-400/20 p-2"
  				    required
  				  />
  				</div>
  				<div>
  				  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
  				  <textarea
  				    id="message"
  				    name="message"
  				    rows={4}
  				    className="mt-1 block w-full rounded-md bg-gray-800 border border-gray-700 text-gray-200 focus:border-yellow-400 focus:ring focus:ring-yellow-400/20 p-2"
  				    required
  				  ></textarea>
  				</div>
  				<button
  				  type="submit"
  				  className="w-full bg-yellow-400 text-black font-semibold py-2 px-4 rounded-md hover:bg-yellow-300 transition-colors"
  				>
  				  Send
  				</button>
			</form>

		</div>
	)
}

export default Contact;