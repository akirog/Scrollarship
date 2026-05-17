function Footer() {
  return (
    <footer>
      <div>
        <div>
          <img alt='YouTube icon' src={'/static/images/youtube.svg'} />
          <img alt='TikTok icon' src={'/static/images/tiktok.svg'} />
          <img alt='Instagram icon' src={'/static/images/instagram.svg'} />
          <img alt='X/Twitter icon' src={'/static/images/x.svg'} />
        </div>
        <img alt='Scrollarship logo' src={'/static/images/logoName.svg'} />
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
