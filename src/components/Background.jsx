// Nền tĩnh, tối giản: giấy ấm + một vệt sáng rất nhẹ + lưới mờ.
export default function Background() {
  return (
    <>
      <div className="page-bg" aria-hidden />
      <div className="grid-overlay" aria-hidden />
    </>
  );
}
