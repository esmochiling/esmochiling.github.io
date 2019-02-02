import React, { Component } from 'react'
import Head from 'next/head'

import { withNamespaces } from '../../i18n'
import config from '../../utils/config'

class HTMLHead extends Component {
  render() {
    const { t } = this.props
    const title = this.props.title ? `${this.props.title} · ${config.name}` : config.name
    const description = this.props.description || t('description')
    const image = this.props.image || '/static/assets/favicon/favicon-96x96.png'
    const keywords = this.props.keywords || t('keywords')

    return (
      <Head>
        <meta charset="utf-8" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="keywords" content={keywords} />

        {/* Google */}
        <meta itemprop="name" content={title} />
        <meta itemprop="description" content={description} />
        <meta itemprop="image" content={image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="@mochilinges" />
        <meta name="twitter:creator" content="@mochilinges" />
        <meta name="twitter:image:src" content={image} />

        {/* Open Graph general (Facebook, Pinterest & Google+) */}
        <meta name="og:title" content={title} />
        <meta name="og:description" content={description} />
        <meta name="og:image" content={image} />
        <meta name="og:url" content={config.baseURL} />
        <meta name="og:site_name" content="Mochiling" />
        <meta name="fb:admins" content="1617646415231081" />
        <meta name="og:type" content="website" />

        {/* Icons */}
        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="/static/assets/favicon/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/static/assets/favicon/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/static/assets/favicon/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/static/assets/favicon/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="/static/assets/favicon/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="/static/assets/favicon/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="/static/assets/favicon/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/static/assets/favicon/apple-touch-icon-152x152.png"
        />
        <link rel="icon" type="image/png" href="/static/assets/favicon/favicon-196x196.png" sizes="196x196" />
        <link rel="icon" type="image/png" href="/static/assets/favicon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/png" href="/static/assets/favicon/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/static/assets/favicon/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/static/assets/favicon/favicon-128.png" sizes="128x128" />
        <meta name="application-name" content="Mochiling" />
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="/static/assets/favicon/mstile-144x144.png" />
        <meta name="msapplication-square70x70logo" content="/static/assets/favicon/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="/static/assets/favicon/mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="/static/assets/favicon/mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="/static/assets/favicon/mstile-310x310.png" />
      </Head>
    )
  }
}

export default withNamespaces(['common'])(HTMLHead)
