import CardItem from './CardItem';

export default function CardList({ items }) {
  return (
    <div className="card-list">
      {items.map((item, index) => (
        <CardItem key={index} {...item}>
          {item.content}
        </CardItem>
      ))}
    </div>
  );
}
