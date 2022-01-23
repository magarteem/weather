import ContentLoader from "react-content-loader";

export const ContentLoadeCards = () => {
  return (
    <ContentLoader
      speed={0.5}
      width={148}
      height={200}
      viewBox="0 0 148 200"
      backgroundColor="#9c9c9c"
      foregroundColor="#ecebeb"
    >
      <rect x="240" y="3" rx="5" ry="5" width="316" height="28" />
      <rect x="242" y="60" rx="5" ry="5" width="316" height="28" />
      <rect x="243" y="112" rx="5" ry="5" width="316" height="28" />
      <rect x="242" y="165" rx="5" ry="5" width="316" height="28" />
      <rect x="0" y="1" rx="0" ry="0" width="124" height="19" />
      <rect x="0" y="29" rx="0" ry="0" width="83" height="14" />
      <circle cx="44" cy="81" r="31" />
      <rect x="0" y="121" rx="0" ry="0" width="59" height="25" />
      <rect x="0" y="151" rx="0" ry="0" width="60" height="12" />
      <rect x="0" y="183" rx="0" ry="0" width="122" height="13" />
    </ContentLoader>
  );
};
