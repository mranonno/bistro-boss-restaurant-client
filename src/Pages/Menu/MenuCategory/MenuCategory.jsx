import MenuItem from "../../../Components/MenuItem/MenuItem";
import PropTypes from "prop-types";
const MenuCategory = ({ items }) => {
  return (
    <div className="my-8">
      <div className="grid md:grid-cols-2 gap-12 my-4">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array,
};

export default MenuCategory;
