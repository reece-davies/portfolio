import Image from "next/image"

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center pt-10 pb-15">
        <a className="flex items-center justify-center p-1 gap-2 text-xl">
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Reece Davies
        </a>
      </footer>
  );
}