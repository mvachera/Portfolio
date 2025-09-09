import React, { useState, FormEvent } from 'react';
import { useToast } from "@/hooks/use-toast";
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );

      console.log('Email envoyé avec succès:', result);
      toast({
        title: "Message sent !",
        description: "I will respond to you as soon as possible.",
        variant: "default",
      });
      setFormData({ name: '', email: '', message: ''});
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      toast({
        title: "Error sending !",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }

  };

  return (
    <div className="min-h-screen flex justify-center items-center p-8 pb-24 relative">
      <div className="w-full max-w-2xl">
        {/* Titre CONTACT centré au-dessus du formulaire */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">CONTACT</h1>
          <div className="w-16 h-1 bg-purple-500 mx-auto mb-6 rounded-lg"></div>
          <p className="text-gray-300 text-lg max-w-lg mx-auto">
            Feel free to Contact me by submitting the form below and I will get back to you as soon as possible !
          </p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md shadow-lg space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="w-full rounded-md bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring focus:ring-purple-500/20 p-4 text-base"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="w-full rounded-md bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring focus:ring-purple-500/20 p-4 text-base"
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={8}
              placeholder="Enter Your Message"
              className="w-full rounded-md bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring focus:ring-purple-500/20 p-4 text-base resize-none"
              required
              disabled={isLoading}
            ></textarea>
          </div>

          {/* Bouton aligné à droite */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className={`font-semibold py-3 px-8 rounded-md transition-colors ${
                isLoading 
                  ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                  : 'bg-purple-500 text-white hover:bg-purple-600'
              }`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
			  <Footer />
    </div>
  );
}

export default Contact;