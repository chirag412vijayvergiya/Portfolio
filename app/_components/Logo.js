import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <p className="text-xl font-semibold text-indigo-500 hover:text-indigo-300">
        👨‍💻 Chirag Vijayvergiya
      </p>
    </Link>
  );
}

export default Logo;
