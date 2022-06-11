import Link from 'next/link'

const Header = () => {
  return (
    <h2 className="flex justify-between text-slate-50 text-xl md:text-2xl tracking-tight md:tracking-tighter leading-tight px-4 py-2 bg-black space-x-1">
      <Link href="/">
        <a className="">Dawning Blog</a>
      </Link>
      <div className="flex justify-around">
        <div className="ml-3">程式文章</div>  
        <div className="ml-3">程式雜記</div>  
      </div>      
    </h2>
  )
}

export default Header
