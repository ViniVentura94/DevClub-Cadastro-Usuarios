

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Button from '../index';

test('renderiza o botão com texto e dispara clique', async () => {
  const mockClick = vi.fn();

  render(
    <Button onClick={mockClick} theme="primary">
      Cadastrar
    </Button>
  );

  const botao = screen.getByText('Cadastrar');

  expect(botao).toBeInTheDocument();

  await userEvent.click(botao);
  expect(mockClick).toHaveBeenCalledTimes(1);
});
