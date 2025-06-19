interface LogoProps {
  variant?: 'dark' | 'light';
}

const Logo = ({ variant = 'dark' }: LogoProps) => {
  return (
  <div className="flex items-center space-x-2">
  <img
    src="/logo.jpg" // Path is relative to the public folder
    alt="Gorkha Engineering Logo"
    width={80}
    height={80}
    className="object-contain rounded-full" // Tailwind CSS class for border-radius: 50%
    style={{ filter: variant === 'light' ? 'invert(1)' : 'none' }} // Optional: invert for light variant
  />
      <div
        className={`font-heading font-bold text-xl leading-none ${
          variant === 'light' ? 'text-white' : 'text-secondary-900'
        }`}
      >
        <span className="text-primary-600">Gorkha</span><span className="text-primary-600">Engineering</span>
      </div>
    </div>
  );
};

export default Logo;
