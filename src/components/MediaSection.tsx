import React from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight, Quote, Play, ExternalLink, TrendingUp } from 'lucide-react';

export function MediaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Ultra-fast, dynamic animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      rotateX: -20,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
        duration: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 30,
        duration: 0.4,
      },
    },
  };

  const mediaItems = [
    {
      type: "case-study",
      title: "ECサイト売上300%向上",
      company: "株式会社テクノロジー",
      description: "AIによるパーソナライゼーション導入により、3ヶ月でコンバージョン率が劇的に改善",
      metrics: [
        { label: "売上向上", value: "300%" },
        { label: "CVR改善", value: "250%" },
        { label: "ROAS", value: "480%" }
      ],
      category: "E-Commerce"
    },
    {
      type: "press",
      title: "AI Marketing Awards 2024 最優秀賞受賞",
      source: "TechCrunch Japan",
      description: "革新的なAIマーケティングソリューションが業界最高峰の評価を獲得",
      date: "2024.08.15",
      category: "Award"
    },
    {
      type: "video",
      title: "AIマーケティングの未来",
      description: "CEOが語る、AIがもたらすマーケティング革命の全貌",
      duration: "12:30",
      views: "125k",
      category: "Interview"
    },
    {
      type: "case-study",
      title: "製造業のデジタル変革",
      company: "グローバル製造株式会社",
      description: "従来型製造業のマーケティングを完全デジタル化し、新規顧客獲得数を5倍に拡大",
      metrics: [
        { label: "リード獲得", value: "500%" },
        { label: "コスト削減", value: "60%" },
        { label: "効率向上", value: "380%" }
      ],
      category: "Manufacturing"
    },
    {
      type: "press",
      title: "AIマーケティング市場予測レポート発表",
      source: "日経新聞",
      description: "2025年までのAIマーケティング市場の成長予測と業界動向を詳細分析",
      date: "2024.07.22",
      category: "Report"
    },
    {
      type: "case-study",
      title: "SaaS企業の急成長支援",
      company: "クラウドソリューションズ",
      description: "AIドリブンなマーケティング戦略により、ARRを18ヶ月で10倍に成長",
      metrics: [
        { label: "ARR成長", value: "1000%" },
        { label: "CAC削減", value: "70%" },
        { label: "LTV向上", value: "420%" }
      ],
      category: "SaaS"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "E-Commerce": "bg-red-500",
      "Award": "bg-black",
      "Interview": "bg-red-500", 
      "Manufacturing": "bg-black",
      "Report": "bg-red-500",
      "SaaS": "bg-black"
    };
    return colors[category] || "bg-gray-500";
  };

  return (
    <section id="media" className="py-20 bg-gray-50 relative overflow-hidden">
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
            MEDIA
            <motion.span 
              className="text-red-500"
              initial={{ opacity: 0, scale: 0, rotate: 90 }}
              animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: 90 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 700, damping: 20 }}
            >
              .
            </motion.span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0, rotateY: 90 }}
            animate={isInView ? { scaleX: 1, rotateY: 0 } : { scaleX: 0, rotateY: 90 }}
            transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
            className="w-24 h-1 bg-red-500 mx-auto mb-6"
          />
          <motion.p
            variants={titleVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            実際の成果とメディア掲載実績。
            数字が証明する、AIMAの確かな実力をご覧ください。
          </motion.p>
        </motion.div>

        {/* Media Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -20, 
                scale: 1.03,
                rotateY: 3,
                rotateX: 5,
                transition: { type: "spring", stiffness: 400, damping: 25 } 
              }}
              className="group relative bg-white border border-black/10 overflow-hidden transition-all duration-300 hover:border-red-500 hover:shadow-2xl"
            >
              {/* Category Badge */}
              <motion.div
                className={`absolute top-0 right-0 ${getCategoryColor(item.category)} text-white px-4 py-2 text-xs font-bold tracking-wider z-20`}
                initial={{ x: 100, rotate: 45 }}
                whileInView={{ x: 0, rotate: 0 }}
                transition={{ 
                  delay: 0.6 + index * 0.03, 
                  type: "spring", 
                  stiffness: 500, 
                  damping: 25 
                }}
              >
                {item.category}
              </motion.div>

              <div className="p-6">
                {/* Type Icon */}
                <motion.div
                  className="mb-6"
                  whileHover={{ 
                    rotate: [0, -15, 15, 0],
                    scale: [1, 1.2, 1.2, 1]
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {item.type === 'video' && (
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center cursor-pointer group-hover:bg-black transition-colors duration-300"
                    >
                      <Play className="h-6 w-6 text-white ml-1" />
                    </motion.div>
                  )}
                  {item.type === 'press' && (
                    <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                      <Quote className="h-6 w-6 text-white" />
                    </div>
                  )}
                  {item.type === 'case-study' && (
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                  )}
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="text-xl font-bold tracking-tight group-hover:text-red-500 transition-colors duration-300 mb-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                >
                  {item.title}
                </motion.h3>

                {/* Company/Source */}
                {item.company && (
                  <motion.p 
                    className="text-red-500 text-sm font-medium mb-3 tracking-wide"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.03, duration: 0.3 }}
                  >
                    {item.company}
                  </motion.p>
                )}
                {item.source && (
                  <motion.p 
                    className="text-black text-sm font-medium mb-3 tracking-wide"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.03, duration: 0.3 }}
                  >
                    {item.source} • {item.date}
                  </motion.p>
                )}

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 font-light text-sm">
                  {item.description}
                </p>

                {/* Metrics for case studies */}
                {item.metrics && (
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {item.metrics.map((metric, metricIndex) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, scale: 0, rotate: -90 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ 
                          delay: 1 + index * 0.03 + metricIndex * 0.1, 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 25 
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="text-center cursor-pointer"
                      >
                        <div className="text-2xl font-black text-red-500 mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500 font-light tracking-wide">
                          {metric.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Video stats */}
                {item.duration && (
                  <motion.div 
                    className="flex items-center gap-4 text-sm text-gray-500 mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.03, duration: 0.3 }}
                  >
                    <span>{item.duration}</span>
                    <span>•</span>
                    <span>{item.views} views</span>
                  </motion.div>
                )}

                {/* Read more link */}
                <motion.div
                  whileHover={{ x: 8 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="flex items-center text-black group-hover:text-red-500 transition-colors duration-300 cursor-pointer"
                >
                  <span className="text-sm font-medium tracking-wide mr-2">
                    {item.type === 'video' ? '視聴する' : 
                     item.type === 'press' ? '記事を読む' : '詳細を見る'}
                  </span>
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Hover line effect */}
              <motion.div
                className="absolute bottom-0 left-0 h-2 bg-gradient-to-r from-red-500 via-black to-red-500"
                initial={{ scaleX: 0, skewX: -20 }}
                whileHover={{ scaleX: 1, skewX: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ originX: 0, width: '100%' }}
              />

              {/* Glowing effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ zIndex: -1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 300, damping: 25 }}
          className="mt-16"
        >
          <motion.div
            className="bg-black text-white p-12 relative overflow-hidden"
            whileHover={{ scale: 1.02, rotateX: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-white to-red-500"
              initial={{ scaleX: 0, skewX: -20 }}
              whileInView={{ scaleX: 1, skewX: 0 }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            />
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "成功事例" },
                { number: "50+", label: "メディア掲載" },
                { number: "25+", label: "業界アワード" },
                { number: "99.9%", label: "顧客満足度" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                  transition={{ 
                    delay: 1.8 + index * 0.1, 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 25 
                  }}
                  className="cursor-pointer"
                >
                  <motion.div 
                    className="text-4xl md:text-5xl font-black text-red-500 mb-2"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-300 font-light tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}