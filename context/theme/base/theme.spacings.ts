const SPACING_TOKENS = [
  4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 72, 96, 128, 192, 256, 384, 448,
  512, 578, 640, 768
] as const;

type SpacingTokensType = typeof SPACING_TOKENS[number];

type SpacingsType = {
  [key in SpacingTokensType]: string;
};

const SPACINGS: SpacingsType = {} as SpacingsType;

SPACING_TOKENS.forEach((token) => {
  SPACINGS[token] = `${token}px`;
});

export { SPACINGS, SPACING_TOKENS };
