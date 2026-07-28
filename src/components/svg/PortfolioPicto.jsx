const PortfolioPicto = ({className, width, height}) => (
<svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512 512"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Crayon : corps principal */}
      <path
        d="
          M61 385
          L397 49
          C419 27 454 21 477 43
          C501 66 493 103 473 123
          L133 462
          L23 489
          L61 385
          Z
        "
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Pointe du crayon */}
      <path
        d="
          M61 385
          L111 383
          L101 418
          L132 414
          L133 462
        "
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Mine */}
      <path
        d="
          M23 489
          L41 439
          C58 444 69 455 74 472
        "
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Lignes internes du crayon */}
      <path
        d="M101 418L391 128"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M132 414L417 129"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Partie haute du crayon */}
      <path
        d="M378 69L449 140"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M347 99L418 170"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Crayon arrière */}
      <path
        d="
          M194 250
          L21 58
          C7 42 13 20 30 12
          C43 6 56 11 67 21
          L250 190
        "
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Manche du pinceau */}
      <path
        d="
          M258 321
          L314 377
          L376 315
          L321 260
        "
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Virole du pinceau */}
      <path
        d="
          M280 389
          L389 281
          L424 315
          L314 424
          Z
        "
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Poils du pinceau */}
      <path
        d="
          M405 337
          C440 337 466 358 477 391
          C488 424 491 458 491 491
          C456 490 419 486 386 477
          C350 467 334 444 337 410
          C338 394 345 378 356 366
        "
        stroke="currentColor"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

);
export default PortfolioPicto