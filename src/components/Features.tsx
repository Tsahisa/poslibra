import { motion } from "motion/react";
import { Zap, Package, BarChart3, Layout } from "lucide-react";

const features = [
  {
    title: "Input Transaksi Cepat",
    description: "Selesaikan transaksi dalam hitungan detik dengan antarmuka yang dioptimalkan untuk kecepatan.",
    icon: Zap,
    color: "bg-blue-500",
  },
  {
    title: "Manajemen Stok",
    description: "Pantau stok barang secara real-time dan dapatkan notifikasi saat stok menipis.",
    icon: Package,
    color: "bg-green-500",
  },
  {
    title: "Laporan Penjualan",
    description: "Analisis performa bisnis Anda dengan laporan harian, mingguan, dan bulanan yang mendalam.",
    icon: BarChart3,
    color: "bg-purple-500",
  },
  {
    title: "UI Sederhana",
    description: "Didesain khusus agar mudah digunakan oleh siapa saja, bahkan tanpa pelatihan khusus.",
    icon: Layout,
    color: "bg-orange-500",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-text-dark mb-6"
          >
            Fitur Canggih untuk Bisnis Anda
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Kami menyediakan semua alat yang Anda butuhkan untuk mengelola operasional toko dengan lebih efisien dan modern.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 transition-all group"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-text-dark mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
