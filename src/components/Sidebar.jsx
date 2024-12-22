import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary sidebarMain"
      style={{
        width: "240px",
        height: "730px",
        position: "fixed",
      }}
    >
      <Link
        xhref="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none sidebar_logo"
      >
        <svg className="bi pe-none me-2" width="40" height="32">
          <use xlink:xhref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Sidebar</span>
      </Link>
      <ul className="nav nav-pills flex-column mb-auto first_part">
        <li className="nav-item">
          <Link
            xhref="#"
            className="nav-link link-body-emphasis"
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlink:xhref="#home"></use>
            </svg>
            Dashboard
          </Link>
        </li>
        <li>
          <Link xhref="#" className="nav-link link-body-emphasis">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlink:xhref="#speedometer2"></use>
            </svg>
            Body detection
          </Link>
        </li>
        <li>
          <Link xhref="#" className="nav-link link-body-emphasis">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlink:xhref="#table"></use>
            </svg>
            Outfit generator
          </Link>
        </li>
        <li>
          <Link xhref="#" className="nav-link link-body-emphasis">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlink:xhref="#grid"></use>
            </svg>
            Outfit suggestions
          </Link>
        </li>
        <li>
          <Link to="/user/trends" className="nav-link link-body-emphasis">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlink:xhref="#people-circle"></use>
            </svg>
            Trends
          </Link>
        </li>
      </ul>
      <ul className="nav nav-pills flex-column mb-auto second_part">
        <li className="nav-item">
          <Link
            xhref="#"
            className="nav-link link-body-emphasis "
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlink:xhref="#home"></use>
            </svg>
            Profile
          </Link>
        </li>
        <li>
          <Link xhref="#" className="nav-link link-body-emphasis">
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlink:xhref="#speedometer2"></use>
            </svg>
            Log out
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
};
export default Sidebar;
