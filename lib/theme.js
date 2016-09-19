// Suntax shceme
const foregroundColor = '#ecf0f1'
const backgroundColor = '#2c3e50'
const cursorColor = '#1abc9c'
const borderColor = backgroundColor
const fontSize = 14
const colors = {
  black: '#1d1f21',
  red: '#cc6666',
  green: '#9ac6a2',
  yellow: '#F7EFAE',
  blue: '#81a2be',
  magenta: '#b294bb',
  cyan: '#8abeb7',
  white: '#f4f6fb',
  lightBlack: '#c5c8c6',
  lightRed: '#E39194',
  lightGreen: '#b2d2b8',
  lightYellow: '#f7f1c0',
  lightBlue: '#99b1c4',
  lightMagenta: '#b9a4bf',
  lightCyan: '#99c6c0',
  lightWhite: '#edf0f5'
}

module.exports = (config) => {
  const themeOptions = config.themeOptions || {}

  return {
    foregroundColor: themeOptions.foregroundColor || foregroundColor,
    backgroundColor: themeOptions.backgroundColor || backgroundColor,
    borderColor: themeOptions.borderColor || borderColor,
    cursorColor: themeOptions.cursorColor || cursorColor,
    colors: themeOptions.colors || colors,
    fontSize: themeOptions.fontSize || fontSize,
    cursorShape: themeOptions.cursorShape || 'BEAM',
    termCSS: `
            ${config.termCSS || ''}
            ::selection {
                background: rgba(236, 240, 241, 0.1) !important;
            }

            .cursor-node[focus=true]:not([moving]) {
                animation: blink 1s ease infinite;
            }
            @keyframes blink {
                50% {
                    opacity: 0;
                }
            }
        `,
    css: `
            ${config.css || ''}
            :selection {
                background: rgba(236, 240, 241, 0.1) !important;
            }
            .header_header {
                top: 0;
                right: 0;
                left: 0;
            }
            .tabs_list {
                background-color: #253444;
                border-bottom-color: #1f2a36 !important;
            }
            .tab_first {
                margin-left: -1px;
                border: 0 !important;
            }
            .tab_tab {
                color: #4d5e71;
                transition: background 150ms ease;
                font-style: italic;
            }
            .tab_tab:hover {
                color: #f4f6fb;
                background-color: #2a3949;
            }
            .tab_tab.tab_active {
                color: #f4f6fb;
                font-weight: 600;
                font-style: normal;
                background-color: ${backgroundColor};
                border-color: #1f2a36 !important;
            }
            .tab_tab.tab_active::before {
                border-bottom-color: ${backgroundColor};
            }
            .tab_tab.tab_hasActivity {
                color: #1abc9c;
                animation: pulse 3s ease-in-out infinite;
            }
            .tab_tab.tab_hasActivity:hover {
                animation: none;
            }
            @keyframes pulse {
                0% {
                    opacity: 1;
                }
                50% {
                    opacity: 1;
                }
                75% {
                    opacity: 0.5;
                }
              100% {
                    opacity: 1;
                }
            }
        `
  }
}
