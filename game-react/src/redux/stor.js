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
      ]
  },
  // ---- Метод для плучения state ----
  getState() {
    return this._state
  },
  _callSubscriber() {},
  // ---- Подписываемся на observer и слушаем изменения в renderMyTree ----
  subscribe(observer) {
    this._callSubscriber = observer
  }
};

export default store;