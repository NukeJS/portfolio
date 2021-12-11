import { getCLS, getFID, getLCP, getTTFB, getFCP } from 'web-vitals'
import { Plugin } from '@nuxt/types'

function send(data: Record<string, any>) {
  navigator.sendBeacon(
    'https://google-analytics.com/collect',
    new URLSearchParams({
      ...{
        v: '1',
        tid: 'UA-167439765-3',
        cid: `${Date.now()}${Math.random()}`,
        dl: location.href,
        ua: navigator.userAgent,
        dr: document.referrer || '',
        sr: `${screen.width}x${screen.height}`,
        vp: `${document.documentElement.clientWidth}x${document.documentElement.clientHeight}`,
        sd: `${screen.pixelDepth}-bits`,
        ul: navigator.language,
      },
      ...data,
    }).toString()
  )
}

function measureWebVitalsMetrics({ name, delta, id }: Record<string, any>) {
  send({
    t: 'event',
    ec: 'Web Vitals',
    ea: name,
    el: id,
    ev: Math.round(name === 'CLS' ? delta * 1000 : delta),
    ni: '1',
  })
}

const plugin: Plugin = ({ app }) => {
  app.router?.afterEach(() => {
    send({ t: 'pageview' })

    getCLS(measureWebVitalsMetrics)
    getFID(measureWebVitalsMetrics)
    getLCP(measureWebVitalsMetrics)
    getTTFB(measureWebVitalsMetrics)
    getFCP(measureWebVitalsMetrics)
  })
}
export default plugin
