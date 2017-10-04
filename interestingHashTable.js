//Run this in React


 const items = [
    { key: 'flargle', usefulStuff: 'xyz' },
    { key: 'flargle', usefulStuff: 'xyz' },
    { key: 'argle', usefulStuff: 'xyz' },
    { key: 'flargle', usefulStuff: 'xyz' },
    { key: 'wargle', usefulStuff: 'xyz' },
    { key: 'bargle', usefulStuff: 'xyz' },
    { key: 'wargle', usefulStuff: 'xyz' }
  ]
  const hash = items.reduce((table, item) => {
    table[item.key] = item
    return table
  }, {})

  return (
    <ul>
      {Object.keys(hash).map(key => <li>{key}</li>)}
    </ul>
  )
