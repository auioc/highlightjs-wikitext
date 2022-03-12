/*
Language: Wikitext
Requires: xml.js
Author: WakelessSloth56
Description: Wikitext language support
Website: https://www.mediawiki.org/wiki/Wikitext
Category: common, markup
*/

export default function (hljs) {
    const INLINE_HTML = {
        begin: /<\/?[A-Za-z_]/,
        end: '>',
        subLanguage: 'xml',
        relevance: 0,
    };

    const SKIP_FORMATTING = {
        className: 'quote',
        begin: /^\x20{1}\S/,
        end: /$/,
    };

    const LIST = {
        className: 'bullet',
        begin: /^[*|#]+/,
    };

    const BOLD = {
        className: 'strong',
        begin: /'{3}/,
        end: /'{3}/,
    };

    const ITALIC = {
        className: 'emphasis',
        begin: /'{2}/,
        end: /'{2}/,
    };

    const TEMPLATE = {
        className: 'template-tag',
        begin: /\x7b{2}/,
        end: /\x7d{2}/,
        contains: [
            {
                className: 'strong',
                match: /\x7c[^\x7b]\w+\x3d/,
            },
            {
                className: 'strong',
                match: /\x7c/,
            },
        ],
    };
    TEMPLATE.contains.splice(0, 0, TEMPLATE);

    return {
        name: 'Wikitext',
        aliases: ['wiki'],
        contains: [INLINE_HTML, SKIP_FORMATTING, LIST, BOLD, ITALIC, TEMPLATE],
    };
}
