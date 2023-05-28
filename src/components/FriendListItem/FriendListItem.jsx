import css from 'components/FriendListItem/FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return <li className={css.item}>
        {isOnline ? (<span className={css.statusOnline}></span>) : (<span className={css.statusOfline}></span>)}
    <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
