import Link from "next/link";

export default function Header() {
    return (
      <header className="p-2 bg-slate-800 text-slate-250 text-neutral-50">
        <nav>
          <ul className="flex items-center justify-center gap-3">
            <li className="font-bold">
              <Link href="/">Ссылка на блог</Link>
            </li>
            <li className="font-bold">
              <Link href="https://github.com/pafnuto?tab=repositories" target="_blank">
                Ссылка на мои репозитарии
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }


