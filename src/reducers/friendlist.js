import * as types from '../constants/ActionTypes';

const initialState = {
  friendsById: [
    {
      name: 'Theodore Roosevelt',
      starred: true,
      sex: 'Male'
    },
    {
      name: 'Abraham Lincoln',
      starred: false,
      sex: 'Male'
    },
    {
      name: 'George Washington',
      starred: false,
      sex: 'Male'
    }
  ],
  page: 0
};

export default function friends(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FRIEND:
      return {
        ...state,
        friendsById: [
          ...state.friendsById,
          {
            name: action.name
          }
        ],
      };
      
    case types.DELETE_FRIEND:
      return {
        ...state,
        friendsById: state.friendsById.filter((item, index) => index !== action.id)
      };

    case types.STAR_FRIEND:
      let friends = [...state.friendsById];
      let friend = friends.find((item, index) => index === action.id);
      friend.starred = !friend.starred;
      return {
        ...state,
        friendsById: friends
      };

    case types.ADD_SEX:
      let temp = [...state.friendsById];
      let curFriend = temp.find((item, index) => index === action.id);
      curFriend.sex = action.sex;
      return {
        ...state,
        friendsById: temp
      };

    default:
      return state;
  }
}
