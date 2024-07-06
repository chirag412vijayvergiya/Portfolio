function Button({ label }) {
  return (
    <button className="flex bg-accent-500 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all items-center rounded-xl px-5 py-2 text-[20px] font-body-1 text-black-1duration-300 ease-in-out bg-gradient-1 hover:bg-gradient-hover focus:outline-none focus:ring-2 focus:ring-lGreen focus:ring-opacity-50">
      {label}
    </button>
  );
}

export default Button;
