interface State {
  user: null | { name: string; email: string };
  playlists: any[];
  playing: boolean;
  item: null | { id: number; name: string };
  token: null | string;
}

interface Action {
  type: string;
  user: { name: string; email: string };
  token: string;
  playlists: string;
}

export const initialState: State = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
};

export const reducer = (state: State, action: Action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};
