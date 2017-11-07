module.exports = {
    config: {
        'shell': '/bin/bash',
        'fontSize': 14,
        'fontFamily': 'Inconsolata',
        'cursorShape': 'BEAM',
        'copyOnSelect': true,
        visor:{
            hotkey: 'Command+Control+Space',
            position: 'top',
            width: 800,
            height: 600
        }
    },
    keymaps: {

    },
    plugins: [
       'hyperterm-visor',
        'hyperline',
        'hyperlinks',
        'hyper-search',
        'hyper-transparent'
    ]
};

