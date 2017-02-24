export function stretchToFit (elWidth, elHeight, winWidth, winHeight) {
    const LANDSCAPE_RATIO = elHeight / elWidth;
    const PORTRAIT_RATIO  = elWidth / elHeight;
    const IS_LANDSCAPE    = LANDSCAPE_RATIO < PORTRAIT_RATIO ? true : false;
    const winLandscapeRatio = winHeight / winWidth;
    const winPortraitRatio  = winWidth / winHeight;
    let offsetLeft = 0;
    let offsetTop  = 0;
    let offsetWidth;
    let offsetHeight;

    if (IS_LANDSCAPE) {
        if (LANDSCAPE_RATIO < winLandscapeRatio) {
            offsetWidth = winWidth;
            offsetHeight = offsetWidth * LANDSCAPE_RATIO;
            offsetTop = (winHeight - offsetHeight) / 2;
        } else {
            offsetHeight = winHeight;
            offsetWidth = winHeight * PORTRAIT_RATIO;
            offsetLeft = (winWidth - offsetWidth) / 2;
        }
    } else {
        if (PORTRAIT_RATIO < winPortraitRatio) {
            offsetHeight = winHeight;
            offsetWidth = winHeight * PORTRAIT_RATIO;
            offsetLeft = (winWidth - offsetWidth) / 2;
        } else {
            offsetWidth = winWidth;
            offsetHeight = offsetWidth * LANDSCAPE_RATIO;
            offsetTop = (winHeight - offsetHeight) / 2;
        }
    }

    return {
        width: offsetWidth,
        height: offsetHeight,
        left: offsetLeft,
        top: offsetTop
    };
}