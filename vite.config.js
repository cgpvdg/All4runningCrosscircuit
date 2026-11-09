import { readFileSync } from 'node:fs'
import { copyFile, mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { pages } = JSON.parse(readFileSync(new URL('./src/content.json', import.meta.url), 'utf8'))
const domain = readFileSync(new URL('./public/CNAME', import.meta.url), 'utf8').trim()

const staticRoutes = {
  name: 'static-route-entry-points',
  apply: 'build',
  async writeBundle({ dir }) {
    const entry = join(dir, 'index.html')
    await Promise.all(pages.map(async ({ slug }) => {
      const directory = join(dir, slug)
      await mkdir(directory, { recursive: true })
      await copyFile(entry, join(directory, 'index.html'))
    }))
    await copyFile(entry, join(dir, '404.html'))

    const paths = ['/', ...pages.map(({ slug }) => `/${slug}/`)]
    const urls = paths.map(path => `  <url><loc>https://${domain}${path}</loc></url>`)
    const sitemap = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...urls,
      '</urlset>',
      ''
    ].join('\n')
    await writeFile(join(dir, 'sitemap.xml'), sitemap, 'utf8')
  }
}

export default defineConfig({
  plugins: [vue(), staticRoutes]
})
