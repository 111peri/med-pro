import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Green: '#A7CBB6', 
        lightBlue: '#9CC8FC',  
        gray: {
          100: '#F0F0F0',
        },
        pink: '#FFAEAD',
      },
      fontFamily: {
        gilroy: ['gilroy', 'sans-serif'],
      },
      width: {
        'custom-1300': '1300px',
        'custom-1236': '1236px',
        'custom-796': '796px',
        'custom-776': '776px',
        'custom-640': '640px',
        'custom-600': '600px',
        'custom-592': '592px',
        'custom-504': '504px', 
        'custom-566': '566px', 
        'custom-541': '541px',
        'custom-458': '458px', 
        'custom-420': '420px',
        'custom-390': '390px',
        'custom-290': '290px',
         'custom-294': '294px',
        'custom-270': '270px',
        'custom-229': '229px',
         'custom-192': '192px',
         'custom-145': '145px',
        'custom-100': '100px',
        'custom-62': '62px'
      },
      height: {
        'custom-774': '774px',
        'custom-600': '600px',
        'custom-504': '504px',
        'custom-566': '566px', 
        'custom-592': '592px',
        'custom-470': '470px',
        'custom-400': '400px',
        'custom-341': '341px',
        'custom-350': '350px',
        'custom-290': '290px',
        'custom-270': '270px',
        'custom-240': '240px',
        'custom-227': '227px',
        'custom-204': '204px',
        'custom-92': '92px',
        'custom-72': '72px',
        'custom-62': '62px',    
        'custom-45': '45px',
        'custom-25': '25px',
        
      },
      gap: {
        'custom-2': '27px',
      },
      padding: {
        'custom-90': '90px',
        'custom-85': '85px',
        'custom-56': '56px',
        'custom-20': '20px',
        'custom-6': '6px', 
        'custom-8': '8px', 
      },
      margin: {
        'custom-90': '90px', 
        'custom-10': '10px',
        'custom-12': '12px',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-bg": "url('/card-bg/hero_bg.png')",
        "info-bg": "url('/card-bg/info_bg.png')",
        "feedback-bg": "url('/card-bg/feedback_bg.png')",
        "questions-bg": "url('/card-bg/questions_bg.png')",
      },
    },
  },
  plugins: [],
};

export default config;
