import React from 'react'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

export default function CodeTabs() { return <Tabs><TabItem value='node' label='Node.js'><code>node --test</code></TabItem><TabItem value='npm' label='npm'><code>npm test</code></TabItem></Tabs> }
