import FinEditor from './fin-editor';

FinEditor
    .create( document.querySelector( '#editor' ) )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    });


