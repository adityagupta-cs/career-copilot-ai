function Background() {
  return (
    <>
      {/* Main Gradient Background */}
      <div className="fixed inset-0 -z-50 bg-slate-950" />

      {/* Blue Glow */}
      <div className="fixed top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl -z-40" />

      {/* Purple Glow */}
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl -z-40" />

      {/* Cyan Glow */}
      <div className="fixed top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 -z-40" />
    </>
  );
}

export default Background;