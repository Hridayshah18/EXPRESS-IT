"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { LottieRefCurrentProps } from "lottie-react";

const LottiePlayer = dynamic(async () => (await import("lottie-react")).default, {
  ssr: false,
  loading: () => <span className="block h-full w-full rounded-[1.6rem] bg-white/10" />,
});

export type ParentHubLottieKind = "book" | "speech" | "calendar" | "path";

type ParentHubLottieProps = {
  kind: ParentHubLottieKind;
  label: string;
  playSignal: number;
  delay?: number;
};

const brand = {
  ink: [0.06, 0.09, 0.16, 1],
  gold: [0.96, 0.66, 0.16, 1],
  violet: [0.55, 0.36, 0.96, 1],
  emerald: [0.19, 0.78, 0.51, 1],
  cyan: [0.13, 0.75, 0.82, 1],
  white: [1, 0.98, 0.92, 1],
  softWhite: [1, 1, 1, 0.78],
};

const key = (value: unknown) => ({ a: 0, k: value });

const animated = (frames: Array<{ t: number; s: number[] }>) => ({
  a: 1,
  k: frames.map((frame, index) => {
    const nextFrame = frames[index + 1];

    if (!nextFrame) return frame;

    return {
      t: frame.t,
      s: frame.s,
      e: nextFrame.s,
      i: { x: [0.22], y: [1] },
      o: { x: [0.16], y: [1] },
    };
  }),
});

const property = (value: unknown) => {
  if (value && typeof value === "object" && "a" in value && "k" in value) {
    return value;
  }

  return key(value);
};

function transform({
  p = [60, 60, 0],
  s = [100, 100, 100],
  r = 0,
  o = 100,
}: {
  p?: unknown;
  s?: unknown;
  r?: unknown;
  o?: unknown;
}) {
  return {
    o: property(o),
    r: property(r),
    p: property(p),
    a: key([0, 0, 0]),
    s: property(s),
  };
}

function layer(
  ind: number,
  name: string,
  shapes: unknown[],
  ks = transform({}),
  op = 72,
) {
  return {
    ddd: 0,
    ind,
    ty: 4,
    nm: name,
    sr: 1,
    ks,
    shapes,
    ip: 0,
    op,
    st: 0,
    bm: 0,
  };
}

function rect(size: number[], fillColor: number[], radius = 10, strokeColor?: number[], strokeWidth = 2) {
  return [
    { ty: "rc", d: 1, s: key(size), p: key([0, 0]), r: key(radius), nm: "Rounded rect" },
    { ty: "fl", c: key(fillColor), o: key(100), r: 1, bm: 0, nm: "Fill" },
    ...(strokeColor
      ? [{ ty: "st", c: key(strokeColor), o: key(100), w: key(strokeWidth), lc: 2, lj: 2, nm: "Stroke" }]
      : []),
  ];
}

function circle(size: number[], fillColor: number[], strokeColor?: number[], strokeWidth = 2) {
  return [
    { ty: "el", p: key([0, 0]), s: key(size), nm: "Ellipse" },
    { ty: "fl", c: key(fillColor), o: key(100), r: 1, bm: 0, nm: "Fill" },
    ...(strokeColor
      ? [{ ty: "st", c: key(strokeColor), o: key(90), w: key(strokeWidth), lc: 2, lj: 2, nm: "Stroke" }]
      : []),
  ];
}

function strokePath(vertices: number[][], color: number[], width = 5, closed = false) {
  return [
    {
      ty: "sh",
      d: 1,
      ks: {
        a: 0,
        k: {
          i: vertices.map(() => [0, 0]),
          o: vertices.map(() => [0, 0]),
          v: vertices,
          c: closed,
        },
      },
      nm: "Path",
    },
    {
      ty: "tm",
      s: key(0),
      e: animated([
        { t: 0, s: [0] },
        { t: 44, s: [100] },
        { t: 72, s: [100] },
      ]),
      o: key(0),
      m: 1,
      nm: "Trace",
    },
    { ty: "st", c: key(color), o: key(100), w: key(width), lc: 2, lj: 2, nm: "Stroke" },
  ];
}

function staticStrokePath(vertices: number[][], color: number[], width = 5, closed = false) {
  return [
    {
      ty: "sh",
      d: 1,
      ks: {
        a: 0,
        k: {
          i: vertices.map(() => [0, 0]),
          o: vertices.map(() => [0, 0]),
          v: vertices,
          c: closed,
        },
      },
      nm: "Path",
    },
    { ty: "st", c: key(color), o: key(100), w: key(width), lc: 2, lj: 2, nm: "Stroke" },
  ];
}

function buildBookAnimation() {
  return {
    v: "5.7.4",
    fr: 30,
    ip: 0,
    op: 72,
    w: 120,
    h: 120,
    nm: "Parent resources book",
    ddd: 0,
    assets: [],
    layers: [
      layer(1, "Resource lines", staticStrokePath([[-12, -10], [10, -10], [10, 0], [-8, 0], [-8, 10], [10, 10]], brand.ink, 2.5), transform({ p: [73, 62, 0] })),
      layer(2, "Spine", rect([8, 60], brand.gold, 4), transform({ p: [60, 61, 0] })),
      layer(3, "Right page", rect([38, 54], brand.white, 8, brand.gold, 2), transform({ p: [73, 61, 0], r: animated([{ t: 0, s: [4] }, { t: 30, s: [11] }, { t: 72, s: [4] }]) })),
      layer(4, "Left page", rect([38, 54], brand.white, 8, brand.gold, 2), transform({ p: [47, 61, 0], r: animated([{ t: 0, s: [-4] }, { t: 30, s: [-11] }, { t: 72, s: [-4] }]) })),
      layer(5, "Glow", circle([78, 78], [0.96, 0.66, 0.16, 0.08]), transform({ s: animated([{ t: 0, s: [90, 90, 100] }, { t: 36, s: [102, 102, 100] }, { t: 72, s: [90, 90, 100] }]) })),
    ],
  };
}

function buildSpeechAnimation() {
  return {
    v: "5.7.4",
    fr: 30,
    ip: 0,
    op: 72,
    w: 120,
    h: 120,
    nm: "Communication bubbles",
    ddd: 0,
    assets: [],
    layers: [
      ...[45, 60, 75].map((x, index) =>
        layer(
          1 + index,
          `Pulse dot ${index + 1}`,
          circle([8, 8], index === 1 ? brand.gold : brand.ink),
          transform({
            p: [x, 53, 0],
            s: animated([
              { t: index * 6, s: [70, 70, 100] },
              { t: 24 + index * 6, s: [120, 120, 100] },
              { t: 54 + index * 6, s: [70, 70, 100] },
            ]),
          }),
        ),
      ),
      layer(4, "Tail", staticStrokePath([[0, 0], [-10, 12], [10, 7]], brand.cyan, 4), transform({ p: [46, 73, 0] })),
      layer(5, "Front bubble", rect([58, 40], brand.white, 16, brand.cyan, 3), transform({ p: [53, 53, 0], s: animated([{ t: 0, s: [96, 96, 100] }, { t: 24, s: [104, 104, 100] }, { t: 72, s: [96, 96, 100] }]) })),
      layer(6, "Back bubble", rect([48, 34], [0.55, 0.36, 0.96, 0.82], 14, brand.softWhite, 2), transform({ p: [72, 70, 0], s: animated([{ t: 0, s: [88, 88, 100] }, { t: 32, s: [100, 100, 100] }, { t: 72, s: [94, 94, 100] }]) })),
    ],
  };
}

function buildCalendarAnimation() {
  return {
    v: "5.7.4",
    fr: 30,
    ip: 0,
    op: 72,
    w: 120,
    h: 120,
    nm: "Workshop calendar",
    ddd: 0,
    assets: [],
    layers: [
      layer(1, "Check", strokePath([[-14, 2], [-4, 12], [17, -12]], brand.emerald, 6), transform({ p: [60, 68, 0] })),
      ...[
        [46, 56],
        [60, 56],
        [74, 56],
      ].map((point, index) =>
        layer(
          2 + index,
          `Date dot ${index + 1}`,
          circle([5, 5], index === 1 ? brand.violet : brand.ink),
          transform({ p: [point[0], point[1], 0] }),
        ),
      ),
      layer(5, "Binding right", circle([8, 8], brand.ink), transform({ p: [73, 34, 0] })),
      layer(6, "Binding left", circle([8, 8], brand.ink), transform({ p: [47, 34, 0] })),
      layer(7, "Top bar", rect([62, 16], brand.gold, 8), transform({ p: [60, 42, 0] })),
      layer(8, "Calendar", rect([62, 58], brand.white, 12, brand.gold, 3), transform({ p: [60, 63, 0] })),
    ],
  };
}

function buildPathAnimation() {
  return {
    v: "5.7.4",
    fr: 30,
    ip: 0,
    op: 72,
    w: 120,
    h: 120,
    nm: "Guide path",
    ddd: 0,
    assets: [],
    layers: [
      ...[
        [32, 82, brand.emerald],
        [50, 52, brand.cyan],
        [71, 72, brand.violet],
        [90, 36, brand.gold],
      ].map(([x, y, color], index) =>
        layer(
          1 + index,
          `Milestone ${index + 1}`,
          circle([13, 13], color as number[], brand.softWhite, 2),
          transform({
            p: [x as number, y as number, 0],
            s: animated([
              { t: index * 8, s: [72, 72, 100] },
              { t: 24 + index * 8, s: [112, 112, 100] },
              { t: 56 + index * 4, s: [92, 92, 100] },
            ]),
          }),
        ),
      ),
      layer(5, "Path", staticStrokePath([[-28, 22], [-10, -8], [11, 12], [30, -24]], brand.gold, 5), transform({ p: [60, 60, 0] })),
      layer(6, "Path glow", staticStrokePath([[-28, 22], [-10, -8], [11, 12], [30, -24]], [0.96, 0.66, 0.16, 0.18], 11), transform({ p: [60, 60, 0] })),
    ],
  };
}

function buildAnimation(kind: ParentHubLottieKind) {
  if (kind === "book") return buildBookAnimation();
  if (kind === "speech") return buildSpeechAnimation();
  if (kind === "calendar") return buildCalendarAnimation();
  return buildPathAnimation();
}

export function ParentHubLottie({ kind, label, playSignal, delay = 0 }: ParentHubLottieProps) {
  const shellRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [pendingPlay, setPendingPlay] = useState(false);
  const reduceMotion = useReducedMotion();
  const animationData = useMemo(() => buildAnimation(kind), [kind]);

  useEffect(() => {
    const shell = shellRef.current;

    if (!shell || shouldLoad) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "180px" },
    );

    observer.observe(shell);
    return () => observer.disconnect();
  }, [shouldLoad]);

  const playOnce = useCallback(() => {
    setShouldLoad(true);

    if (reduceMotion) return;

    setPendingPlay(true);
    lottieRef.current?.goToAndPlay(0, true);
  }, [reduceMotion]);

  useEffect(() => {
    if (playSignal > 0) playOnce();
  }, [playOnce, playSignal]);

  const handleReady = () => {
    if (pendingPlay && !reduceMotion) {
      lottieRef.current?.goToAndPlay(0, true);
      setPendingPlay(false);
      return;
    }

    lottieRef.current?.goToAndStop(0, true);
  };

  return (
    <div
      ref={shellRef}
      className="parent-lottie-shell flex h-20 w-20 items-center justify-center rounded-[1.6rem] border border-white/20 bg-white/10 shadow-[0_18px_42px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:h-24 sm:w-24"
      style={{ animationDelay: `${delay}ms` }}
      aria-label={label}
      role="img"
    >
      {shouldLoad ? (
        <LottiePlayer
          lottieRef={lottieRef}
          animationData={animationData}
          autoplay={false}
          loop={false}
          onDOMLoaded={handleReady}
          rendererSettings={{ preserveAspectRatio: "xMidYMid meet", progressiveLoad: true }}
          className="h-[84px] w-[84px] sm:h-[96px] sm:w-[96px]"
        />
      ) : (
        <span className="h-12 w-12 rounded-2xl bg-gradient-to-br from-amber-300/80 to-emerald-300/80 shadow-[0_0_28px_rgba(245,158,11,0.24)]" />
      )}
    </div>
  );
}
