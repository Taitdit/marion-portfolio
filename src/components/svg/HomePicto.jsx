const HomePicto = ({className, width, height}) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Toiture */}
      <path
        d="M10 228L256 32L502 228"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Mur gauche */}
      <path
        d="M48 254V470"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
      />

      {/* Mur droit */}
      <path
        d="M464 270V470"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
      />

      {/* Bas gauche */}
      <path
        d="M48 470H208"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
      />

      {/* Bas droit */}
      <path
        d="M304 470H464"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
      />

      {/* Montant gauche porte */}
      <path
        d="M208 470V350"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
      />

      {/* Montant droit porte */}
      <path
        d="M304 470V350"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
      />

      {/* Haut porte */}
      <path
        d="M208 350H304"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
      />
    </svg>
);
export default HomePicto