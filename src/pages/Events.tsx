import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink, Users, Sparkles } from 'lucide-react';
import { events } from '../data/events';

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = React.useState<number | null>(null);

  useEffect(() => {
    document.title = 'رویدادها - مدیریت سلامت نقره‌ای';
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 lg:py-20 relative" style={{ marginTop: '15px' }}>
        <div className="blur-sheet rounded-3xl mx-4 sm:mx-6 lg:mx-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 container mx-auto px-8 sm:px-12 lg:px-16 py-12 text-center"
          >
            <div className="inline-flex items-center space-x-2 space-x-reverse bg-white/20 backdrop-blur-xl border border-white/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-gray-800 font-black">رویدادهای علمی</span>
            </div>
            <h1 className="text-4xl lg:text-7xl font-black mb-6 text-gray-800">
              رویدادهای آینده
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-semibold">
              به برنامه‌های آموزشی و علمی ما بپیوندید
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-4" style={{ marginTop: '15px' }}>
        <div className="blur-sheet rounded-3xl mx-4 sm:mx-6 lg:mx-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="container mx-auto px-8 sm:px-12 lg:px-16 py-8"
          >
            <div className="space-y-8">
              {events.map((event, index) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -8 }}
                  className="group"
                >
                  <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-200">
                    <div className="lg:flex">
                      {/* Event Image */}
                      <div className="lg:w-1/3 h-72 lg:h-auto relative overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-200"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-500 to-emerald-500 text-white px-4 py-2 rounded-full font-black">
                          رویداد {index + 1}
                        </div>
                      </div>

                      {/* Event Content */}
                      <div className="lg:w-2/3 p-10">
                        <h3 className="text-3xl lg:text-4xl font-black text-gray-800 mb-6 group-hover:text-purple-600 transition-colors">
                          {event.title}
                        </h3>
                        
                        <p className="text-gray-700 mb-8 leading-relaxed text-lg font-semibold">
                          {event.description}
                        </p>

                        {/* Event Details */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                          <div className="flex items-center space-x-3 space-x-reverse">
                            <Calendar className="w-6 h-6 text-purple-500" />
                            <div>
                              <p className="font-black text-gray-800">تاریخ</p>
                              <p className="text-gray-700 font-semibold">{event.date}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3 space-x-reverse">
                            <Clock className="w-6 h-6 text-purple-500" />
                            <div>
                              <p className="font-black text-gray-800">زمان</p>
                              <p className="text-gray-700 font-semibold">{event.time}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3 space-x-reverse">
                            <MapPin className="w-6 h-6 text-purple-500" />
                            <div>
                              <p className="font-black text-gray-800">مکان</p>
                              <p className="text-gray-700 font-semibold">{event.location}</p>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:space-x-reverse">
                          <motion.a
                            href={event.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 text-white px-8 py-4 rounded-2xl font-black transition-all duration-200"
                          >
                            <Users className="w-5 h-5" />
                            <span>ثبت‌نام در رویداد</span>
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                          
                          <motion.button
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedEvent(event.id)}
                            className="flex items-center justify-center space-x-2 space-x-reverse bg-white/30 backdrop-blur-md border border-white/40 text-gray-700 hover:text-purple-600 px-8 py-4 rounded-2xl font-black transition-all duration-200"
                          >
                            <span>اطلاعات کامل</span>
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Future Events Note */}
            <motion.div
              variants={itemVariants}
              className="mt-16 text-center"
            >
              <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-3xl p-10 max-w-2xl mx-auto">
                <h3 className="text-2xl font-black text-gray-800 mb-6">
                  رویدادهای بیشتر در راه است
                </h3>
                <p className="text-gray-700 mb-8 leading-relaxed font-semibold text-lg">
                  برای اطلاع از جدیدترین رویدادها و برنامه‌های آموزشی، در خبرنامه ما عضو شوید
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-500 to-emerald-500 hover:from-purple-600 hover:to-emerald-600 text-white px-10 py-4 rounded-2xl font-black text-lg transition-all duration-200"
                >
                  عضویت در خبرنامه
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white/90 backdrop-blur-md border border-white/40 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const event = events.find(e => e.id === selectedEvent);
              if (!event) return null;

              return (
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      {event.title}
                    </h2>
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-xl mb-4"
                    />
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {event.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><strong>تاریخ:</strong> {event.date}</div>
                      <div><strong>زمان:</strong> {event.time}</div>
                      <div className="col-span-2"><strong>مکان:</strong> {event.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 space-x-reverse">
                    <button
                      onClick={() => setSelectedEvent(null)}
                      className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
                    >
                      بستن
                    </button>
                    <a
                      href={event.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-orange-500 text-white py-3 rounded-xl font-semibold text-center hover:bg-orange-600 transition-colors"
                    >
                      ثبت‌نام
                    </a>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Events;