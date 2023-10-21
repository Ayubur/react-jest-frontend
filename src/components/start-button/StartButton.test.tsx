import { cleanup, fireEvent, getByText, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StartButton } from './StartButton';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';

afterEach(cleanup);

describe('[GAME] StartButton', () => {
  it('SHOULD Render StartButton with proper config', () => {
    const { getByRole, getByText } = render(<StartButton />);
    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(getByText(`${gameConfig.startButton.buttonText}`)).toBeInTheDocument();
  });

  it('SHOULD Render StartButton with click event', () => {
    render(<StartButton />);
    const element = screen.getByTestId(TestElement.START_BUTTON);

    const alert = jest.spyOn(window, "alert");
    alert.mockImplementation(() => "You will learn to develop JS games after you join with us! For now, best of luck!");


    fireEvent.click(element);
    expect(alert).toHaveBeenCalledTimes(1);
    alert.mockRestore();
  });
});
