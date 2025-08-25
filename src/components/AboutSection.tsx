import React from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Quote, Zap, Target, Heart } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Faster, more stylish animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.4,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.5,
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.5,
      },
    },
  };

  const values = [
    {
      icon: Zap,
      title: "革新への情熱",
      description: "常に最新技術を追求し、業界を牽引する"
    },
    {
      icon: Target,
      title: "顧客第一主義",
      description: "お客様の成功が私たちの成功"
    },
    {
      icon: Heart,
      title: "チームワーク",
      description: "多様性を活かし、共に成長する"
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-6xl md:text-8xl lg:text-9xl mb-4 font-black text-black tracking-tighter"
          >
            ABOUT
            <motion.span 
              className="text-red-500"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 500 }}
            >
              .
            </motion.span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-red-500 mx-auto"
          />
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInLeft}
            className="space-y-8"
          >
            {/* CEO Message */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-red-500 rounded-full"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 300 }}
              />
              <h3 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-6">
                データが創る
                <span className="text-red-500">未来</span>
              </h3>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gray-50 p-8 relative overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-red-500"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              />
              <Quote className="h-8 w-8 text-red-500 mb-4" />
              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed font-light italic mb-6">
                「AIは単なる技術ではありません。それは人間の可能性を拡張し、
                ビジネスの本質を変革する力です。私たちは、データに魂を込め、
                お客様と共に未来を創造していきます。」
              </blockquote>
              <div className="flex items-center">
                <div className="w-1 h-12 bg-red-500 mr-4" />
                <div>
                  <p className="font-bold text-black">田中 太郎</p>
                  <p className="text-sm text-gray-500">代表取締役CEO</p>
                </div>
              </div>
            </motion.div>

            {/* Company Values */}
            <motion.div
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.h4
                variants={itemVariants}
                className="text-2xl font-bold text-black tracking-tight"
              >
                私たちの価値観
              </motion.h4>
              
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    variants={itemVariants}
                    whileHover={{ 
                      x: 10, 
                      transition: { type: "spring", stiffness: 400, damping: 25 } 
                    }}
                    className="flex items-start space-x-4 p-4 border border-black/10 hover:border-red-500 transition-all duration-300 group cursor-pointer"
                  >
                    <motion.div
                      className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-black transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <value.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <h5 className="font-bold text-black group-hover:text-red-500 transition-colors duration-300">
                        {value.title}
                      </h5>
                      <p className="text-gray-600 font-light text-sm">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - CEO Image */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInRight}
            className="relative"
          >
            <motion.div
              className="relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-red-500 z-10"
                initial={{ scale: 0, rotate: 45 }}
                animate={isInView ? { scale: 1, rotate: 45 } : { scale: 0, rotate: 45 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 300 }}
              />
              <motion.div
                className="absolute -bottom-8 -left-8 w-16 h-16 bg-black z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 1.4, type: "spring", stiffness: 300 }}
              />
              
              {/* CEO Image */}
              <motion.div
                className="relative z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.8, duration: 0.6, type: "spring", stiffness: 200 }}
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1736939615657-590b2dce72cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGJ1c2luZXNzJTIwZXhlY3V0aXZlJTIwQ0VPJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2MDU3Nzd8fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="AIMA CEO 田中太郎"
                  className="w-full h-[600px] object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Image overlay with company stats */}
                <motion.div
                  className="absolute bottom-8 left-8 right-8 bg-black/90 text-white p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.6, duration: 0.4 }}
                >
                  <motion.div
                    className="flex justify-between items-center"
                    variants={containerVariants}
                  >
                    <div className="text-center">
                      <motion.div
                        className="text-2xl font-black text-red-500"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 1.8, type: "spring", stiffness: 500 }}
                      >
                        2019
                      </motion.div>
                      <div className="text-xs text-gray-300">設立年</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        className="text-2xl font-black text-red-500"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 2, type: "spring", stiffness: 500 }}
                      >
                        500+
                      </motion.div>
                      <div className="text-xs text-gray-300">クライアント数</div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        className="text-2xl font-black text-red-500"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ delay: 2.2, type: "spring", stiffness: 500 }}
                      >
                        25+
                      </motion.div>
                      <div className="text-xs text-gray-300">受賞歴</div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Background pattern */}
            <motion.div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
                backgroundSize: '30px 30px',
              }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.05 } : { opacity: 0 }}
              transition={{ delay: 2.4, duration: 0.8 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}