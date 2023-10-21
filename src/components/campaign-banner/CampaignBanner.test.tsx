import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { TestElement } from '../../enums/TestElement';
import { gameConfig } from '../../config/game-config';
import { CampaignBanner } from './CampaignBanner';

afterEach(cleanup);

describe('[GAME] CampaignBanner', () => {
  it('SHOULD Render CampaignBanner with all the CSS properties from config file', () => {
    render(<CampaignBanner />);
    const element = screen.getByTestId(TestElement.CAMPAIGN_BANNER);

    expect(element).toHaveStyle(`
      top: ${gameConfig.campaignBanner.offsetTop};
      borderRadius: ${gameConfig.campaignBanner.borderRadius}px;
      width: ${gameConfig.campaignBanner.width};
      padding: ${gameConfig.campaignBanner.padding}px;
      backgroundColor: ${gameConfig.campaignBanner.background};
      color: ${gameConfig.campaignBanner.textColor};
    `)
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN viewport width is 250 px', () => {
    const orginalWidth = window.innerWidth;
    window.innerWidth = 250;
    render(<CampaignBanner />);
    const element = screen.getByTestId(TestElement.CAMPAIGN_BANNER);
    const computedStyle = getComputedStyle(element);
    expect(computedStyle.width).toBe("80%");
    window.innerWidth = orginalWidth;
  });

  it('SHOULD Render CampaignBanner and maintain responsiveness WHEN when viewport height is 600 px', () => {
    const orginalHeight = window.innerHeight;
    window.innerHeight = 600;
    render(<CampaignBanner />);
    const element = screen.getByTestId(TestElement.CAMPAIGN_BANNER);
    const computedStyle = getComputedStyle(element);
    expect(computedStyle.top).toBe("10%");
    window.innerWidth = orginalHeight;
  });
});
