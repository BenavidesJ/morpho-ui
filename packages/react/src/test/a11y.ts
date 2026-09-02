import * as axe from 'axe-core'

export const WCAG_TAGS = ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22a', 'wcag22aa']

export async function checkA11y(container: HTMLElement): Promise<axe.AxeResults> {
  return axe.run(container, {
    runOnly: { type: 'tag', values: WCAG_TAGS },
    rules: {
      'color-contrast': { enabled: false },
    },
  });
};
