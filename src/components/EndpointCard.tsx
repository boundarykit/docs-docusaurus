import React from 'react'

export default function EndpointCard({method,path}: {method:string,path:string}) { return <p><strong>{method}</strong> <code>{path}</code></p> }
