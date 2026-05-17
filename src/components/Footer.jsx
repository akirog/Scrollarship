import YouTubeIcon from '/src/assets/youtube.svg'
import TikTokIcon from '/src/assets/tiktok.svg'
import InstagramIcon from '/src/assets/instagram.svg'
import XIcon from '/src/assets/x.svg'
import logoName from '/src/assets/logoName.svg'

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <img alt='YouTube icon' src={YouTubeIcon} />
          <img alt='TikTok icon' src={TikTokIcon} />
          <img alt='Instagram icon' src={InstagramIcon} />
          <img alt='X/Twitter icon' src={XIcon} />
        </div>
        <img alt='Scrollarship logo' src={logoName} />
        <p>© 2026 Scrollarship, Inc. All rights reserved. </p>
      </div>
      <div>
        <b><p>Navigation</p></b>
        <p>Home</p>
        <p>Account</p>
        <p>Explore</p>
      </div>
      <div>
        <b><p>Compliance</p></b>
        <p>Privacy Policy</p>
        <p>Terms & conditions</p>
      </div>
    </footer>
  )
}

export default Footer
