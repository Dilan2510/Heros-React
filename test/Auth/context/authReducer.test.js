import { authreducer } from "../../../src/Auth/context/authReducer";
import { types } from "../../../src/Auth/types/types";

describe("testing in authReducer", () => {
  test("debe retornar el estado por defecto ", () => {
    const auth = authreducer({ logged: false }, {});
    expect(auth).toEqual({ logged: false });
  });

  test("debe llamar el (login) autentificar y establecer el user ", () => {
    const action = {
      type: types.login,
      payload: { id: "ABC", name: "Beimax Arnulfo" },
    };
    const auth = authreducer({ logged: false }, action);
    expect(auth).toEqual({ logged: true, user: action.payload });
  });

  test("debe llamar el (logout) borra el nombre y el logged en false ", () => {
    const state = {
      logged: true,
      user: { id: "ABC", name: "Beimax Arnulfo" },
    };
    const action = {
      type: types.logout,
    };
    const newUser = authreducer(state, action);
    expect(newUser).toEqual({ logged: false });
  });
});
