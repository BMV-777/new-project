import PropTypes from 'prop-types';
import defalt from './defolt.png';

export default function Pointer({
  url = defalt,
  title,
  profileUrl,
  authorName = 'не известный',
  price,
  quantity,
}) {
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автар: <a href={profileUrl}>{authorName}</a>
      </p>
      <p>Цена: {price} крредитов</p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в карзину</button>
    </div>
  );
}

Pointer.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
