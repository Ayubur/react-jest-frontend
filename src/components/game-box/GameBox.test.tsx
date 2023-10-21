import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { GameBox } from './GameBox';
import { CampaignBanner } from '../campaign-banner/CampaignBanner';
import { StartButton } from '../start-button/StartButton';
import { gameConfig } from '../../config/game-config';
import { TestElement } from '../../enums/TestElement';

afterEach(cleanup);

describe('[GAME] GameBox', () => {
  it('SHOULD Render GameBox with width maxHeight and maxWidth WHEN browsers viewport width and height is 1000px', () => {
    const orginalWidth = window.innerWidth;
    window.innerWidth = 1000;

    render(<GameBox><CampaignBanner /><StartButton /></GameBox>);
    const element = screen.getByTestId(TestElement.GAME_BOX);
    expect(element).toHaveStyle(`
      maxWidth: ${gameConfig.container.maxWidth}px;
      maxHeight: ${gameConfig.container.maxHeight}px;
    `);
    
    window.innerWidth = orginalWidth;
  });

  it('SHOULD Render GameBox with width 300px WHEN browsers viewport width 300px and height remains 1000px', () => {
    //
  });

  it('SHOULD Render GameBox with height 600px WHEN browsers viewport width 1000px and height is 600px', () => {
    //
  });
});