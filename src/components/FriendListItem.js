import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import styles from './FriendListItem.css';

class FriendListItem extends Component {
  renderSex() {
    const { name, id, sex, addSex } = this.props;

    return (
      <form onClick={(event) => {
        addSex(id, event.target.value);
      }}>
        <label>
          <input type="radio" name="sex" value="Male" defaultChecked={sex === 'Male'} />
          Male
        </label>
        <label>
          <input type="radio" name="sex" value="Female" defaultChecked={sex === 'Female'} />
          Female
        </label>
      </form>
    );
  }

  render() {
    const { name, id, starFriend, starred, deleteFriend } = this.props;

    return (
      <li className={styles.friendListItem}>
        <div className={styles.friendInfos}>
          <div><span>{name}</span></div>
          <div>
            <small>xx friends in common</small>
            <br />
            {this.renderSex()}
          </div>
        </div>
        <div className={styles.friendActions}>
          <button className={`btn btn-default ${styles.btnAction}`}
                  onClick={() => starFriend(id)}>
            <i className={classnames('fa', {
              'fa-star': starred,
              'fa-star-o': !starred
            })} />
          </button>
          <button className={`btn btn-default ${styles.btnAction}`}
                  onClick={() => deleteFriend(id)}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }

}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  starred: PropTypes.bool,
  starFriend: PropTypes.func.isRequired,
  sex: PropTypes.string
};

export default FriendListItem;
