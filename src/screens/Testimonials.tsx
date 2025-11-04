import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus.",
    image: "/assets/img/testimonials/testimonials-1.jpg",
    name: "Saul Goodman",
    role: "CEO & Founder",
  },
  {
    text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis.",
    image: "/assets/img/testimonials/testimonials-2.jpg",
    name: "Sara Wilsson",
    role: "Designer",
  },
  {
    text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam.",
    image: "/assets/img/testimonials/testimonials-3.jpg",
    name: "Jena Karlis",
    role: "Store Owner",
  },
  {
    text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor.",
    image: "/assets/img/testimonials/testimonials-4.jpg",
    name: "Matt Brandon",
    role: "Freelancer",
  },
  {
    text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam.",
    image: "/assets/img/testimonials/testimonials-5.jpg",
    name: "John Larson",
    role: "Entrepreneur",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-16 bg-gray-50 dark:bg-gray-900 text-center"
    >
      {/* Header */}
      <motion.div
        className="max-w-3xl mx-auto mb-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Testimonials
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </motion.div>

      {/* Swiper */}
      <motion.div
        className="max-w-6xl mx-auto px-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 mx-2 flex flex-col items-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-gray-700 dark:text-gray-300 italic mb-4 relative">
                  <span className="text-4xl text-blue-500 font-serif absolute -top-4 left-2">
                    “
                  </span>
                  {item.text}
                  <span className="text-4xl text-blue-500 font-serif absolute -bottom-6 right-2">
                    ”
                  </span>
                </p>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover mb-3"
                />
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {item.name}
                </h3>
                <h4 className="text-sm text-gray-500 dark:text-gray-400">
                  {item.role}
                </h4>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Testimonials;
