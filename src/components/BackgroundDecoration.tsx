export default function BackgroundDecoration() {
  return (
    <div className="fixed inset-0 -z-10 overflow-visible pointer-events-none">
      <div className="absolute w-[900px] h-[900px] bg-cyan-400/20 rounded-full blur-[180px] top-[-250px] left-[-200px]" />
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[200px] bottom-[-200px] right-[-150px]" />
    </div>
  );
}
