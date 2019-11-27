import update from "immutability-helper"; // , { extend }
import { ADD_CHAT } from "../actions/chatActions";

const initStore = {
  chats: {
    1: { title: "Sport", messageList: [] },
    2: { title: "Business", messageList: [] },
    3: { title: "Games", messageList: [] },
    4: { title: "Trips", messageList: [] }
  }
};

export default function chatReducer(store = initStore, action) {
  switch (action.type) {
    case ADD_CHAT: {
      const chatId = Object.keys(store.chats).length + 1;
      return update(store, {
        [chatId]: { title: action.title, messageList: [] }
      });
    }
    default:
      return store;
  }
}
