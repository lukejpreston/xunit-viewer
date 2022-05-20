import React from 'react'

const issueUrl = 'https://github.com/lukejpreston/xunit-viewer/issues/new?assignees=&labels=&template=issue.md&title='

const Error = ({ errors }) => {
  return (
    <div className='content mt-5'>
        <h2 className='subtitle has-text-danger'>Errors found</h2>
        <p>There was an error parsing your data.</p>
        <ul>
            {errors.map(({ file, error }) => (
                <li key={file}>
                    <b>{file}</b>
                    <br />
                    <p>{error}</p>
                </li>
            ))}
        </ul>
        <p>
            If you think this is an issue with the library please raise it here <a href={issueUrl} target='_blank' rel="noreferrer">GitHub Issue</a>
        </p>
    </div>
  )
}

export default Error
