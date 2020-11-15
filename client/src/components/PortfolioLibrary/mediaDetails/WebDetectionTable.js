import React, { useState, Component, useEffect, useMemo } from 'react'
import { useTable } from 'react-table'
import $ from 'jquery'

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        columns: [
          {
            Header: 'First Name',
            accessor: 'firstName',
          },
          {
            Header: 'Last Name',
            accessor: 'lastName',
          },
        ],
      },
    ],
    []
  )

  const data = React.useMemo(() => {return [1,2,3,4,5,6]})

  return (
      <Table columns={columns} data={data} />
  )
}

function WebDetectionTable(props) {
  let completeMatchingRow = props.webReport.webDetection.fullMatchingImages.map((e, i) => {
    return (
      <tr>
        <td>{i}</td>
        <td>Complete</td>
        <td style={{ width: '100px', wordWrap: "break-word" }}><a href={e.url} target="_blank" rel="noopener noreferrer">{e.url}</a></td>
      </tr>
    )
  });
  let partialMatchingRow = props.webReport.webDetection.partialMatchingImages.map((e, i) => {
    return (
      <tr>
        <td>{i}</td>
        <td>Partial</td>
        <td style={{ width: '100px', wordWrap: "break-word" }}><a href={e.url} target="_blank" rel="noopener noreferrer">{e.url}</a></td>
      </tr>
    )
  });
  let similarMatchingRow = props.webReport.webDetection.visuallySimilarImages.map((e, i) => {
    return (
      <tr>
        <td>{i}</td>
        <td>Similar</td>
        <td style={{ width: '100px', wordWrap: "break-word" }}><a href={e.url} target="_blank" rel="noopener noreferrer">{e.url}</a></td>
      </tr>
    )
  });
  return (
    <div className="webDetectionTableContainer">
      <div className='webDetectionTable'>
        <div>
          <div>#</div>
          <div>Match Type</div>
          <div>URL</div>
        </div>
        <div>
          {completeMatchingRow}
          {partialMatchingRow}
          {similarMatchingRow}
        </div>
      </div>
    </div>
  )
}

export default WebDetectionTable