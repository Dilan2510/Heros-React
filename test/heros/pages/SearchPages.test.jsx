import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../src/heros/Pages/SearchPage";



const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
}));
beforeEach(() => jest.clearAllMocks());



describe('testing in searchPages', () => {
    test('Debe mostarse correctamente los valores por defecto', () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );
        expect(container).toMatchSnapshot();
    });

    test('Debe de mostar a batman y el input de queryString', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        );
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');
        const img = screen.getByRole('img');
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
    });


    test('Debe de mostar un error si no se encuentra el hero', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batmannnn']}>
                <SearchPage />
            </MemoryRouter>
        );
        expect(screen.getByRole('alert')).toBeTruthy();
        expect(screen.getByText('there is not hero')).toBeTruthy();
    })

    test('Debe de llamar el navigate a la pantalla nueva ', () => {
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );


        const inputvalue = "batman";
        const input = screen.getByRole('textbox');
        fireEvent.input(input, { target: { name: 'searchText', value: inputvalue } });

        const form = screen.getByRole("form");
        fireEvent.submit(form);

        expect(input.value).toBe(inputvalue);
        expect(mockedUsedNavigate).toHaveBeenCalledWith(`?q=${inputvalue}`);

    })

})