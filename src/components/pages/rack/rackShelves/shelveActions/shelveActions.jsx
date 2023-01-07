import { faPencil, faTrash }   from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon }     from '@fortawesome/react-fontawesome';

const ShelveActions = () => {
  return (
    <div className='shelve__actions'>
        <FontAwesomeIcon icon={faPencil} />
        <FontAwesomeIcon icon={faTrash} />
    </div>
  )
}

export default ShelveActions;