import styled from "styled-components";
import { motion } from "framer-motion";

const getStyles = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    max-width: 100vw;
    margin: 0;
    padding: clamp(20px, 5vw, 40px);
    box-sizing: border-box;
    background: linear-gradient(
      135deg,
      #6a11cb 0%,
      #8075ff 25%,
      #3a47d5 50%,
      #00b8ff 75%,
      #0fd5c8 100%
    );
    background-size: 500% 500%;
    animation: gradientAnimation 15s ease infinite;
    color: white;
    text-align: right;
    direction: rtl;
    font-family: "PeydaWeb", sans-serif;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    @media (max-width: 768px) {
      text-align: center;
      position: fixed;
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
    }

    @keyframes gradientAnimation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    /* اطمینان از کامل بودن صفحه */
    &:before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: radial-gradient(
        circle at center,
        transparent 0%,
        rgba(0, 0, 0, 0.15) 100%
      );
    }
  `;

  const Title = styled(motion.h1)`
    font-size: clamp(2rem, 5vw, 4.8rem);
    margin-bottom: 0;
    font-weight: 900;
    background: linear-gradient(to right, #ffffff, #f0f8ff, #ffffff, #e6f0ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    letter-spacing: 2px;
    position: relative;
    word-wrap: break-word;
    padding: 0 clamp(10px, 3vw, 20px);

    @media (max-width: 768px) {
      font-size: clamp(2rem, 8vw, 3.5rem);
    }

    &::after {
      content: attr(data-text);
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      background: linear-gradient(to right, #00f2fe, #4facfe, #b721ff);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      filter: blur(10px);
      opacity: 0.8;
    }
  `;

  const Subtitle = styled(motion.p)`
    font-size: clamp(1rem, 3vw, 1.6rem);
    width: 100%;
    max-width: min(90vw, 620px);
    line-height: 1.7;
    margin: clamp(1rem, 3vw, 1.2rem) auto clamp(1.5rem, 4vw, 2.5rem);
    background: rgba(255, 255, 255, 0.18);
    padding: clamp(12px, 3vw, 18px) clamp(15px, 4vw, 28px);
    border-radius: 20px;
    backdrop-filter: blur(7px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15),
      0 0 20px rgba(255, 255, 255, 0.15) inset;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.25);

    @media (max-width: 768px) {
      font-size: clamp(1rem, 4vw, 1.4rem);
    }
  `;

  const Gear = styled(motion.div)`
    position: absolute;
    border-radius: 50%;
    border: 12px dashed rgba(255, 255, 255, 0.8);
    opacity: 0.7;
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.7),
      0 0 80px rgba(255, 255, 255, 0.25) inset;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 40%;
      height: 40%;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
    }

    @media (max-width: 768px) {
      &.large {
        width: 120px !important;
        height: 120px !important;
        border-width: 12px;
      }

      &.medium {
        width: 80px !important;
        height: 80px !important;
        border-width: 8px;
      }

      &.small {
        width: 60px !important;
        height: 60px !important;
        border-width: 6px;
      }
    }

    &.large {
      width: 180px;
      height: 180px;
      border-width: 16px;
      border-style: dashed;
    }

    &.medium {
      width: 120px;
      height: 120px;
      border-width: 12px;
      border-style: dashed;
    }

    &.small {
      width: 80px;
      height: 80px;
      border-width: 10px;
      border-style: dashed;
    }

    &.primary {
      border-color: rgba(255, 255, 255, 0.8);
    }

    &.secondary {
      border-color: rgba(173, 216, 255, 0.8);
    }

    &.accent {
      border-color: rgba(221, 160, 252, 0.8);
    }
  `;

  const ContactInfo = styled(motion.div)`
    width: min(90vw, 600px);
    margin: clamp(1.5rem, 4vw, 2.5rem) auto;
    padding: clamp(15px, 4vw, 30px);
    background: rgba(255, 255, 255, 0.18);
    border-radius: 16px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    border: 1px solid rgba(255, 255, 255, 0.25);
    transform-style: preserve-3d;
    perspective: 1000px;

    @media (max-width: 768px) {
      border-radius: 12px;
      padding: 15px;
      margin-bottom: 40px; /* Add extra space at bottom for mobile scrolling */
      -webkit-transform: translateZ(0); /* Prevent safari flickering */
      transform: translateZ(0);
    }
  `;

  const LightPoint = styled(motion.div)`
    position: absolute;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    filter: blur(4px);
    box-shadow: 0 0 15px 4px rgba(255, 255, 255, 0.8);
  `;

  const GlowingCircle = styled(motion.div)`
    position: absolute;
    border-radius: 50%;
    filter: blur(20px);
  `;

  const ShineEffect = styled(motion.div)`
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      transform: rotate(30deg);
      animation: shine 4s infinite;
    }

    @keyframes shine {
      0% {
        transform: translateX(-150%) rotate(30deg);
      }
      100% {
        transform: translateX(150%) rotate(30deg);
      }
    }
  `;

  return {
    Container,
    Title,
    Subtitle,
    Gear,
    ShineEffect,
    LightPoint,
    GlowingCircle,
    ContactInfo,
  };
};

export default getStyles;
