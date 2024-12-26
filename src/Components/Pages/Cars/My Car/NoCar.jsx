import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import { Player } from "lottie-react";
import noCarsAnimation from "../../../../assets/LottieFiles/noFile.json"; // Lottie JSON ফাইল ইম্পোর্ট করুন
import Lottie from "lottie-react";

const NoCars = () => {
  return (
    <motion.div
      className="text-center flex flex-col items-center justify-center min-h-[50vh] bg-gray-50 rounded-lg shadow-xl p-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
    
      <div className="w-48 sm:w-60 h-48 sm:h-60 mb-4">
      <Lottie animationData={noCarsAnimation} loop={true} />
      </div>

      <motion.h2
        className="text-xl font-semibold text-gray-800 mb-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        No Cars Found!
      </motion.h2>

      <motion.p
        className="mt-2 text-gray-500 text-center text-sm sm:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        It seems like you haven’t added any cars yet. Start adding now!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          to="/addCar"
          className="btn mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        >
          Add or Book Your First Car
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default NoCars;
