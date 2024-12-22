const Cards = ({ post }) => {
  return (
    <div
      className="card mb-3"
      style={{ width: "300px", padding: "0", top: "0" }}
    >
      <div className="row g-0" style={{ margin: "0" }}>
        <div className="col-md-4" style={{ width: "130px" }}>
          <img
            src={post.payload.url}
            className="img-fluid rounded-start"
            alt="..."
            style={{ width: "130px", height: "217px" }}
          />
        </div>
        <div className="col-md-8" style={{ width: "165px" }}>
          <div className="card-body">
            <h5 className="card-title">Description</h5>
            <p className="card-text">{post.payload.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cards;
