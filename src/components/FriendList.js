import React, { Component, PropTypes } from 'react';
import styles from './FriendList.css';
import withPagination from './withPagination';
import FriendListItem from './FriendListItem';

class FriendList extends Component {
  render () {
    return (
      <ul className={styles.friendList}>
        {
          this.props.friends.map((friend, index) => {
            return (
              <FriendListItem
                key={index}
                id={friend.id}
                name={friend.name}
                starred={friend.starred}
                sex={friend.sex}
                {...this.props.actions} />
            );
          })
        }
      </ul>
    );
  }

}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

export default withPagination(FriendList);
