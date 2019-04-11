module.exports = function fontVariantNumeric({
  addUtilities,
  config,
  e
}) {
  const values = config('theme.fontVariantNumeric', {
    'normal': 'normal',
    'ordinal': 'ordinal',
    'slashed-zero': 'slashed-zero',
    'lining-nums': 'lining-nums',
    'oldstyle-nums': 'oldstyle-nums',
    'proportional-nums': 'proportional-nums',
    'tabular-nums': 'tabular-nums',
    'diagonal-fractions': 'diagonal-fractions',
    'stacked-fractions': 'stacked-fractions',
  });

  const variants = config('variants.fontVariantNumeric', []);
  const utilities = {};

  for (const key in values) {
    utilities[`.numeric-${e(key)}`] = {
      'font-variant-numeric': values[key],
    };
  };

  addUtilities(utilities, {
    variants,
  });
};
