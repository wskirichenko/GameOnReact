import  comandReducer from "./comandReducer";

let store = {
  // ---- объект к которому нелтзя обращатся из вне на прямую (обозначается символом "_" в начале)
  _state : {
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
    ],
    Tems : [
      { id : "1",
        title : "Тема 1",
        description : "История",
        color : "white"
      },
      { id : "2",
        title : "Тема 2",
        description : "Морские сражения",
        color : "rgb(13, 112, 0)"
      },
      { id : "3",
        title : "Тема 3",
        description : "Курьёзные случаи",
        color : "rgb(26, 108, 122)"
      },
      { id : "4",
        title : "Тема 4",
        description : "Исторические личности",
        color : "rgb(28, 128, 122)"
      },
    ]
  },
  // ---- Метод для плучения state ----
  getState() {
    return this._state
  },
  _callSubscriber() {},

  // ---- Обновляем имя команлы с номером numbComand, после ввода каждого символа -----
  updateNameComand(newText, numbComand) {
    this._state.Comands[numbComand].name = newText;
    this._callSubscriber(this._state);  // Перересовываем всю страницу заново после ввода очередного символа
  },
  // ---- Подписываемся на observer и слушаем изменения в renderMyTree ----
  subscribe(observer) {
    this._callSubscriber = observer
  },

  dispatch(action) {
    this._state.Comands = comandReducer(this._state.Comands, action);

    this._callSubscriber(this._state);  // Перересовываем всю страницу заново
  }
};

export default store;