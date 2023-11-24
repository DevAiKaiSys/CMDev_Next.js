# [Installation](https://nextjs.org/docs/getting-started/installation)

```
npx create-next-app@latest
```

# ES7+ shortcut

```
tsrfc
```

# [MUI](https://mui.com/material-ui/getting-started/installation/)

## [Material Icons](https://mui.com/material-ui/material-icons/)

```
npm install @mui/icons-material @mui/material @emotion/styled @emotion/react
```

## [Data Grid](https://mui.com/x/react-data-grid/getting-started/)

```
npm install @mui/x-data-grid
```

## styled conflicts tailwindcss

```ts
const config: Config = {
  ...,
  corePlugins: {
    preflight: false,
  },
};
```

## Test Production

```
npm run build
npm run start
```

# Form & Validation

```
npm install react-hook-form
npm install @hookform/resolvers yup
```

# State Management

[Redux](https://redux.js.org/introduction/installation)

```
npm install @reduxjs/toolkit
npm install react-redux
```

# REST API

```
npm install axios
```

# Image Zoom

```
npm install --save react-medium-image-zoom
```

## fix warning in production Image Optimization

For production Image Optimization with Next.js, the optional 'sharp' package is strongly recommended. Run 'npm i sharp', and Next.js will use it automatically for Image Optimization.
Read more: https://nextjs.org/docs/messages/sharp-missing-in-production

```
npm i sharp
```

# Format

## Number

```
npm install react-number-format
```

## Date

```
npm install dayjs
```

# Charts

## [react-chartjs-2](https://react-chartjs-2.js.org/)

```
npm install --save chart.js react-chartjs-2
```

# Production

## standalone

```js
// next.config.js
const nextConfig = {
  output: "standalone",
  ...
}
```
