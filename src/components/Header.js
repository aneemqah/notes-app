const Header = ({ handelToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        className="toggle-btn"
        onClick={() =>
          handelToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
