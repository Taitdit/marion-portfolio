const SunIcon = ({ className, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Cercle central */}
      <circle
        cx="256"
        cy="256"
        r="124"
        stroke="currentColor"
        strokeWidth="18"
      />

      {/* Rayon du haut */}
      <path
        d="M256 9V79"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinecap="round"
      />

      {/* Rayon en haut à droite */}
      <path
        d="M431 81L381 131"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinecap="round"
      />

      {/* Rayon de droite */}
      <path
        d="M503 256H433"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinecap="round"
      />

      {/* Rayon en bas à droite */}
      <path
        d="M431 431L381 381"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinecap="round"
      />

      {/* Rayon du bas */}
      <path
        d="M256 503V433"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinecap="round"
      />

      {/* Rayon en bas à gauche */}
      <path
        d="M81 431L131 381"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinecap="round"
      />

      {/* Rayon de gauche */}
      <path
        d="M9 256H79"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinecap="round"
      />

      {/* Rayon en haut à gauche */}
      <path
        d="M81 81L131 131"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default SunIcon;