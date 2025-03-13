import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/Auth/context/AuthContext"
import { PrivateRouter } from "../../src/router/PrivateRouter"
import { MemoryRouter } from "react-router-dom"

describe('testing in PrivateRoute', () => {
    test('debe de navegar si esta autentificado', () => {

        Storage.prototype.setItem = jest.fn();

        const valueChildren = {
            logged: true,
            user: {
                name: "beimax",
                id: "ABC1123",
            }
        }
        render(
            <AuthContext.Provider value={valueChildren}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRouter>
                        <h1>Ruta Privada</h1>
                    </PrivateRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/search?q=batman')
    })

})
