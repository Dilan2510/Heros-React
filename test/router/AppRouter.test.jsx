import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/Auth/context/AuthContext"
import { AppRouter } from "../../src/router/AppRouter"

describe('testing in AppRouter', () => {
    test('debe mostar el lofgin cuando no esta autetificado ', () => {

        const contentValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contentValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        expect(screen.getByText('Login')).toBeTruthy();
    })

    test('Debe de mostar el componente de Marvel si esta autentificado ', () => {
        const valueContext = {
            logged: true
        }
        render(
            <MemoryRouter initialEntries={['/login']} >
                <AuthContext.Provider value={valueContext}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter >
        )
        expect(screen.getByText('MarvelPage')).toBeTruthy();
    })

})
