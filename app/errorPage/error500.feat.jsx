"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import getStyles from "./styles";

const Error500 = () => {
  const {
    Container,
    Title,
    Subtitle,
    Gear,
    ShineEffect,
    LightPoint,
    GlowingCircle,
    ContactInfo,
  } = getStyles();

  useEffect(() => {
    document.title = "در حال بروزرسانی - لطفا صبور باشید";
  }, []);

  // تولید نقاط نورانی در صفحه
  const lightPoints = Array.from({ length: 30 }).map((_, i) => {
    return {
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      scale: Math.random() * 2 + 0.5,
      duration: Math.random() * 3 + 2,
    };
  });

  // تولید دایره‌های نورانی
  const glowingCircles = Array.from({ length: 15 }).map((_, i) => {
    return {
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 100 + 30,
      color: [
        "rgba(77, 160, 176, 0.3)",
        "rgba(94, 114, 235, 0.3)",
        "rgba(189, 45, 245, 0.3)",
        "rgba(35, 166, 213, 0.3)",
        "rgba(35, 213, 171, 0.3)",
      ][i % 5],
      duration: Math.random() * 10 + 15,
      rotationSpeed: Math.random() * 10 + 5,
    };
  });

  return (
    <Container>
      {/* دایره‌های نورانی پس‌زمینه */}
      {glowingCircles.map((circle) => (
        <GlowingCircle
          key={`circle-${circle.id}`}
          style={{
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            background: circle.color,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
            rotate: [0, 360],
          }}
          transition={{
            duration: circle.duration,
            rotate: {
              duration: circle.rotationSpeed,
              repeat: Infinity,
              ease: "linear",
            },
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* نقاط نورانی پس‌زمینه */}
      {lightPoints.map((point) => (
        <LightPoint
          key={`light-${point.id}`}
          style={{
            left: `${point.x}%`,
            top: `${point.y}%`,
            scale: point.scale,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [point.scale, point.scale * 1.5, point.scale],
          }}
          transition={{
            duration: point.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* چرخ‌دنده‌های بزرگ کناری */}
      <Gear
        className="large primary"
        style={{
          width: "400px",
          height: "400px",
          top: "-200px",
          right: "-150px",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <Gear
        className="large secondary"
        style={{
          width: "300px",
          height: "300px",
          bottom: "-150px",
          left: "-100px",
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* آیکون چرخ‌دنده متحرک */}
      <motion.div
        style={{
          position: "absolute",
          top: "30%",
          right: "20%",
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M12 15a3 3 0 100-6 3 3 0 000 6z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(255, 255, 255, 0.1)"
          />
          <motion.path
            d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </svg>
      </motion.div>

      {/* آیکون آچار متحرک دوم */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "15%",
        }}
        animate={{
          rotate: [0, -20, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <svg
          width="70"
          height="70"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))",
          }}
        >
          <motion.path
            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </svg>
      </motion.div>

      {/* چرخ‌دنده‌های شناور (جایگزین اشکال) */}
      {[...Array(20)].map((_, i) => {
        // انتخاب یک اندازه و رنگ تصادفی
        const sizes = ["small", "medium", "small"]; // بیشتر چرخ‌دنده‌های کوچک
        const colors = ["primary", "secondary", "accent"];
        const size = sizes[Math.floor(Math.random() * sizes.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];

        // تعیین زاویه چرخش اولیه تصادفی
        const initialRotate = Math.random() * 360;
        const rotateDirection = Math.random() > 0.5 ? 360 : -360;

        return (
          <Gear
            key={i}
            className={`${size} ${color}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.4,
              zIndex: -1,
            }}
            animate={{
              y: [Math.random() * 100 - 50, Math.random() * -100 + 50],
              x: [Math.random() * 100 - 50, Math.random() * -100 + 50],
              opacity: [0.4, 0.7, 0.4],
              rotate: [initialRotate, initialRotate + rotateDirection],
              scale: [1, Math.random() * 0.3 + 1, 1],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* محتوای اصلی */}
      <ShineEffect>
        <Title
          data-text="خطای سرور"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{ textAlign: "right", width: "100%" }}
        >
          درحال بروزرسانی هستیم !
        </Title>
      </ShineEffect>

      <Subtitle
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        style={{ textAlign: "right", direction: "rtl" }}
      >
        متأسفانه سرور قادر به پاسخگویی نمی‌باشد. تیم فنی در حال بررسی و بروز
        رسانی است. لطفا دقایقی دیگر مجدد تلاش کنید.
      </Subtitle>

      <ContactInfo
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        style={{ textAlign: "right", direction: "rtl" }}
      >
        <div>
          در صورت نیاز به پشتیبانی، به وب‌سایت{" "}
          <span
            style={{
              color: "#9fd9ff",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            www.example.com
          </span>{" "}
          مراجعه کنید.
        </div>
        <div style={{ marginTop: "10px", fontWeight: "bold" }}>
          شماره تماس پشتیبانی:{" "}
          <span style={{ color: "#9fd9ff", direction: "ltr" }}>
            ۰۲۱۸۸۵۵۶۶۷۷
          </span>
        </div>
        <div style={{ marginTop: "10px", fontSize: "14px", opacity: 0.8 }}>
          کد خطا: 500{" "}
        </div>
      </ContactInfo>
    </Container>
  );
};

export default Error500;
