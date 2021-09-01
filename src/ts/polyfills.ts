import cssVars from 'css-vars-ponyfill';

// CSS vars ponyfill for IE11.
cssVars();

// 'objectFit' for images.
if ('objectFit' in document.documentElement.style === false) {
    const images = document.querySelectorAll('img');
    [...(images as any)].map(image => {
        image.style.background = `url(${image.src}) no-repeat 50%`;
        image.style.backgroundSize = 'cover';
        image.src =
            'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
    });
}
