import ContentLoader from "react-content-loader";

export const ContentLoaderDayInfo = () => {
  return (
    <ContentLoader
      speed={2}
      width={720}
      height={200}
      viewBox="0 0 720 200"
      backgroundColor="#9c9c9c"
      foregroundColor="#ecebeb"
    >
      <circle cx="27" cy="20" r="19" />
      <rect x="72" y="4" rx="5" ry="5" width="145" height="28" />
      <circle cx="30" cy="131" r="19" />
      <circle cx="27" cy="76" r="19" />
      <circle cx="28" cy="181" r="19" />
      <rect x="240" y="3" rx="5" ry="5" width="316" height="28" />
      <rect x="71" y="60" rx="5" ry="5" width="145" height="28" />
      <rect x="242" y="60" rx="5" ry="5" width="316" height="28" />
      <rect x="70" y="113" rx="5" ry="5" width="145" height="28" />
      <rect x="243" y="112" rx="5" ry="5" width="316" height="28" />
      <rect x="70" y="166" rx="5" ry="5" width="145" height="28" />
      <rect x="242" y="165" rx="5" ry="5" width="316" height="28" />
    </ContentLoader>
  );
};
