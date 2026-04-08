import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto bg-gradient-to-br from-primary to-indigo-700 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/30"
      >
        {/* Decorative background circles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[100%] bg-white/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-50%] right-[-20%] w-[60%] h-[100%] bg-white/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Mulai Digitalisasi Toko Anda Sekarang
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan UMKM lainnya yang telah meningkatkan keuntungan mereka dengan POS Libra. Gratis coba selama 14 hari.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl shadow-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
            >
              Coba Gratis <ArrowRight size={24} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all"
            >
              Hubungi Sales
            </motion.button>
          </div>
          
          <p className="mt-8 text-white/60 text-sm font-medium">
            Tanpa kartu kredit • Batalkan kapan saja • Support 24/7
          </p>
        </div>
      </motion.div>
    </section>
  );
}
