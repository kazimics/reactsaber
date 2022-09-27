import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
const pathResolve = (dir: string) => resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 4000,
    open: true,
    cors: true,

    // 设置代理，根据我们项目实际情况配置
    proxy: {
      '/api': {
        target: 'https://api.github.com/', // 后台服务地址
        changeOrigin: true, // 是否允许不同源
        secure: true, // 支持https
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': pathResolve('./src'),
      pages: pathResolve('./src/pages'),
      components: pathResolve('./src/components'),
      assets: pathResolve('./src/assets')
    }
  },
  plugins: [
    react(),
    AutoImport({
      imports: ['react', 'react-router-dom'],
      dts: true,
      eslintrc: {
        enabled: true, // Default `false`
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    })
  ],
  build: {
    // 消除打包大小超过500kb警告
    chunkSizeWarningLimit: 2000,
    // 在生产环境移除console.log
    terserOptions: {
      compress: {
        drop_console: false,
        pure_funcs: ['console.log', 'console.info'],
        drop_debugger: true
      }
    },
    minify: 'terser',
    assetsDir: 'static/assets',
    // 静态资源打包到dist下的不同目录
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  }
})
