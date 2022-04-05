const Header = ({ handelToggleMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="toggle-btn"
        onClick={() => handelToggleMode((previousMode) => !previousMode)}
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
