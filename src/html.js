import React from 'react';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    // eslint-disable-next-line
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (e) {
    console.log(e); // eslint-disable-line no-console
  }
}

module.exports = function HTML(props) {
  let css;
  if (process.env.NODE_ENV === 'production') {
    css = (
      <style
        id="gatsby-inlined-css"
        dangerouslySetInnerHTML={{ __html: stylesStr }}
      />
    );
  }

  return (
    <html lang="en" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {props.headComponents}
        {css}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}

        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
};
