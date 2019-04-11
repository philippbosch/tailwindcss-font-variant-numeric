# tailwindcss-font-variant-numeric

A plugin for [Tailwind CSS](https://www.tailwindcss.com/) to create
utility classes for [`font-variant-numeric`](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric).

## Requirements

This plugin requires **Tailwind CSS v1.x**.

## Installation

```shell
npm install --save-dev tailwindcss-font-variant-numeric
```

or

```shell
yarn add --dev tailwindcss-font-variant-numeric
```

## Usage

In your _tailwind.config.js_:

```js
module.exports = {
  // …
  plugins: [
    // …
    require("tailwindcss-font-variant-numeric")
    // …
  ]
  // …
};
```

## Utilities

By default, this plugin generates the following utilities:

```css
.numeric-normal {
  font-variant-numeric: normal;
}

.numeric-ordinal {
  font-variant-numeric: ordinal;
}

.numeric-slashed-zero {
  font-variant-numeric: slashed-zero;
}

.numeric-lining-nums {
  font-variant-numeric: lining-nums;
}

.numeric-oldstyle-nums {
  font-variant-numeric: oldstyle-nums;
}

.numeric-proportional-nums {
  font-variant-numeric: proportional-nums;
}

.numeric-tabular-nums {
  font-variant-numeric: tabular-nums;
}

.numeric-diagonal-fractions {
  font-variant-numeric: diagonal-fractions;
}

.numeric-stacked-fractions {
  font-variant-numeric: stacked-fractions;
}
```

## Customization

`font-variant-numeric` can take a combination of multiple values (e.g.
`tabular-nums slashed-zero`), but for the sake of simplicity we only
create utility classes for single values by default. If you need a
utility class for a combination of values, you can customize this in
_tailwind.config.js_:

```js
const defaultConfig = require("tailwindcss/defaultConfig");

module.exports = {
  theme: {
    // …
    fontVariantNumeric: {
      "tabular-slashed": "tabular-nums slashed-zero"
    }
    // …
  }
  // …
};
```

This would generate the following utility class:

```css
.numeric-tabular-slashed {
  font-variant-numeric: tabular-nums slashed-zero;
}
```

## License

[MIT](https://philippbosch.mit-license.org/)
