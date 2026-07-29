function Button({ children, primary = true }) {
  return (
    <button
      className={`px-6 py-3 rounded-xl font-semibold transition duration-300 ${
        primary
          ? "bg-blue-600 hover:bg-blue-700 text-white"
          : "border border-gray-500 hover:border-blue-500 hover:text-blue-400"
      }`}
    >
      {children}
    </button>
  );
}

export default Button;