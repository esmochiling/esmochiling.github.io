import React, { Component, Fragment } from 'react'
import { withRouter } from 'next/router'
import FontAwesome from 'react-fontawesome'
import Link from './Link'
import PropTypes from 'prop-types'

import Logo from './Logo'
import { withNamespaces, i18n } from '../../i18n'

class Header extends Component {
  static async getInitialProps () {
    return {
      namespacesRequired: ['proposals']
    }
  }

  render () {
    const { light, t } = this.props
    const urlPrefix = i18n.language === 'es' ? '' : i18n.language
    const otherLang = i18n.language === 'es' ? 'en' : 'es'

    return (
      <header className={`Header ${light ? 'Header--light' : ''}`}>
        <div className='Header-child'>
          <h1>
            <Link href='/'>
              <a className='Header-logo'>
                <span className='Header-logoObj u-rSpace--m'>
                  <Logo light={!!light} />
                </span>
                <span className='Header-logoSub Text Text--strong Text--small Color--emphasis'>{t('subtitle')}</span>
              </a>
            </Link>
          </h1>
        </div>

        <div className='Header-child Header-subLinks'>
          <nav className='Header-nav'>
            <ul className='Header-navList Text Text--med Text--strong'>
              <li className='Header-navListItem'>
                <Link href={`${urlPrefix}/${t('routes.proposals')}`} activeClassName='is-selected'>
                  <a className='Header-navListItemLink Color--linkSecondary'>{t('routes.proposals')}</a>
                </Link>
              </li>
              <li className='Header-navListItem'>
                <Link href={`${urlPrefix}/${t('routes.experiences')}`} activeClassName='is-selected'>
                  <a className='Header-navListItemLink Color--linkSecondary'>{t('routes.experiences')}</a>
                </Link>
              </li>
              <li className='Header-navListItem'>
                <Link href={`${urlPrefix}/${t('routes.team')}`} activeClassName='is-selected'>
                  <a className='Header-navListItemLink Color--linkSecondary'>{t('routes.team')}</a>
                </Link>
              </li>
              <li className='Header-navListItem'>
                <Link href={`${urlPrefix}/${t('routes.contact')}`} activeClassName='is-selected'>
                  <a className='Header-navListItemLink Color--linkSecondary'>{t('routes.contact')}</a>
                </Link>
              </li>
              <li className='Header-navListItem'>
                <Link href={`${otherLang === 'en' ? otherLang : ''}/`} activeClassName='is-selected'>
                  <a className='Color--linkSecondary'>
                    <FontAwesome
                      name='globe'
                    />{' '}
                    { otherLang }
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className='Header-child Header-hamburguer js-responsiveHeader'>
          <FontAwesome
            className='Color--linkSecondary'
            name='bars'
          />
        </div>
      </header>
    )
  }
}

Header.propTypes = {
  light: PropTypes.bool,
  t: PropTypes.func.isRequired
}

export default withNamespaces('common')(withRouter(Header))
