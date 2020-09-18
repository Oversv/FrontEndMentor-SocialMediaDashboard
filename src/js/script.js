const switcher = document.getElementById('switcher-label')
const overviewTitle = document.getElementById('overview-title')
const styles = document.documentElement.style
const darkTheme = {
    '--bg': 'hsl(230, 17%, 14%)',
    '--topBgPatter': 'hsl(232, 19%, 15%)',
    '--cardBg': 'hsl(228, 28%, 20%)',
    '--textColor1': 'hsl(228, 34%, 66%)',
    '--textColor2': 'hsl(0, 0%, 100%)',
    '--textColor3': 'hsl(0, 0%, 100%)',    
    '--toggle1': 'hsl(210, 78%, 56%)',
    '--toggle2': 'hsl(146, 68%, 55%)',
    '--hover': '#333a56'
}
const lightTheme = {
    '--bg': 'hsl(0, 0%, 100%)',
    '--topBgPatter': 'hsl(225, 100%, 98%)',
    '--cardBg': 'hsl(227, 47%, 96%)',
    '--textColor1': 'hsl(228, 12%, 44%)',
    '--textColor2': 'hsl(230, 17%, 14%)',
    '--textColor3': 'hsl(228, 12%, 44%)',   
    '--toggle1': 'hsl(230, 22%, 74%)',
    '--toggle2': 'hsl(230, 22%, 74%)',
    '--hover': '#e1e3f0'    
}

const changeTheme = theme =>{
    const customStyles = Object.keys(theme)

    for (const style of customStyles) {
        styles.setProperty(style, theme[style])
    }
}

switcher.addEventListener('click', e =>{
    e.target.previousElementSibling.checked
        ? changeTheme(darkTheme)
        : changeTheme(lightTheme)
})