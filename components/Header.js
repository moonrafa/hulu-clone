import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-black w-100 h-20">
      <h1>Build</h1>
      <Image
        className="object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
        width={200}
        height={100}
      />
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  )
}

export default Header
