import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
    plugins: [
        VitePWA({
            strategies: 'injectManifest',
            srcDir: 'src',
            filename: 'sw.ts',
        includeAssets: [
            'assets/favicon.ico',
            'robots.txt',
            'assets/apple-touch-icon.png',
        ],  
      manifest: {
        name: 'Freddi.link',
        short_name: 'Freddi´s Link Collection',
        description: 'Freddi´s Link Collection',
        theme_color: '#202124',
        icons: [
          {
            src: "assets/android-chrome-192x192.png",
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'assets/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          }
        ]
      }
    })
  ]    
})