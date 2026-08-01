function Button({ text }) {
  return (
    <button
      className="
        px-8
        py-4
        rounded-xl
        bg-blue-600
        text-white
        font-semibold
        transition-all
        duration-300
        hover:bg-blue-500
        hover:scale-105
        hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]
        active:scale-95
      "
    >
      {text}
    </button>
  );
}

export default Button;