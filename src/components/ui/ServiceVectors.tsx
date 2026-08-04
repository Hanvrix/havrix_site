"use client";

import React from "react";

export function WebVectorImage({ className = "w-auto h-32 sm:h-36" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Monitor Frame */}
      <rect x="35" y="20" width="130" height="90" rx="8" fill="#F0FDF4" stroke="#16A34A" strokeWidth="3" />
      <rect x="43" y="32" width="114" height="68" rx="4" fill="white" stroke="#0F2D5C" strokeWidth="2" />
      {/* Browser Bar */}
      <line x1="43" y1="44" x2="157" y2="44" stroke="#0F2D5C" strokeWidth="2" />
      <circle cx="51" cy="38" r="2.5" fill="#16A34A" />
      <circle cx="59" cy="38" r="2.5" fill="#3B82F6" />
      <circle cx="67" cy="38" r="2.5" fill="#EF4444" />
      {/* Monitor Stand */}
      <path d="M85 110L80 130H120L115 110" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="70" y="130" width="60" height="6" rx="3" fill="#16A34A" />
      {/* Stylus Pen */}
      <path d="M165 40L195 10L205 20L175 50L160 55L165 40Z" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Chat Bubbles */}
      <rect x="135" y="65" width="65" height="40" rx="8" fill="white" stroke="#16A34A" strokeWidth="2.5" />
      <path d="M145 78H180M145 86H168" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" />
      {/* Palette Image Frame */}
      <rect x="53" y="52" width="40" height="35" rx="4" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2" />
      <circle cx="63" cy="62" r="4" fill="#16A34A" />
      <path d="M54 82L66 70L75 78L83 72L92 82" stroke="#0F2D5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MobileVectorImage({ className = "w-auto h-32 sm:h-36" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Tablet */}
      <rect x="25" y="25" width="115" height="110" rx="12" fill="#F0FDF4" stroke="#16A34A" strokeWidth="3" />
      <rect x="35" y="37" width="95" height="86" rx="6" fill="white" stroke="#0F2D5C" strokeWidth="2" />
      <rect x="42" y="45" width="40" height="30" rx="4" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2" />
      <rect x="42" y="82" width="81" height="10" rx="3" fill="#F1F5F9" stroke="#0F2D5C" strokeWidth="1.5" />
      <rect x="42" y="98" width="55" height="10" rx="3" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
      <circle cx="102" cy="55" r="10" fill="#16A34A" opacity="0.2" stroke="#16A34A" strokeWidth="2" />

      {/* Phone */}
      <rect x="135" y="15" width="75" height="130" rx="14" fill="white" stroke="#16A34A" strokeWidth="3" />
      <rect x="143" y="27" width="59" height="106" rx="8" fill="#F0FDF4" stroke="#0F2D5C" strokeWidth="2" />
      <line x1="162" y1="21" x2="182" y2="21" stroke="#0F2D5C" strokeWidth="3" strokeLinecap="round" />
      <rect x="150" y="37" width="45" height="26" rx="5" fill="white" stroke="#16A34A" strokeWidth="2" />
      <rect x="150" y="70" width="45" height="16" rx="4" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
      <rect x="150" y="92" width="45" height="16" rx="4" fill="white" stroke="#0F2D5C" strokeWidth="1.5" />
      <circle cx="172.5" cy="122" r="3.5" fill="#16A34A" />

      {/* Stylus Pencil */}
      <path d="M90 10L135 55L125 65L80 20Z" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2" />
    </svg>
  );
}

export function SoftwareVectorImage({ className = "w-auto h-32 sm:h-36" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Code Window */}
      <rect x="35" y="20" width="165" height="110" rx="10" fill="white" stroke="#16A34A" strokeWidth="3" />
      <path d="M35 45H200" stroke="#0F2D5C" strokeWidth="2" />
      <circle cx="50" cy="32" r="3" fill="#EF4444" />
      <circle cx="60" cy="32" r="3" fill="#EAB308" />
      <circle cx="70" cy="32" r="3" fill="#16A34A" />
      
      {/* Code Lines & Tags */}
      <path d="M50 62L60 72L50 82" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="70" y1="72" x2="130" y2="72" stroke="#0F2D5C" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M50 94L65 94M73 94L110 94" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" />

      {/* Floating Database Cylinders */}
      <g transform="translate(132, 55)">
        <rect x="0" y="0" width="55" height="58" rx="8" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2" />
        <ellipse cx="27.5" cy="14" rx="20" ry="6" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
        <ellipse cx="27.5" cy="28" rx="20" ry="6" fill="white" stroke="#16A34A" strokeWidth="1.5" />
        <ellipse cx="27.5" cy="42" rx="20" ry="6" fill="white" stroke="#16A34A" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function SeoVectorImage({ className = "w-auto h-32 sm:h-36" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Analytics Screen */}
      <rect x="25" y="30" width="135" height="95" rx="10" fill="white" stroke="#0F2D5C" strokeWidth="2.5" />
      <line x1="40" y1="105" x2="145" y2="105" stroke="#CBD5E1" strokeWidth="2" />
      {/* Bar Chart */}
      <rect x="48" y="80" width="14" height="25" rx="2" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
      <rect x="68" y="65" width="14" height="40" rx="2" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
      <rect x="88" y="50" width="14" height="55" rx="2" fill="#16A34A" />
      <rect x="108" y="60" width="14" height="45" rx="2" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
      {/* Line Chart Curve */}
      <path d="M48 75L68 60L88 42L108 52L132 28" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      {/* Rocket Launch */}
      <g transform="translate(140, 15)">
        <path d="M35 10C35 10 55 25 55 55L35 70L15 55C15 25 35 10 35 10Z" fill="white" stroke="#16A34A" strokeWidth="3" strokeLinejoin="round" />
        <circle cx="35" cy="38" r="8" fill="#DCFCE7" stroke="#0F2D5C" strokeWidth="2" />
        <path d="M15 55L5 65V75L15 70" stroke="#16A34A" strokeWidth="2" fill="#DCFCE7" />
        <path d="M55 55L65 65V75L55 70" stroke="#16A34A" strokeWidth="2" fill="#DCFCE7" />
        {/* Flame */}
        <path d="M30 70C30 85 35 95 35 95C35 95 40 85 40 70Z" fill="#EAB308" stroke="#EAB308" strokeWidth="2" />
      </g>
    </svg>
  );
}

export function ErpVectorImage({ className = "w-auto h-32 sm:h-36" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Central Cloud */}
      <path d="M55 65C45 65 35 75 35 85C35 98 47 105 60 105H180C193 105 203 95 203 82C203 70 193 62 180 62C177 45 160 35 143 38C130 28 110 30 100 42C90 38 75 45 55 65Z" fill="#F0FDF4" stroke="#16A34A" strokeWidth="3" strokeLinejoin="round" />
      
      {/* ERP Boxes Inside Cloud */}
      <rect x="70" y="65" width="28" height="28" rx="5" fill="white" stroke="#0F2D5C" strokeWidth="2" />
      <rect x="106" y="55" width="28" height="28" rx="5" fill="#DCFCE7" stroke="#16A34A" strokeWidth="2" />
      <rect x="142" y="65" width="28" height="28" rx="5" fill="white" stroke="#0F2D5C" strokeWidth="2" />

      {/* Sync Arrows Loop */}
      <path d="M40 120C65 142 175 142 200 120" stroke="#16A34A" strokeWidth="2.5" strokeDasharray="4 4" />
      <path d="M195 110L205 120L193 126" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SupportVectorImage({ className = "w-auto h-32 sm:h-36" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Headset Arc */}
      <path d="M55 90C55 45 85 22 120 22C155 22 185 45 185 90" stroke="#16A34A" strokeWidth="4" strokeLinecap="round" />
      
      {/* Left & Right Ear Cups */}
      <rect x="42" y="80" width="18" height="38" rx="8" fill="#0F2D5C" stroke="#0F2D5C" strokeWidth="2" />
      <rect x="180" y="80" width="18" height="38" rx="8" fill="#0F2D5C" stroke="#0F2D5C" strokeWidth="2" />
      <rect x="48" y="87" width="6" height="24" rx="3" fill="#DCFCE7" />
      <rect x="186" y="87" width="6" height="24" rx="3" fill="#DCFCE7" />

      {/* Mic Boom */}
      <path d="M55 100L95 128H125" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="128" cy="128" r="5" fill="#16A34A" />

      {/* Floating Chat Bubbles */}
      <rect x="140" y="32" width="65" height="38" rx="8" fill="white" stroke="#16A34A" strokeWidth="2.5" />
      <path d="M150 45H190M150 54H175" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />

      <rect x="35" y="42" width="55" height="32" rx="8" fill="#DCFCE7" stroke="#0F2D5C" strokeWidth="2" />
      <path d="M43 54H75M43 62H63" stroke="#0F2D5C" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
