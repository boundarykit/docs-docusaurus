import React from 'react'

export default function PolicyBadge({effect}: {effect: 'allow' | 'deny'}) { return <strong className='badge badge--secondary'>{effect}</strong> }
