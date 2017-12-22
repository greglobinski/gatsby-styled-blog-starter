module.exports = {
    "extends": [
       "airbnb",
       "plugin:flowtype/recommended",
    ],
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "flowtype",
    ],
    rules: {
      "import/no-named-as-default": 0,
      "import/no-named-as-default-member": 0,
      "jsx-a11y/href-no-hash": 0,
      "react/jsx-filename-extension": 0,
      "react/no-array-index-key": 0,
      "react/prop-types": 0,
      "react/require-default-props": 0,
      "react/sort-comp": 0,
    },
    globals: {
      graphql: false,
      document: false,
    }
};
