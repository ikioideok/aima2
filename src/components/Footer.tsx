import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Mail, Phone, MapPin, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { label: 'AIマーケティング戦略', href: '#' },
      { label: 'データ分析・可視化', href: '#' },
      { label: 'パーソナライゼーション', href: '#' },
      { label: '自動化プラットフォーム', href: '#' },
    ],
    company: [
      { label: '会社概要', href: '#about' },
      { label: 'チーム', href: '#' },
      { label: 'ニュース', href: '#media' },
      { label: 'キャリア', href: '#' },
    ],
    support: [
      { label: 'ドキュメント', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'サポート', href: '#contact' },
      { label: 'プライバシーポリシー', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'contact@aima.com' },
    { icon: Phone, text: '03-1234-5678' },
    { icon: MapPin, text: '東京都渋谷区...' },
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Red accent line */}
      <motion.div
        className="h-1 bg-red-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-6"
            >
              <h3 className="text-4xl font-black tracking-tighter">
                AI<span className="text-red-500">MA</span>
              </h3>
              <motion.div
                className="w-12 h-1 bg-red-500 mt-2"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              />
            </motion.div>

            <p className="text-gray-300 leading-relaxed font-light mb-8">
              AIとマーケティングの融合で、
              ビジネスの未来を創造する
              革新的なソリューションを提供します。
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center space-x-3 group cursor-pointer"
                >
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                    <item.icon className="h-4 w-4 text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-light">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 tracking-tight">
              サービス
              <motion.div
                className="w-8 h-1 bg-red-500 mt-2"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 font-light text-sm block"
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 tracking-tight">
              会社情報
              <motion.div
                className="w-8 h-1 bg-red-500 mt-2"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 font-light text-sm block"
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6 tracking-tight">
              サポート
              <motion.div
                className="w-8 h-1 bg-red-500 mt-2"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 font-light text-sm block"
                  >
                    {link.label}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-800 pt-12 mb-12"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-3xl font-black mb-4 tracking-tight">
              最新情報を
              <span className="text-red-500">お届け</span>
            </h4>
            <p className="text-gray-400 mb-8 font-light">
              AIマーケティングの最新トレンドや成功事例を
              定期的にお送りします
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="メールアドレスを入力"
                className="flex-1 bg-gray-900 border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-red-500 focus:outline-none rounded-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-500 hover:bg-white hover:text-black px-6 py-3 font-bold transition-all duration-300 rounded-none"
              >
                登録
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Social Links & Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Social Links */}
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              <span className="text-gray-400 text-sm font-light">Follow us:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-gray-400 hover:text-red-500 transition-colors duration-300 group"
            >
              <span className="text-sm font-light">TOP</span>
              <div className="w-8 h-8 bg-gray-800 group-hover:bg-red-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <ArrowUp className="h-4 w-4" />
              </div>
            </motion.button>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm font-light">
              © 2024 AIMA. All rights reserved. | 
              <span className="text-red-500"> Powered by AI Technology</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 bg-red-500 opacity-10"
        initial={{ scale: 0, rotate: 45 }}
        whileInView={{ scale: 1, rotate: 45 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/2 left-0 w-16 h-16 bg-white opacity-5"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </footer>
  );
}