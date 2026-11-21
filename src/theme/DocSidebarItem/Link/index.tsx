import React from 'react'
import Original from '@theme-original/DocSidebarItem/Link'
import type {Props} from '@theme/DocSidebarItem/Link'

const badges = {'policy-expression-reference':'V2','audit-event-catalog':'NEW',mcp:'V2','BoundaryQL-Reference':'BETA'}
export default function SidebarLink(props: Props) {
  const slug = props.item.href.split('/').filter(Boolean).pop()
  const badge = badges[slug as keyof typeof badges]
  if (!badge) return <Original {...props}/>
  return <Original {...props} item={{...props.item,label:<>{props.item.label}<span className={'releaseBadge '+badge.toLowerCase()}>{badge}</span></> as unknown as string}}/>
}
