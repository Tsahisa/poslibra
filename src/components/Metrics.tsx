import { motion } from "motion/react";
import { useEffect, useState } from "react";

const metrics = [
  { label: "Transaksi lebih cepat", value: 80, suffix: "%" },
  { label: "Waktu per transaksi", value: 1, prefix: "< ", suffix: " menit" },
  { label: "User puas", value: 90, suffix: "%" },
  { label: "Tanpa training rumit", value: 100, suffix: "%" },
];

function CountUp({ value, duration = 2, prefix = "", suffix = "" }: { value: number, duration?: number, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const totalFrames = duration * 60;
    const increment = end / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{prefix}{count}{suffix}</span>;
}

export default function Metrics() {
  return (
    <section id="metrics" className="py-24 bg-primary overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-white rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-white rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-6"
            >
              Hasil Nyata untuk Pertumbuhan Bisnis Anda
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/80 leading-relaxed"
            >
              Berdasarkan riset kami terhadap ribuan pengguna POS Libra, efisiensi operasional meningkat drastis sejak hari pertama penggunaan.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-3xl text-center"
              >
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                  <CountUp value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                </div>
                <p className="text-white/70 font-medium text-sm md:text-base">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
