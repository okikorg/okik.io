import { useEffect, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const DARK_COLORS = [
  [59, 130, 246, 0.25],   // blue
  [99, 102, 241, 0.20],   // indigo
  [139, 92, 246, 0.18],   // violet
  [16, 185, 129, 0.12],   // emerald
  [236, 72, 153, 0.10],   // pink
] as const;

const LIGHT_COLORS = [
  [59, 130, 246, 0.12],
  [99, 102, 241, 0.10],
  [139, 92, 246, 0.08],
  [16, 185, 129, 0.06],
  [236, 72, 153, 0.05],
] as const;

export function LiquidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobsRef = useRef<Blob[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const w = window.innerWidth;
    const h = window.innerHeight;

    blobsRef.current = Array.from({ length: 5 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: 250 + Math.random() * 350,
    }));

    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isLight = document.documentElement.classList.contains("light");
      const colors = isLight ? LIGHT_COLORS : DARK_COLORS;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      blobsRef.current.forEach((blob, i) => {
        blob.x += blob.vx;
        blob.y += blob.vy;

        if (blob.x < -blob.radius * 0.3) blob.vx = Math.abs(blob.vx);
        if (blob.x > width + blob.radius * 0.3) blob.vx = -Math.abs(blob.vx);
        if (blob.y < -blob.radius * 0.3) blob.vy = Math.abs(blob.vy);
        if (blob.y > height + blob.radius * 0.3) blob.vy = -Math.abs(blob.vy);

        const [r, g, b, a] = colors[i % colors.length];

        const gradient = ctx.createRadialGradient(
          blob.x, blob.y, 0,
          blob.x, blob.y, blob.radius
        );
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${a})`);
        gradient.addColorStop(0.6, `rgba(${r}, ${g}, ${b}, ${a * 0.4})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ pointerEvents: "none", filter: "blur(100px)" }}
    />
  );
}
