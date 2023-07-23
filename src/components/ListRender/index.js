import { ListCard } from 'components/molecules/ListCard'
import './index.css'

export const ListRender = ({ list, onEdit, onCheckItem }) => {
  if (list?.length === 0) {
    return (
      <h3>
        Sua lista esta vazia, clique no botão "Adicionar" para incluir novos
        itens.
      </h3>
    )
  }

  return (
    <div className="list-render-container">
      {list.map((item) => (
        <ListCard
          onCheckItem={onCheckItem}
          onClick={onEdit}
          item={item}
          key={item?._id}
        />
      ))}
    </div>
  )
}
