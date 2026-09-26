import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 24, rest: SVGProps<SVGSVGElement>) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...rest,
});

export const Phone = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <path d="M5 3.5h3l1.6 4.2-2 1.3a11 11 0 0 0 5.4 5.4l1.3-2 4.2 1.6v3A2 2 0 0 1 16.4 19 14 14 0 0 1 3 5.6a2 2 0 0 1 2-2.1Z" fill="currentColor" stroke="none" />
  </svg>
);
export const Pin = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <path d="M12 21.5s-7-6.2-7-12a7 7 0 1 1 14 0c0 5.8-7 12-7 12Z" fill="currentColor" stroke="none" />
    <circle cx="12" cy="9.5" r="2.6" fill="#15100b" stroke="none" />
  </svg>
);
export const Clock = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 2" />
  </svg>
);
export const Arrow = ({ size = 22, ...r }: P) => (
  <svg {...base(size, r)} viewBox="0 0 28 24">
    <path d="M3 12h21M18 6l6 6-6 6" />
  </svg>
);
export const Bowl = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <path d="M3 12h18a9 9 0 0 1-18 0Z" />
    <path d="M7 21h10M9 3c-1 1.3 1 2.2 0 3.5M12 2.5c-1 1.3 1 2.2 0 3.5M15 3c-1 1.3 1 2.2 0 3.5" />
  </svg>
);
export const People = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M3 19.5c.6-3.4 3-5.3 6-5.3s5.4 1.9 6 5.3" />
    <circle cx="16.5" cy="8.8" r="2.6" />
    <path d="M16.5 14c2.4 0 4 1.5 4.5 4" />
  </svg>
);
export const Wine = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <path d="M7.5 3h9c.5 4 0 8-4.5 8.5C7.5 11 7 7 7.5 3Z" />
    <path d="M12 11.5V20M8.5 20.5h7M7.6 6.5h8.8" />
  </svg>
);
export const Heart = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20Z" />
  </svg>
);
export const House = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <path d="M3.5 11 12 4l8.5 7M5.5 9.5V20h13V9.5" />
    <path d="M10 20v-5.5h4V20" />
  </svg>
);
export const Leaf = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <path d="M5 19C4 11 9 5 19.5 4.5 20 14 14 20 5 19Z" />
    <path d="M5 19c3-4 6-7 10-10" />
  </svg>
);
export const Cloche = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <path d="M3 17.5h18M4.5 17.5a7.5 7.5 0 0 1 15 0M12 7.5V6M10.5 6h3M2.5 20h19" />
  </svg>
);
export const Scooter = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <circle cx="6" cy="17.5" r="2.5" />
    <circle cx="18" cy="17.5" r="2.5" />
    <path d="M8.5 17.5h6.5l2-6.5h-3M17 11l1.5-4H15M4 14.5h7l1-4H6.5" />
    <rect x="3.5" y="6.5" width="5.5" height="4" rx=".6" />
  </svg>
);
export const Bag = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <path d="M5 8h14l-1 12.5H6L5 8Z" />
    <path d="M9 10V6.5a3 3 0 0 1 6 0V10" />
  </svg>
);
export const Chef = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <path d="M7 14.5A4 4 0 0 1 6.5 6.8a4.5 4.5 0 0 1 8.3-1.6A3.7 3.7 0 0 1 17 14.5" />
    <path d="M7 14.5h10V20H7zM7 17h10" />
  </svg>
);
export const User = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <circle cx="12" cy="8" r="3.6" />
    <path d="M4.5 20c.8-4 3.8-6 7.5-6s6.7 2 7.5 6" />
  </svg>
);
export const Calendar = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <path d="M3.5 9.5h17M8 3v4M16 3v4" />
  </svg>
);
export const Crown = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <path d="M3.5 8 8 12l4-6 4 6 4.5-4-1.5 10H5L3.5 8Z" fill="currentColor" stroke="none" />
  </svg>
);
export const Chevron = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
export const Whatsapp = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <path d="M4.5 19.5 5.6 16A8 8 0 1 1 8.4 18.6l-3.9.9Z" />
    <path d="M9.2 8.6c.2-.4.6-.5.9-.4l.8 1.8-.6.8a6 6 0 0 0 2.8 2.8l.8-.6 1.8.8c.1.3 0 .7-.4.9-1 .7-2.4.6-4-.6a8.7 8.7 0 0 1-2.4-2.6c-.8-1.4-.5-2.4.3-2.9Z" />
  </svg>
);
export const Telegram = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <path d="M20.5 4.5 3.5 11.2l5.3 1.9 1.9 5.9 3-3.5 4.2 3.1 2.6-14Z" />
    <path d="m8.8 13.1 8.2-5.6-6.3 7" />
  </svg>
);
export const Instagram = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.8" cy="7.2" r=".6" fill="currentColor" />
  </svg>
);
export const Fork = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <path d="M12 12v9.5M8.5 3v5a3.5 3.5 0 0 0 7 0V3M12 3v6" />
  </svg>
);
export const ForkKnife = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <path d="M7 3v5.5a2.2 2.2 0 0 0 4.4 0V3M9.2 3v18M16.5 21V3c-2 1.5-3 4-3 8h3" />
  </svg>
);
export const Menu = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);
export const Close = ({ size, ...r }: P) => (
  <svg {...base(size, r)}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);
