import Cards from "./Cards";
const CardsList = ({ weather, trendList }) => {
  return (
    <div className="trend_third">
      {trendList
        .filter((post) => post.type === weather)
        .map((post, index) => (
          <Cards key={index} post={post}></Cards>
        ))}
    </div>
  );
};
export default CardsList;
