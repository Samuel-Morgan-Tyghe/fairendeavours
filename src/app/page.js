import Link from "next/link";
import {FacebookLogoIcon, InstagramLogoIcon} from "@phosphor-icons/react/ssr";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function Home() {
  return (
      <div className={'flex flex-col min-h-screen flex-1 items-center justify-center p-12'}>
        <div className={'lg:max-w-[33%] md:max-w-[60%]'}>
            <img src={`${basePath}/logo.png`} alt={'Logo'} className={'w-full h-auto'} />
            <p className={'font-serif italic mt-24 lg:mt-36 text-sm'}>Purveyors of fine live music events across the UK since 2013</p>
            <div className={'mt-7 flex space-x-4 items-center'}>
                <Link href={'https://linktr.ee/fairendeavours'} target={'_blank'} className={'font-bold uppercase tracking-widest text-sm'}>
                    Listings
                </Link>
                <div className={'border-l border-l-black pl-4 flex space-x-4 items-center'}>
                    <Link href={'mailto:fairendeavours@gmail.com'} className={'font-bold uppercase tracking-widest text-sm'}>
                        Contact
                    </Link>
                    <div className={'border-l border-l-black pl-4 flex space-x-2 items-center'}>
                        <Link href={'https://www.facebook.com/fairendeavours'} target={'_blank'}>
                            <FacebookLogoIcon className={'size-5'} weight={'fill'} />
                        </Link>
                        <Link href={'https://www.instagram.com/fairendeavours'} target={'_blank'}>
                            <InstagramLogoIcon className={'size-5'} weight={'fill'} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}
