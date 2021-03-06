const { default: Image } = require("next/image");

function HeroSection() {
    return (
        <section className="pt-36 md:pt-0 md:h-screen">
            <div className="container h-full grid grid-cols-1 gap-y-5 md:gap-y-0 md:grid-cols-[25%,auto,25%] gap-x-10 xl:gap-x-0 text-white place-items-center">
                <div className="-rotate-3 order-2 md:order-[unset]">
                    <div className="w-[75%] mx-auto md:w-full">
                        <Image src="/img/nft_1.png" alt="Nft" width={2048} height={2048} />
                    </div>
                </div>
                <div className="text-center flex flex-col items-center justify-center order-1 md:order-[unset] mb-8 md:mb-0">
                    <h1 className="font-bold uppercase text-5xl md:text-4xl lg:text-6xl text-white mb-8">
                        Mutant Ape Solana Club
                    </h1>
                    <button className="uppercase py-2.5 px-8 bg-secondary border border-secondary hover:bg-black duration-150 hover:text-secondary text-white text-lg font-bold">Mint Now</button>
                </div>

                <div className="rotate-3 order-3 md:order-[unset] mt-8 md:mt-0">
                    <div className="w-[75%] mx-auto md:w-full">
                        <Image src="/img/nft_2.png" alt="Nft" width={2048} height={2048} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
