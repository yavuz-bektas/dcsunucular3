module.exports = {
  purge: [],
  fontFamily: {
  'sans': ['Quicksand', 'Sans-serif']
},
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "2000px",
      },
      opacity: [
                "disabled"
            ],
    },
  },
  variants: {
    textColor: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus','active'],
    opacity: ['group-hover','active','disabled'],
    animation: ['hover', 'focus', 'group-hover', 'active'],
    scale: ['group-hover','hover'],
    rotate: ['group-hover'],
    cursor: ['disabled'],
     transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']

  },
  plugins: [],
}
