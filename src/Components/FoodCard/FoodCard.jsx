import PropTypes from "prop-types";
const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  console.log(item);
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="text-white bg-slate-900 absolute right-0 mt-4 mr-4 px-4 py-1">
        {price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary uppercase">add to cart</button>
        </div>
      </div>
    </div>
  );
};
FoodCard.propTypes = {
  item: PropTypes.object,
};
export default FoodCard;
