const FilterIcon = ({ className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="53"
      height="53"
      viewBox="0 0 512 512"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Ligne 1 */}
      <path
        d="M75 100H410"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <circle
        cx="170"
        cy="100"
        r="24"
        fill="white"
        stroke="currentColor"
        strokeWidth="18"
      />

      {/* Ligne 2 */}
      <path
        d="M75 256H437"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <circle
        cx="340"
        cy="256"
        r="24"
        fill="white"
        stroke="currentColor"
        strokeWidth="18"
      />

      {/* Ligne 3 */}
      <path
        d="M75 412H410"
        stroke="currentColor"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <circle
        cx="170"
        cy="412"
        r="24"
        fill="white"
        stroke="currentColor"
        strokeWidth="18"
      />
    </svg>
  );
};

export default FilterIcon;