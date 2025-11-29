import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VPNWarning = () => {
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const checkVPN = async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();

        if (data.country !== 'IR') {
          setShowAlert(true);
        } else {
          setShowAlert(false);
        }
      } catch (err) {
        console.error('VPN check failed:', err);
        setShowAlert(true);
      }
    };

    checkVPN();

    const interval = setInterval(checkVPN, 30000); // هر 30 ثانیه بررسی
    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setShowAlert(false); // فقط مخفی می‌کنه، دفعه بعد دوباره نمایش داده میشه
  };

  return (
    <AnimatePresence>
      {showAlert && (
        <>
          {/* دسکتاپ */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 15 }}
            className="hidden md:flex fixed top-10 left-1/2 transform -translate-x-1/2
             w-full max-w-md bg-slate-700 text-slate-100 rounded-xl shadow-2xl p-6
             flex items-center justify-between z-50 border border-slate-500"
          >
            <span className="text-sm md:text-base font-medium">
              لطفاً فیلترشکن خود را خاموش کنید تا تجربه بهتری داشته باشید!
            </span>
            <button
              onClick={handleClose}
              className="ml-4 flex items-center justify-center w-7 h-7 rounded-full 
                         bg-slate-900 hover:bg-slate-800 transition text-slate-100"
            >
              ×
            </button>
          </motion.div>

          {/* موبایل */}
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120, damping: 15 }}
            className="md:hidden fixed top-0 left-0 w-full bg-slate-700 text-slate-100 p-3 
                       text-center text-sm font-medium shadow-md z-50 flex justify-between items-center"
          >
            <span>لطفاً فیلترشکن خود را خاموش کنید تا تجربه بهتری داشته باشید!</span>
            <button
              onClick={handleClose}
              className="ml-4 flex items-center justify-center w-7 h-7 rounded-full 
                         bg-slate-900 hover:bg-slate-800 transition text-slate-100"
            >
              ×
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default VPNWarning;
