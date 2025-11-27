import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
      <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
        <span>Designed and developed with</span>
        <Heart size={16} className="text-red-500 fill-red-500" />
        <span>using React & Tailwind</span>
      </div>
      <p className="text-slate-600 text-xs mt-2">
        © {new Date().getFullYear()} Amirreza. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;