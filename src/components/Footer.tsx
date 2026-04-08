import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-white font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-text-dark">
                POS <span className="text-primary">Libra</span>
              </span>
            </div>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Solusi kasir modern yang dirancang untuk membantu UMKM Indonesia tumbuh lebih cepat dan efisien.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-text-dark mb-6">Produk</h4>
            <ul className="space-y-4">
              {["Fitur Kasir", "Manajemen Stok", "Laporan Keuangan", "Integrasi Pembayaran"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-dark mb-6">Perusahaan</h4>
            <ul className="space-y-4">
              {["Tentang Kami", "Karir", "Blog", "Kontak"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-text-dark mb-6">Bantuan</h4>
            <ul className="space-y-4">
              {["Pusat Bantuan", "Panduan Pengguna", "Keamanan", "Privasi"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-sm">
            © {currentYear} POS Libra. Seluruh hak cipta dilindungi undang-undang.
          </p>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
