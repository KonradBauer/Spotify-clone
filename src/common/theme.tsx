interface Color {
    codGray: string;
    black: string;
}

interface Breakpoints {
    theSmallestMobileView: number;
    mobileS: number;
    mobileM: number;
    mobileMax: number;
    tabletVerticalMax: number;
    beforeMobileMax: number;
    tabletHorizontalMax: number;
    desktopHorizontal: number;
    desktopHorizontalMax: number;
}

export const theme = {
    color: {
        codGray: "#121212",
        black: "#000000"
    },

    breakpoints: {
        theSmallestMobileView: 290,
        mobileS: 320,
        mobileM: 425,
        mobileMax: 847,
        tabletVerticalMax: 991,
        beforeMobileMax: 1000,
        tabletHorizontalMax: 1199,
        desktopHorizontal: 1250,
        desktopHorizontalMax: 1672,
    },
};