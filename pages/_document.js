/**
 * _document is only rendered on the server side and not on the client side
 * Event handlers like onClick can't be added to this file
 * 
 * we extend the document to add the lang html attr 
 */
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <html lang="en">
        <Head />
        <body className="body">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
