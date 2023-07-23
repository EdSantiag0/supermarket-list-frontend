import {
  CardContainer,
  CheckImage,
  TextContainer,
  ArrowIconContainer,
  ArrowIcon
} from './styles'
import { SmallText } from 'components/atoms'

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <CardContainer>
      <CheckImage
        src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
        alt="checked-item"
        onClick={() => onCheckItem(item)}
      />

      <TextContainer>
        <SmallText fontSize={16} mb={2} aling="left">
          {item.name}
        </SmallText>
        <SmallText fontSize={14} fontWeith={400} aling="left">
          {item.quantity} unidades
        </SmallText>
      </TextContainer>
      <ArrowIconContainer>
        <ArrowIcon
          src="/images/arrow.svg"
          alt="arrow-icon"
          className="arrow-icon"
          onClick={() => onClick(item)}
        />
      </ArrowIconContainer>
    </CardContainer>
  )
}
