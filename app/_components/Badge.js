function Badge({ text }) {
  return (
    <span className="bg-primary-900 text-indigo-300 text-sm font-medium me-2 px-2.5 py-0.5 mb-4 rounded">
      {text}
    </span>
  );
}

export default Badge;
