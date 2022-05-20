import React from 'react'

const issueUrl = 'https://github.com/lukejpreston/xunit-viewer/issues/new?assignees=&labels=&template=issue.md&title='

const Error = ({ error }) => (
    <div className='content mt-5'>
        <h2 className='subtitle has-text-danger'>Error</h2>
        <p>There was an error parsing your data.</p>
        <p>{error}</p>
        <p>
            If you think this is an issue with the library please raise it here <a href={issueUrl} target='_blank' rel="noreferrer">GitHub Issue</a>
        </p>
    </div>
)

export default Error
