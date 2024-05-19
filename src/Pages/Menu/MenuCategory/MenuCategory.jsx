import MenuItem from "../../../Components/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <div className="grid md:grid-cols-2 gap-12 my-20">
      {items.map((item) => (
        <MenuItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default MenuCategory;
