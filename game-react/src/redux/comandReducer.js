const ADD_COMAND = "ADD-COMAND";
const UPDATE_NAME_COMAND = "UPDATE-NAME-COMAND";

let inintialStste = {
  Comands : [
    { id : "1",
      name : "Команда 1",
      time : "01:00",
      color : "white",
    },
    { id : "2",
      name : "Команда 2",
      time : "02:10",
      color : "blue",
    }
  ]
};

const comandReducer = (state = inintialStste, action) => {

  switch (action.type) {
    case ADD_COMAND:
      let newComand = {
        id : "1",
        name : "Команда 3",
        time : "01:00",
        color : "white",
      };
      state.Comands.push(newComand);  // добавляем новeю команду
      // state.newPostText = '';     // отчищаем поле textarea после добовления нового поста
      return state;

    case UPDATE_NAME_COMAND:
      state.Comands[0].name = action.newName;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreater = () => ( {type: ADD_COMAND} ); // Запись => ( { ... } ) вместо return

export const updateNameComandCreator = (text) => {
  return {
    type: UPDATE_NAME_COMAND,
    newName: text
  }
};

export default comandReducer;