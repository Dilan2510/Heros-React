import { render, screen } from "@testing-library/react"
import { PublicRouter } from "../../src/router/PublicRouter"
import { AuthContext } from "../../src/Auth/context/AuthContext"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('testing in PublicRouter ', () => {
    test('debe retornar el children si no esta autentificado ', () => {
        const contextValue = {
            logged: false,
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRouter>
                    <h1>Ruta Public</h1>
                </PublicRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Ruta Public')).toBeTruthy();
    })

    test('debe de navegar si esta autentificado', () => {
        const contextValue = {
            logged: true,
            user: {
                name: "beimax",
                id: "ABC1123",
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
       
                    <Routes>
                        <Route path="login" element={
                            <PublicRouter>
                            <h1>Ruta Public</h1>
                        </PublicRouter>} />
                        <Route path="marvel" element={<h1> Pagina Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Pagina Marvel')).toBeTruthy();
    })

})
