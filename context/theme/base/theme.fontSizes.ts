const FONT_SIZE_TOKENS = [
  12, 14, 16, 18, 20, 24, 30, 36, 48, 60, 72, 96, 128
] as const;

type FontSizeTokenType = typeof FONT_SIZE_TOKENS[number];

type FontSizeType = {
  [key in FontSizeTokenType]: string;
};

const FONT_SIZES: FontSizeType = {} as FontSizeType;

FONT_SIZE_TOKENS.forEach((token) => {
  FONT_SIZES[token] = `${token / 16}rem`;
});

// example [{"16", "1rem"}, ....]

export { FONT_SIZES, FONT_SIZE_TOKENS };
