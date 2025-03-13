import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../src/shared/components/Navbar";
import { AuthContext } from "../../../src/Auth/context/AuthContext";
import { MemoryRouter } from "react-router-dom";


const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));

describe('testing in Navbar', () => {
    const contextValue = {
        logged: true,
        user: {
            name: "Beimax",
            id: "ABC1123",
        },
        logout: jest.fn()
    }
    beforeEach(() => jest.clearAllMocks());


    test('Debe mostar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>)
        expect(screen.getByText('Beimax').innerHTML).toBe(contextValue.user.name);
        expect(screen.getByText('Beimax')).toBeTruthy();
    });


    test('Debe de llamar el logout y navigate cuando se hace click en el button ', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const loginButton = screen.getByRole('button');
        fireEvent.click(loginButton);
        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUsedNavigate).toHaveBeenCalledWith("/login", { "replace": true });
    });
})
