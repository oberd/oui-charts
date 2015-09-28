

import { createRenderer } from 'react-addons-test-utils';

export function getOutput(jsx) {
    const renderer = createRenderer();
    renderer.render(jsx);
    return renderer.getRenderOutput();
}
