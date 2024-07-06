import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <header
      className="top-0 sticky  border-b border-primary-900 px-8 py-5 z-[1000]"
      style={{
        backgroundImage: `
        radial-gradient(40.87% 69.47% at 85.87% 81.98%, rgba(30, 115, 104, 0.09) 0%, rgba(121, 255, 175, 0) 100%),
        radial-gradient(54.34% 45.76% at 15.8% 19.94%, rgba(0, 0, 204, 0.20) 0%, rgba(69, 3, 255, 0) 100%),
        linear-gradient(to right, #01100F, #01100F)
      `,
      }}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
