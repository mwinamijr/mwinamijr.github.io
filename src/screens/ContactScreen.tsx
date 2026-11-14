import React, { useState, FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { description, email, phone, phoneHref, whatsappUrl } from "./constants";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Opens the visitor's email app with the message pre-filled.
    const body = `${formData.message}\n\n— ${formData.name} (${formData.email})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const contactInfo: {
    icon: React.ReactNode;
    title: string;
    content: string;
    href?: string;
  }[] = [
    {
      icon: <MapPin className="w-6 h-6 text-brand-600" />,
      title: "Address",
      content: "Mbezi Mwisho, Dar es Salaam, Tanzania",
    },
    {
      icon: <Phone className="w-6 h-6 text-brand-600" />,
      title: "Call",
      content: phone,
      href: phoneHref,
    },
    {
      icon: <Mail className="w-6 h-6 text-brand-600" />,
      title: "Email",
      content: email,
      href: `mailto:${email}`,
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-brand-600" />,
      title: "WhatsApp",
      content: "Chat on WhatsApp",
      href: whatsappUrl,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact | Athumani Mwinami</title>
        <meta name="description" content={description} />
      </Helmet>

      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              For projects, partnerships or TechDometz enquiries, reach me
              directly — I usually reply within a day.
            </p>
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      {item.href ? (
                        <a href={item.href} className="text-brand-600 hover:underline">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* 🌍 Updated Map - Dar es Salaam */}
                <div className="mt-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7882.64828990673!2d39.200174299999995!3d-6.792354199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4c5096f9f4ff%3A0x5a2d9c0e73d09a2!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2stz!4v1730676000000!5m2!1sen!2stz"
                    className="w-full h-64 rounded-lg"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dar es Salaam Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg shadow-lg p-6 md:p-8"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name-field"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name-field"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email-field"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email-field"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="subject-field"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject-field"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label
                      htmlFor="message-field"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message-field"
                      rows={10}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  <div className="md:col-span-2 text-center">
                    <button
                      type="submit"
                      className="px-8 py-3 bg-accent-600 text-white font-semibold rounded-lg hover:bg-accent-700 focus:ring-4 focus:ring-accent-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
