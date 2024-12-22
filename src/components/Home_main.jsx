import { Link } from "react-router-dom";

const Home_main = () => {
  return (
    <>
      <div className="mainFirst">
        <header className="header">
          <h1 className="header-title">Smart Fashion Recommendation System</h1>
          <p className="header-description">
            Revolutionizing fashion with AI and AR technologies. Explore
            personalized outfits, trend analysis, and virtual try-ons!
          </p>
        </header>

        <div className="card-container">
          <div className="card w-75 mb-3">
            <div className="card-body">
              <h5 className="card-title">Explore Your Style</h5>
              <p className="card-text">
                Experience the future of fashion shopping with personalized
                recommendations and AR-powered virtual try-ons.
              </p>
              <Link to="/sign-in" className="btn btn-primary">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © 2017–2024 Company, Inc. · <a href="#">Privacy</a> ·{" "}
            <a href="#">Terms</a>
          </p>
          <p className="back-to-top">
            <a href="#">Back to top</a>
          </p>
        </div>
      </footer>
    </>
  );
};
export default Home_main;
