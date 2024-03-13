import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import Button from '../Button/Button';
import './Widget.scss';

function Widget() {
  // --- On récupère la valeur de la blague (joke dans le reducer 'jokes')
  const { joke } = useSelector((store: RootState) => store.jokes);
  return (
    <>
      <img
        src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small.png"
        alt="chuck norris"
      />
      <article className="widget">
        <p className="widget-content">{joke}</p>
        <Button />
      </article>
    </>
  );
}

export default Widget;
