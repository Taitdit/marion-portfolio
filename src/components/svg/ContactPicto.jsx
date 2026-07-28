const ContactPicto = ({className, width, height}) => (
<svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Bulle arrière */}
      <path
        d="
          M127.5 174
          V37.5
          C127.5 21.5 140.5 8.5 156.5 8.5
          H475
          C491 8.5 504 21.5 504 37.5
          V308
          L446 249
          H385
        "
        stroke="currentColor"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Points de la bulle arrière */}
      <circle
        cx="256"
        cy="129"
        r="15"
        stroke="currentColor"
        strokeWidth="15"
      />

      <circle
        cx="316"
        cy="129"
        r="15"
        stroke="currentColor"
        strokeWidth="15"
      />

      <circle
        cx="376"
        cy="129"
        r="15"
        stroke="currentColor"
        strokeWidth="15"
      />

      {/* Bulle avant */}
      <path
        d="
          M7.5 503
          V233
          C7.5 217 20.5 204 36.5 204
          H355
          C371 204 384 217 384 233
          V414
          C384 430 371 443 355 443
          H67
          L7.5 503
          Z
        "
        stroke="currentColor"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Points de la bulle avant */}
      <circle
        cx="136"
        cy="324"
        r="15"
        stroke="currentColor"
        strokeWidth="15"
      />

      <circle
        cx="196"
        cy="324"
        r="15"
        stroke="currentColor"
        strokeWidth="15"
      />

      <circle
        cx="256"
        cy="324"
        r="15"
        stroke="currentColor"
        strokeWidth="15"
      />
    </svg>

);
export default ContactPicto