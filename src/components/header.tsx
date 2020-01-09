/** @jsx jsx */
import { jsx } from 'theme-ui'
import Icon from './icon'
import Hamburger from './sideNav/hamburger'
import TopNav from './topNav'

const Header = () => {
  return (
    <header sx={{ gridArea: 'header', bg: 'secondaryDark', color: 'white' }}>
      <div
        sx={{
          display: 'grid',
          gridTemplateColumns: ['100%', '18rem auto', '18rem 48rem auto'],
          minHeight: '100%',
          gridTemplateAreas: [
            `
            'mobile'
            `,
            `
            'brand nav nav'
            `,
            `
            'brand nav nav'
            `,
          ],
        }}
      >
        <span sx={{ gridArea: 'brand', display: ['none', 'flex'], alignItems: 'center', ml: [4, 6, 6] }}>
          <Icon name="launchdarkly-logo" variant="header" sx={{ height: [null, 3, 3] }} />
          <span
            sx={{ pl: [null, 1, 1], pt: [null, 1, 1], fontSize: [null, 2, 2], display: ['none', 'block', 'block'] }}
          >
            DOCS
          </span>
        </span>
        <span
          sx={{
            gridArea: ['mobile', 'nav'],
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            whiteSpace: 'nowrap',
          }}
        >
          <Icon name="launchdarkly-icon" variant="header" sx={{ height: 3, mx: 4, display: ['block', 'none'] }} />
          <span sx={{ ml: [0, 7, 9] }}>
            <TopNav />
          </span>
          <div
            sx={{
              gridArea: ['nav'],
              display: 'flex',
              alignItems: 'right',
              width: ['100%', '100%', '35%'],
              mx: [0, 4],
              ml: [0, 0, 4],
            }}
          >
            <Icon name="search" variant="search" sx={{ display: ['none', 'block', 'block'] }} />
            <input
              type="text"
              placeholder="Search"
              sx={{
                pl: 2,
                border: 0,
                borderRadius: 1,
                height: 4,
                fontSize: 4,
                width: '100%',
                '::placeholder': { fontSize: [4, 3, 4] },
              }}
            />
          </div>
          <span sx={{ display: ['block', 'none'], mx: 4 }}>
            <Hamburger />
          </span>
        </span>
      </div>
    </header>
  )
}

export default Header
