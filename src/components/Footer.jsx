const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 items-center justify-between">
      <h1 className="text-2xl font-bold">Portofolio</h1>
      <div className="flex gap-7">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang</a>
        <a href="#proyek">Proyek</a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/msyfk" target="_blank" rel="noopener noreferrer">
          <i class="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/ea.msyfkaaa__/" target="_blank" rel="noopener noreferrer">
          <i class="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://x.com/msyfka_" target="_blank" rel="noopener noreferrer">
          <i class="ri-twitter-fill ri-2x"></i>
        </a>
        <a href="https://www.youtube.com/@mahasiswauyepe" target="_blank" rel="noopener noreferrer">
          <i class="ri-youtube-fill ri-2x"></i>
        </a>
      </div>
    </div>
  )
}

export default Footer