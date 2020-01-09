/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link } from '@theme-ui/components'

type TOCItem = {
  url: string
  title: string
  items: TOCItem[]
}

export type TOC = {
  items: TOCItem[]
}

export type TableOfContentsProps = {
  toc: TOC
}

export function TableOfContents({ toc, ...props }: TableOfContentsProps) {
  const children = toc.items[0].items

  // TODO: children is null for the integrations page for some reason
  if (!children) {
    console.warn("There's no heading to render for toc")
    return null
  }

  return (
    <div {...props}>
      <Styled.h5
        sx={{
          borderBottomStyle: 'dashed',
          borderBottomWidth: 1,
          borderColor: 'grayMed',
          padding: 3,
          pt: '6.25rem',
        }}
      >
        On this page
      </Styled.h5>
      <ul>
        {children.map(({ url, title }) => (
          <li
            key={url}
            sx={{
              lineHeight: 1.5,
              borderBottomStyle: 'dashed',
              borderBottomWidth: 1,
              borderColor: 'grayMed',
              padding: 3,
            }}
          >
            <Link
              href={url}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                ':visited': {
                  color: 'inherit',
                },
                ':hover': {
                  textDecoration: 'none',
                  color: 'primarySafe',
                },
              }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
