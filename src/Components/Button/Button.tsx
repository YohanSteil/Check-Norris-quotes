import { Hourglass } from "react-loader-spinner";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../redux/store";
import jokes from "../../redux/jokes";
import './Button.scss'


function Button() {
    const { isPending } = useSelector((store: RootState) => store.jokes);
    const dispatch: AppDispatch = useDispatch();

    const handleClick = () => {
        // On active le loader
        dispatch({ type: 'chuck/ENABLE_PENDING' });
    
        // On récupère la blague avec un délai pour permettre au loader de rester un peu plus
        setTimeout(() => {
          dispatch(jokes.actions.fetchNewJokeAction());
        }, 1000);
      };

    return(
        <button type="button" className="button" onClick={handleClick}>
      {isPending ? (
        <Hourglass
          visible
          height="20"
          width="20"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#fafafa', '#fafafa']}
        />
      ) : (
        'Nouvelle blague'
      )}
    </button>
    )
}

export default Button;


