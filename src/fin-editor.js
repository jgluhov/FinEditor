'use strict';

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import Link from '@ckeditor/ckeditor5-link/src/link';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink';
import ListStyle from '@ckeditor/ckeditor5-list/src/liststyle';
import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import PageBreak from '@ckeditor/ckeditor5-page-break/src/pagebreak';
import Font from '@ckeditor/ckeditor5-font/src/font';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import FullScreen from 'ckeditor5-fullscreen/FullScreen';

export default class FinEditor extends ClassicEditorBase {}

FinEditor.builtinPlugins = [
    PasteFromOffice,
    UploadAdapter,
    Essentials,
    Autoformat,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    Code,
    Subscript,
    Superscript,
    Paragraph,
    BlockQuote,
    ListStyle,
    Image,
    ImageCaption,
    ImageStyle,
    ImageToolbar,
    ImageUpload,
    SourceEditing,
    Heading,
    Link,
    AutoLink,
    Markdown,
    SpecialCharacters,
    SpecialCharactersEssentials,
    Alignment,
    Table,
    TableToolbar,
    PageBreak,
    Font,
    FontSize,
    FontFamily,
    FontColor,
    FontBackgroundColor,
    FullScreen
]

FinEditor.defaultConfig = {
    readOnly: false,
    uiColor: '#66AB16',
    toolbar: [
        'sourceEditing',
        '|',
        'bold',
        'italic',
        'underline',
        'strikethrough',
        'code',
        'subscript',
        'superscript',
        '|',
        'blockQuote',
        '|',
        'bulletedList',
        'numberedList',
        '|',

        '|',
        'heading',
        'link',
        'undo',
        'redo',
        '|',
        'alignment',
        '|',
        'link',
        '|',
        'uploadImage',
        'insertTable',
        'pageBreak',
        'specialCharacters',
        '|',
        'fontSize',
        'fontFamily',
        '|',
        'fontColor',
        'fontBackgroundColor',
        '|',
        'fullScreen'
    ],
    image: {
        toolbar: [
            'imageStyle:inline',
            'imageStyle:block',
            'imageStyle:side',
            '|',
            'toggleImageCaption',
            'imageTextAlternative'
        ]
    },
    language: 'en'
}
