import React from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Brain, Target, BarChart3, Zap, Users, TrendingUp } from 'lucide-react';

export function ServiceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Fast, sleek animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40, 
      rotateX: -15,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
        duration: 0.4,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
        duration: 0.3,
      },
    },
  };

  const services = [
    {
      icon: Brain,
      title: "AIマーケティング戦略",
      description: "機械学習とビッグデータ解析により、最適なマーケティング戦略を自動生成。競合他社の一歩先を行く革新的なアプローチを提供します。",
      features: ["予測分析", "自動最適化", "競合分析"],
    },
    {
      icon: Target,
      title: "パーソナライゼーション",
      description: "個々の顧客の行動パターンを分析し、一人ひとりに最適化されたコンテンツとエクスペリエンスを創出します。",
      features: ["行動解析", "動的コンテンツ", "リアルタイム配信"],
    },
    {
      icon: BarChart3,
      title: "データ分析・可視化",
      description: "複雑なマーケティングデータを直感的なダッシュボードで可視化。意思決定を加速する洞察を提供します。",
      features: ["リアルタイム分析", "予測レポート", "KPI追跡"],
    },
    {
      icon: Zap,
      title: "自動化プラットフォーム",
      description: "マーケティングプロセス全体を自動化し、効率性と精度を飛躍的に向上させる次世代プラットフォーム。",
      features: ["ワークフロー自動化", "スケジューリング", "A/Bテスト"],
    },
    {
      icon: Users,
      title: "カスタマージャーニー最適化",
      description: "顧客の全てのタッチポイントを最適化し、コンバージョン率とカスタマーエクスペリエンスを向上させます。",
      features: ["ジャーニーマッピング", "タッチポイント分析", "UX最適化"],
    },
    {
      icon: TrendingUp,
      title: "成長戦略コンサルティング",
      description: "AIが導き出した洞察をもとに、持続可能な成長戦略を策定。事業拡大を確実に支援します。",
      features: ["戦略立案", "成長予測", "ROI最適化"],
    },
  ];

  return (
    <section id="service" className="py-20 bg-white relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={titleVariants}
            className="text-6xl md:text-8xl lg:text-9xl mb-4 font-black text-black tracking-tighter"
          >
            SERVICE
            <motion.span 
              className="text-red-500"
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 600, damping: 25 }}
            >
              .
            </motion.span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.6, duration: 0.4, ease: "easeOut" }}
            className="w-24 h-1 bg-red-500 mx-auto mb-6"
          />
          <motion.p
            variants={titleVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            AIの力で、マーケティングの可能性を無限に拡張します。
            データドリブンなアプローチで、確実な成果をお約束します。
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                rotateY: 5,
                transition: { type: "spring", stiffness: 400, damping: 25 } 
              }}
              className="group relative bg-white border border-black/10 p-6 transition-all duration-300 hover:border-red-500 hover:shadow-2xl overflow-hidden"
            >
              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 left-0 w-0 h-0 border-l-[50px] border-l-red-500 border-b-[50px] border-b-transparent"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05, type: "spring", stiffness: 500 }}
              />
              
              {/* Icon */}
              <motion.div
                className="relative mb-6 z-10"
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.1, 1.1, 1]
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-16 h-16 flex items-center justify-center text-black group-hover:text-red-500 transition-colors duration-300">
                  <service.icon className="h-8 w-8" />
                </div>
              </motion.div>

              {/* Title */}
              <motion.h3 
                className="text-xl font-bold tracking-tight group-hover:text-red-500 transition-colors duration-300 mb-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {service.title}
              </motion.h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-6 font-light text-sm">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 1.2 + index * 0.05 + featureIndex * 0.03, 
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300
                    }}
                    className="flex items-center text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
                  >
                    <motion.div 
                      className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    />
                    {feature}
                  </motion.div>
                ))}
              </div>

              {/* Hover line effect */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-red-500 to-black"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ originX: 0, width: '100%' }}
              />

              {/* Background glow effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ zIndex: -1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
          transition={{ delay: 1.5, type: "spring", stiffness: 300, damping: 25 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              rotateX: 5,
              y: -5
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="inline-block cursor-pointer"
          >
            <div className="bg-black text-white p-8 relative group overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600"
                initial={{ x: '-100%', skewX: -20 }}
                whileHover={{ x: 0, skewX: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <h3 className="text-3xl mb-2 font-black tracking-tighter relative z-10">
                カスタムソリューション
              </h3>
              <p className="text-gray-300 group-hover:text-white relative z-10 transition-colors duration-300">
                あなたのビジネスに最適なAIソリューションを設計します
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}