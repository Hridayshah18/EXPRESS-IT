"use client";

import Lottie from "lottie-react";

const signalAnimation = {
  v: "5.7.4",
  fr: 30,
  ip: 0,
  op: 60,
  w: 120,
  h: 120,
  nm: "Signal",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Pulse ring",
      sr: 1,
      ks: {
        o: { a: 1, k: [{ t: 0, s: [70] }, { t: 60, s: [0] }] },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [35, 35, 100] }, { t: 60, s: [118, 118, 100] }] },
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [62, 62] },
          nm: "Ellipse Path 1",
        },
        {
          ty: "st",
          c: { a: 0, k: [0.31, 0.27, 0.9, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 5 },
          lc: 2,
          lj: 2,
          nm: "Stroke 1",
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "Core",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 1, k: [{ t: 0, s: [88, 88, 100] }, { t: 30, s: [104, 104, 100] }, { t: 60, s: [88, 88, 100] }] },
      },
      shapes: [
        {
          ty: "el",
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [28, 28] },
          nm: "Ellipse Path 1",
        },
        {
          ty: "fl",
          c: { a: 0, k: [0.13, 0.77, 0.37, 1] },
          o: { a: 0, k: 100 },
          r: 1,
          bm: 0,
          nm: "Fill 1",
        },
      ],
      ip: 0,
      op: 60,
      st: 0,
      bm: 0,
    },
  ],
};

export function LottieSignal() {
  return (
    <div className="h-24 w-24" aria-hidden="true">
      <Lottie animationData={signalAnimation} loop autoplay />
    </div>
  );
}
