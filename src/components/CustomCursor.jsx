import "./CustomCursor.scss";

/**
 * CustomCursor
 * Renders the two cursor layers targeted by useCursor.
 * Place this inside MainLayout, above everything else.
 */
const CustomCursor = () => {
  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-ring" />
    </>
  );
};

export default CustomCursor;
