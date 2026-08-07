const GridIcon = ({ className = "" }) => {
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
      <rect
        x="15"
        y="15"
        width="211"
        height="211"
        rx="18"
        stroke="currentColor"
        strokeWidth="30"
      />

      <rect
        x="286"
        y="15"
        width="211"
        height="211"
        rx="18"
        stroke="currentColor"
        strokeWidth="30"
      />

      <rect
        x="15"
        y="286"
        width="211"
        height="211"
        rx="18"
        stroke="currentColor"
        strokeWidth="30"
      />

      <rect
        x="286"
        y="286"
        width="211"
        height="211"
        rx="18"
        stroke="currentColor"
        strokeWidth="30"
      />
    </svg>
  );
};

export default GridIcon;
