export function Backdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute left-1/2 top-0 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-electric/20 blur-[120px]" />
      <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-electric-bright/15 blur-[120px]" />
      <div className="absolute left-0 top-2/3 h-[400px] w-[400px] rounded-full bg-electric/10 blur-[100px]" />
    </div>
  );
}
