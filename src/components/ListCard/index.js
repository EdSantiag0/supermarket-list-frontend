import './index.css'

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <div className="list-card-container">
      <div className="checkbox">
        <img
          src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
          alt="checked-item"
          onClick={() => onCheckItem(item)}
        />
      </div>
      <div className="list-card-text-container">
        <span>{item.name}</span>
        <span>{item.quantity} unidades</span>
      </div>
      <div className="arrow-icon-container">
        <img
          src="/images/arrow.svg"
          alt="arrow-icon"
          className="arrow-icon"
          onClick={() => onClick(item)}
        />
      </div>
    </div>
  )
}
