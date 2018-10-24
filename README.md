# eslint-config-vnr

This package provides VNRs .eslintrc as an extensible shared config.

## Usage

Make sure you have SSH access to the Gitlab instance.

Install the dependencies using

```
npm install --save-dev eslint git+ssh://git@PSB-GIT:px/eslint-config-vnr.git eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
```

Add `"extends": "vnr"` to your .eslintrc
