'use client'

type Props = {
  onClick: () => void;
};

const HamburgerButton = ({ onClick }: Props) => (
  <div className="md:hidden z-20">
    <button
      onClick={onClick}
      className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
      aria-label="Toggle menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
);

export default HamburgerButton;
