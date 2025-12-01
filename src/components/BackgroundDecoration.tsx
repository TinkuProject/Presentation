export default function BackgroundDecoration() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute w-[900px] h-[900px] bg-[#2D71F7]/25 rounded-full blur-[160px] top-[-300px] left-[-200px]" />
      <div className="absolute w-[700px] h-[700px] bg-fuchsia-500/20 rounded-full blur-[200px] bottom-[-200px] right-[-200px]" />
    </div>
  );
}
