import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // <a href="https://www.freepik.com/free-vector/alien-planet-surface-futuristic-landscape-with-glowing-flying-rocks-two-moons-dusk-starry-sky-scientific-discovery-fantasy-computer-game-scene-cartoon-vector-illustration_11420896.htm#query=flat%20landscape%20cyberpunk&position=37&from_view=search&track=ais&uuid=4581aa64-ac66-485f-9278-75611eb88fe1">Image by upklyak</a> on Freepik
        'bk-image': 'url(/background-image.jpg)',
      }
    },
  },
  plugins: [],
}

export default config
