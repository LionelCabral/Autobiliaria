import Item from './Item';
import "./ItemListContainer.css";

const ItemList = ({items}) => {
    return (
        <>
        <div className="itemList">
            {items.map(item => <Item key={item.id} {...item} />)};
        </div>
        </>
    );
};

export default ItemList;