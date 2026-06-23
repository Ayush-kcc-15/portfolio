import "./BackToTop.css";

function BackToTop() {

  const scrollTop = () => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    });
  };

  return (
    <button
      className="top-btn"
      onClick={scrollTop}
    >
      ↑
    </button>
  );
}

export default BackToTop;