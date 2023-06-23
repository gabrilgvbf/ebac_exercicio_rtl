import { fireEvent, render, screen } from '@testing-library/react';
import { debug } from 'console';
import Post from '.';
import PostComment from '.';



describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    })
    test('Deve inserir dois comentarios', () => {
        const { debug } = render(<PostComment />);



        const botao = screen.getByTestId('btn-comentar')
        const textareaElement = screen.getByTestId('textarea')
        fireEvent.change(textareaElement, { target: { value: 'Lindo' } })

        fireEvent.click(botao)

        fireEvent.change(textareaElement, { target: { value: 'Quanto custa?' } })

        fireEvent.click(botao)

        expect(screen.getByText('Lindo')).toBeInTheDocument();
        expect(screen.getByText('Quanto custa?')).toBeInTheDocument();
        debug()

    })

});