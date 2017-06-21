import Document, {Head, Main, NextScript} from 'next/document';
import styles from '../scss/styles.scss';

class FEConfDocument extends Document {
    static getInitialProps ({renderPage}) {
        const {html, head, errorHtml, chunks} = renderPage();
        return {html, head, errorHtml, chunks};
    }

    render () {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"/>
                    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Lato:300,400,700"/>
                    <style dangerouslySetInnerHTML={{__html: styles}} />
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </html>
        );
    }
}

export default FEConfDocument;
