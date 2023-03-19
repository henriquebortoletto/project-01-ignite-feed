import igniteFeedlogo from '@/assets/ignitefeed-logo.svg';

import S from './styles.module.css'

function Header() {
  return (
    <header className={S.header}>
      <div className={S.container}>
        <img className={S.logo} src={igniteFeedlogo} alt="Logotipo do ignite feed" loading="lazy" />
        <h1 className={S.title}>Ignite Feed</h1>
      </div>
    </header>
  )
}

export default Header
