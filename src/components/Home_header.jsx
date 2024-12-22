const Home_header = () => {
  return (
    <nav className="navbar bg-body-tertiary homeHeader">
      <div className="container-fluid">
        <form className="d-flex header_search" role="search">
          <input
            className="form-control me-2 "
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ backgroundColor: "#F2F2F2", borderRadius: "5px" }}
          />
        </form>
        <div className="user-info">
          <div className="user-details">
            <div className="user-image">
              <img src="user-image.png" alt="User Image" />
            </div>
            <div className="user-text">
              <p className="user-name">Musa Imran</p>
              <p className="user-role">Admin</p>
            </div>
          </div>
          <div className="notification-icon">
            <img src="bell-icon.png" alt="Notification Icon" />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Home_header;
