import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { find } from 'lodash'

import Error from '../_error'
import Link from '../../src/components/Link'
import Head from '../../src/components/Head'
import Form from '../../src/components/form/Form'
import genFields from './memberFields'
import { withNamespaces } from '../../i18n'
import { updateMember, deleteMember, createMember } from '../../src/actions/TeamActions'

class MemberEdit extends Component {
  state = {
    loading: false,
    error: null
  }

  static async getInitialProps({ store, query, isServer }) {
    const { memberId } = query

    return {
      memberId,
      namespacesRequired: ['team'],
      isServer
    }
  }

  onSubmit = async data => {
    const { memberId, updateMember } = this.props
    const onDone = ({ data, error }) => {
      return error
    }
    let error

    this.setState({ loading: true, error: null })

    if (memberId) {
      error = await updateMember(data).then(onDone)
    } else {
      error = await createMember(data).then(onDone)
    }

    this.setState({ loading: false, error: (error && error.message) || null })
  }

  render() {
    const { memberId, user, members, t, children } = this.props
    const { loading, error } = this.state
    let memberData

    const fields = genFields({ t, members, memberId })

    if (user.state !== 'logged') {
      return <Error status={403} />
    }

    if (memberId) {
      memberData = find(members, ['id', memberId])
    }

    return (
      <Fragment>
        <Head title={memberData.name} />

        <div className="Block" ref={node => (this.block = node)}>
          {children} {/*Header*/}
          <div className="Breadcrumb">
            <ul className="Breadcrumb-inner">
              <li className="Breadcrumb-item">
                <Link href="/team">
                  <a className="Breadcrumb-link">{t('title')}</a>
                </Link>
              </li>
              {memberId && (
                <Fragment>
                  <li className="Breadcrumb-item Breadcrumb-item--separator">></li>
                  <li className="Breadcrumb-item">{memberData.name}</li>
                </Fragment>
              )}
            </ul>
          </div>
          <div className="Block-content">
            <Form onSubmit={this.onSubmit} fields={fields} formData={memberData} disabled={loading} />
            {error && <p className="Text Color--error u-tSpace--m">{error}</p>}
          </div>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    members: state.members,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createMember: bindActionCreators(createMember, dispatch),
    updateMember: bindActionCreators(updateMember, dispatch),
    deleteMember: bindActionCreators(deleteMember, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNamespaces('team')(MemberEdit))
