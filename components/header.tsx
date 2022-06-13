import Link from 'next/link';

const Header = () => {
    return (
        <h2 className="flex justify-center bg-black">
            <div className="
                flex justify-between py-2 px-5 w-full max-w-7xl
                text-xl tracking-tight leading-tight text-slate-50 md:text-2xl md:tracking-tighter"
            >
                <Link href="/">
                    <a className="">Dawning Blog</a>
                </Link>
                <div className="flex">
                    <div className="ml-3">程式文章</div>
                    <div className="ml-3">程式雜記</div>
                </div>
            </div>
        </h2>
    );
};

export default Header;
