import React from 'react'

export default function MetricCallout({label,value}: {label:string,value:number}) { return <aside>{label}: <strong>{value}</strong></aside> }
