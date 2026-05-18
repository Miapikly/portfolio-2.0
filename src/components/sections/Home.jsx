export const Home = () => {
    return (
        < section id="home" className="min-h-screen flex items-center justify-center relative" >
            <div className="text-center z-10 px-4 ">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-right">Hi, I'm Miapikly</h1>
                <p className="mb-6">
                    Creative coder who aspires to make games, does art, and is learning music as well!
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="border border-rose-500/50 text-yellow-500 py-5 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">View Projects</a>
                    <a href="#contact" className="border border-rose-500/50 text-yellow-500 py-5 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">Contact Me</a>
                </div>
            </div>
        </section>
    );
}