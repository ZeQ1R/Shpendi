
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Send } from 'lucide-react';
import { restaurantInfo } from '../data/mock';
import EmbededMap from './EmbededMap';
import { useTranslation } from 'react-i18next';

function Contact()  {

  const {t} = useTranslation();
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   date: '',
  //   time: '',
  //   guests: '2',
  //   message: ''
  // });

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Mock form submission
  //   alert('Thank you for your reservation request! We will contact you shortly to confirm your booking.');
  //   setFormData({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     date: '',
  //     time: '',
  //     guests: '2',
  //     message: ''
  //   });
  

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-red-600/10 to-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-red-500/5 to-red-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              {t("contact.header")}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            {t("contact.subheader")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">{t("contact.info")}</h3>
              
              {/* Contact items */}
              <div className="space-y-6">
                
                <div className="flex items-start space-x-4 group">
                    <a href="https://maps.app.goo.gl/7BRyxjdFzVZVLEXP7" target='_blank' className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2">Address</h4>
                    <p className="text-gray-300">{t("contact.address")}</p>
                  </div>
                 </a>
                </div>
                
                <div className="flex items-start space-x-4 group">
                    <a href={`tel:${restaurantInfo.phone}`} className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Phone</h4>
                    <p className="text-gray-300">{restaurantInfo.phone}</p>
                  </div>
                  </a>
                </div>

                
                <div className="flex items-start space-x-4 group">
                    <a href={`mailto:${restaurantInfo.email}`} className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Email</h4>
                    <p className="text-gray-300">{restaurantInfo.email}</p>
                  </div>
                  </a>
                </div>
                
                <div className="flex items-start space-x-4 group">
                  <div className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">{t("buttons.openingHours")}</h4>
                    <div className="text-gray-300 space-y-1">
                      <p>{t("restaurantInfo.hours.workingdays.weekdays")}: {t("restaurantInfo.hours.workingdays.weekhours")}</p>
                      <p>{t("restaurantInfo.hours.workingweekends.weekends")}: {t("restaurantInfo.hours.workingweekends.weekendhours")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">{t("contact.follow")}</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-full hover:scale-110 transition-transform duration-300 group"
                >
                  <Instagram className="h-6 w-6 text-white" />
                </a>
                <a
                  href="https://www.facebook.com/shpendipizzeria/"
                  className="bg-gradient-to-r from-red-600 to-red-500 p-3 rounded-full hover:scale-110 transition-transform duration-300 group"
                >
                  <Facebook className="h-6 w-6 text-white" />
                </a>
              </div>
              {/* <div className="mt-4 space-y-2 text-gray-300">
                <p>{restaurantInfo.social.instagram}</p>
                <p>{restaurantInfo.social.facebook}</p>
              </div> */}
            </div>
          </div>

          <EmbededMap/>

          {/* Reservation Form */}
          {/* <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-red-500/20 rounded-xl p-8 hover:border-red-500/40 transition-all duration-300"> */}
            {/* <h3 className="text-2xl font-bold text-white mb-6">Make a Reservation</h3> */}
            
            {/* <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-300"
                    placeholder="+383 44 123 456"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-300"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="10+">10+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2">Time *</label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-300"
                  >
                    <option value="">Select time</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                    <option value="21:30">9:30 PM</option>
                    <option value="22:00">10:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Special Requests</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors duration-300 resize-none"
                  placeholder="Any special dietary requirements or celebration details..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/25 flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Reservation Request
              </button>
            </form> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;